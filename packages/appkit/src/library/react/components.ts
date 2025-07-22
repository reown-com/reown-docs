import { createComponent } from '@lit/react'
import React from 'react'
import { AppKitButton as AppKitButtonElement } from '../components/appkit-button.js'
import { AppKitNetworkButton as AppKitNetworkButtonElement } from '../components/appkit-network-button.js'

// React wrapper for AppKitButton without React postfix
export const AppKitButton = createComponent({
  tagName: 'appkit-button',
  elementClass: AppKitButtonElement,
  react: React,
  events: {
    onClick: 'click',
    onFocus: 'focus',
    onBlur: 'blur'
  }
})

// React wrapper for AppKitNetworkButton without React postfix  
export const AppKitNetworkButton = createComponent({
  tagName: 'appkit-network-button',
  elementClass: AppKitNetworkButtonElement,
  react: React,
  events: {
    onClick: 'click',
    onFocus: 'focus', 
    onBlur: 'blur'
  }
})