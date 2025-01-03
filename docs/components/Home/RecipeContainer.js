import React from 'react'
import Link from '@docusaurus/Link'

const RecipeContainer = ({ href, name, icon, description, isWhite }) => {
  return (
    <Link to={href} className="home__recipe-container">
    <div className="home__recipe-container--nofit">

      <img
        src={icon}
        alt={name}
        className={isWhite ? 'white' : undefined}
      />
      </div>
      <div className="home__recipe-container--text">
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </Link>
  )
}

export default RecipeContainer
