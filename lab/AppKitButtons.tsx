import React from 'react'
import { AppKitButton, AppKitNetworkButton } from '@reown/appkit/react'

export function AppKitButtons() {
  return (
    <div className="appkit-buttons-demo">
      <h2>AppKit React Components Demo</h2>
      
      <div className="button-group">
        <h3>AppKit Button</h3>
        <AppKitButton 
          onClick={() => console.log('AppKit button clicked')}
        />
      </div>

      <div className="button-group">
        <h3>AppKit Network Button</h3>
        <AppKitNetworkButton 
          onClick={() => console.log('Network button clicked')}
        />
      </div>
    </div>
  )
}

export default AppKitButtons