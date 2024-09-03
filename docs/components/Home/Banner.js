import React from 'react'
import logo from '../../../static/assets/reown-docs-banner.png'
import styles from '../../../src/css/banner.module.css'
import Link from '@docusaurus/Link'

const Banner = () => {
  return (
    <div className={styles.banner__container}>
      <div className={styles.banner__text}>
        <h2>re:own Docs</h2>
        <p>
        re:own gives developers the tools to build user experiences that make digital ownership effortless, intuitive, and secure.
        </p>
      </div>
      <div className={styles.banner__backdrop} />
      <img className={styles.banner__image} src={logo} alt="re:org banner" />
    </div>
  )
}

export default Banner
