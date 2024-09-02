import Link from '@docusaurus/Link'
import React from 'react'

const LargeContainer = ({ href, name, icon, description, fit, isWhite }) => {

  return (
    <Link to={href} className="home__large-container">
      {fit ? (
        <img src={icon} alt={name} className="home__large-container--icon" />
      ) : (
        <div className="home__large-container--nofit">
          <img
            src={icon}
            alt={name}
            className={`home__large-container--icon ${isWhite ? 'white' : ''}`}
          />
          <img
            className={`blur home__large-container--icon ${isWhite ? 'white' : ''}`}
            src={icon}
            alt={name}
          />
        </div>
      )}

      <div className="home__large-container--text">
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </Link>
  )
}

export default LargeContainer
