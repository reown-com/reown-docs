import React from 'react'
import styles from '../../../src/css/banner.module.css'
import Link from '@docusaurus/Link'

const Banner = () => {
  return (
    <div className={styles.banner__container}>
      <div className={styles.banner__text}>
        <h2>Reown</h2>
        <p>
        Reown is a UX-focused company that provides toolkits – AppKit and WalletKit – for anyone building onchain to leverage and unlock better UX.        </p>
      </div>
    </div>
  )
}

export default Banner
