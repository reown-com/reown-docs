import React from 'react'
import DocSidebar from '@theme-original/DocSidebar'
import Dropdown from '../Dropdown'
import '../../css/sidebar.css'
import { useLocation } from 'react-router-dom'
import { appKit_environments, walletKit_environments } from './constants'

export default function DocSidebarWrapper(props) {
  return (
    <>
      <li className="custom-list__logo">
        <a className="navbar__brand" href="/">
          <div className="">
            <img src="/img/walletconnect-logo-black.svg#dark-mode-only" alt="re:own Logo" />
            <img src="/img/walletconnect-logo-black.svg#light-mode-only" alt="re:own Logo" />
          </div>
        </a>
      </li>
      <FrameworksMenu />
      <DocSidebar {...props} />
    </>
  )
}

export const FrameworksMenu = () => {
  const location = useLocation()

  if (
    location.pathname.includes('/appkit/overview') ||
    location.pathname.includes('/appkit/features') ||
    location.pathname.includes('/appkit/migration') ||
    location.pathname.includes('/appkit/upgrade') ||
    location.pathname.includes('/walletkit/overview') ||
    location.pathname.includes('/walletkit/features') ||
    location.pathname.includes('/walletkit/best-practices')
  ) {
    return
  }

  if (location.pathname.includes('/appkit/')) {
    return (
      <Dropdown
        list={appKit_environments}
      />
    )
  }

  if (location.pathname.includes('/walletkit/')) {
    return (
      <Dropdown
        list={walletKit_environments}
        isWalletKit
      />
    )
  }
}
