import React from 'react'
import styles from '../../../src/css/banner.module.css'
import Link from '@docusaurus/Link'

const Banner = () => {
  return (
    <div className={styles.banner__container}>
      <div className={styles.banner__text}>
        <h2>Reown Docs</h2>
        <p>
        Reown gives developers the tools to build user experiences that make digital ownership effortless, intuitive, and secure.
        </p>
        <Link className=".blue__button" to="appkit/overview">
          Start Building
        </Link>
      </div>
      <img className={styles.banner__image} src='/reown/banner-image.svg' alt="Reown Banner" />
    </div>
  )
}

export default Banner
