import React from 'react'
import wcGlassImage from '../../static/assets/wc-logo-glass-full.webp'
import Link from '@docusaurus/Link'

export const CloudBanner = ({ title, description, href, image = wcGlassImage }) => {
  return (
    <div className="cloud__wrapper" style={{ padding: '1.67rem' }}>
      <div className="cloud__text-container">
        <b><p>WalletConnect Inc. is now known as Reown. See walletconnect.network for information about the WalletConnect Network.</p></b>
      </div>
      <Link to={"https://reown.com/blog/walletconnect-is-now-reown"}>
        Learn More
      </Link>
      {image === wcGlassImage ? (
        <img
          style={{
            transform: 'scale(1.5) scaleX(-1)'
          }}
          className="cloud__image"
          src={image}
          alt="cloud illustration"
        />
      ) : (
        <img
          className="cloud__image"
          src={image}
          alt="cloud illustration"
          style={{
            transform: 'scale(0.75)'
          }}
        />
      )}
    </div>
  )
}

export default CloudBanner
