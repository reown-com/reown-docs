import Link from '@docusaurus/Link'
import React from 'react'
import { useHistory } from 'react-router-dom'


const GithubBox = ({ name, description, url }) => {
  let history = useHistory()

  const handleClick = e => {
    e.preventDefault()
    if (url.includes('https://')) {
      window.open(url, '_blank')
    } else {
      history.push(url)
    }
  }

  return (
    <div className="githubbox" >
    <div style={{ marginRight: '20px' }}>
      {/* GitHub Logo */}
      <img 
        src="/assets/github.svg" 
        alt="GitHub" 
        style={{ width: '40px', height: '40px' }}
      />
    </div>
    <div>
      <Link to={url} onClick={() => console.log('Link clicked')}>
        <h3 style={{ fontSize: '20px', margin: '0' }}>{name}</h3>
        <p style={{ margin: '0', fontSize: '14px', color: '#7b7878' }}>{description}</p>
      </Link>
    </div>
  </div>
  )
}

export default GithubBox
