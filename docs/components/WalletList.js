import React, { useRef } from 'react'
import { useEffect, useState } from 'react'
import WalletCard from './WalletCard'

const WalletList = () => {
  const [chains, setChains] = useState([])
  const [originalChainsArray, setOriginalChainsArray] = useState([])

  const inputRef = useRef(null)

  useEffect(() => {
    fetch(
      'https://explorer-api.walletconnect.com/v3/wallets?projectId=8e998cd112127e42dce5e2bf74122539'
    )
      .then(response => response.json())
      .then(data => {
        setChains(data.listings)
        setOriginalChainsArray(
          Object.keys(data.listings).map(key => ({ ...data.listings[key], namespace: key }))
        )
      })
      .catch(error => console.error(error))
  }, [])

  const chainsArray = Object.keys(chains).map(key => ({
    ...chains[key],
    namespace: chains[key].namespace || key
  }))


  return (
    <div className="chain-list">
      <div className="chain-list__header">
        <div className="chains-list__search__container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            type="text"
            name="search"
            className="chain-list__search"
            placeholder="Search for a wallet..."
            ref={inputRef}
            onChange={e => {
              const search = e.target.value
              const filteredChains = originalChainsArray
                .filter(chain => {
                  return chain.name.toLowerCase().includes(search.toLowerCase())
                })
              setChains(filteredChains)
            }}
          />
        </div>
      </div>
      <div className="chain-card-container">
        {chainsArray?.map((wallet, index) => {
          return <WalletCard key={index} walletName={wallet.name} namespace={wallet.id} imgSrc={wallet.image_url.sm} />
        })}
      </div>
    </div>
  )
}

export default WalletList
