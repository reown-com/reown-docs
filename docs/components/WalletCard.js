import React, { useState } from 'react'

const ChainCard = ({ walletName, namespace, imgSrc }) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(namespace)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }
  return (
    <button style={{width:'100%', textAlign: 'center', padding: '5px'}} onClick={handleCopy}>
      {copied ? <span>Wallet ID copied!</span> : <span ><img style={{verticalAlign: 'middle', margin:"7px"}} src={imgSrc} width="40" height="40"/><br/> <span width="100px">{walletName}</span></span>}
    </button>
    
  )
}

export default ChainCard