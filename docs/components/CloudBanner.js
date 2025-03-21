import React from 'react'
import wcGlassImage from '../../static/assets/wc-logo-glass.png'
import Link from '@docusaurus/Link'

export const CloudBanner = props => {
  return (
    <div className="cloud__wrapper">
      <div className="cloud__text-container">
        <h2>Don't have a project ID?</h2>
        <p>Head over to Reown Cloud and create a new project now!</p>
      </div>
      <Link to="https://cloud.reown.com/?utm_source=cloud_banner&utm_medium=docs&utm_campaign=backlinks" target="_blank">
        Get started
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          height={20}
          width={20}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </Link>
      <img className="cloud__image" src={wcGlassImage} alt="cloud illustration" />
    </div>
  )
}

export default CloudBanner
