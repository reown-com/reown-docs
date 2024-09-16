import Link from '@docusaurus/Link'
import React from 'react'

const LargeContainer = ({ href, name, icon, description, isWhite }) => {

  return (
    <Link to={href} className="home__large-container">
      <div className="home__large-container--nofit">
        <img src={icon} style={{ maxHeight: '40px' }} alt={name} className={isWhite ? `white` : undefined} />
      </div>

      <div className="home__large-container--text">
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </Link>
  )
}

export default LargeContainer
