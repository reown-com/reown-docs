import React from 'react'
import Link from '@docusaurus/Link'

const CenteredContainer = ({ href, name, icon, description }) => {
  return (
    <Link to={href} className="home__centered-container">
      <img src={icon} alt={name} />
      <h4>{name}</h4>
      <p>{description}</p>
    </Link>
  )
}

export default CenteredContainer
