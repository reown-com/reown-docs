import React from 'react'
import Link from '@docusaurus/Link'

const MediumContainer = ({ href, name, icon, description, isWhite }) => {
  return (
    <Link to={href} className="home__medium-container">
      <div className="home__medium-container--nofit">
        <img
          src={icon}
          style={{ maxHeight: '40px' }}
          alt={name}
          className={isWhite ? 'white' : undefined}
        />
      </div>
      <div className="home__medium-container--text">
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </Link>
  )
}

export default MediumContainer
