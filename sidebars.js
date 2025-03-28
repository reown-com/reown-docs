// @ts-check

/* Global Sections */
const dropdown_placeholder = {
  type: 'html',
  value: '<div class="dropdown_placeholder"></div>',
  defaultStyle: true
}

const cloud = {
  type: 'category',
  label: 'Cloud',
  collapsible: false,
  className: 'menu_outer_list',
  items: [
    'cloud/explorer',
    'cloud/explorer-submission',
    {
      type: 'category',
      label: 'Explorer Chains',
      items: ['cloud/chains/overview', 'cloud/chains/chain-list']
    },
    {
      type: 'category',
      label: 'Explorer Wallets',
      items: ['cloud/wallets/wallet-list']
    },
    'cloud/user-management',
    'cloud/verify',
    'cloud/relay',
    'cloud/blockchain-api',
    'cloud/analytics',
    'cloud/paymaster'
  ]
}

const advanced = {
  type: 'category',
  label: 'Advanced',
  collapsible: false,
  className: 'menu_outer_list',
  items: [
    {
      type: 'category',
      label: 'Multi-Chain',
      items: [
        {
          type: 'category',
          label: 'RPC Reference',
          items: [
            'advanced/multichain/rpc-reference/cosmos-rpc',
            'advanced/multichain/rpc-reference/ethereum-rpc',
            'advanced/multichain/rpc-reference/solana-rpc',
            'advanced/multichain/rpc-reference/near-rpc',
            'advanced/multichain/rpc-reference/starknet-rpc',
            'advanced/multichain/rpc-reference/stellar-rpc',
            'advanced/multichain/rpc-reference/hedera-rpc',
            'advanced/multichain/rpc-reference/tezos-rpc',
            'advanced/multichain/rpc-reference/xrpl-rpc',
            'advanced/multichain/rpc-reference/casper-rpc',
            'advanced/multichain/rpc-reference/everscale-rpc',
            'advanced/multichain/rpc-reference/bitcoin-rpc',
            'advanced/multichain/rpc-reference/litecoin-rpc',
            'advanced/multichain/rpc-reference/dogecoin-rpc'
          ]
        },
        {
          type: 'category',
          label: 'Examples',
          items: [
            ,
            {
              type: 'category',
              label: 'Polkadot',
              items: [
                'advanced/multichain/polkadot/dapp-integration-guide',
                'advanced/multichain/polkadot/namespaces-guide',
                'advanced/multichain/polkadot/wallet-integration-guide'
              ]
            }
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Providers & Adapters',
      collapsible: true,
      collapsed: true,
      items: [
        'advanced/providers/ethereum',
        'advanced/providers/universal',
        'advanced/providers/solana-adapter'
      ]
    },
    {
      type: 'category',
      label: 'APIs',
      collapsed: true,
      collapsible: true,
      items: [
        {
          type: 'category',
          label: 'Core',
          items: ['api/core/pairing', 'api/core/relay', 'api/core/shared-core']
        },
        {
          type: 'category',
          label: 'Notify',
          items: ['api/notify/about']
        },
        {
          type: 'category',
          label: 'Sign',
          items: [
            'api/sign/overview',
            'api/sign/dapp-usage',
            'api/sign/wallet-usage',
            'api/sign/smart-contract-wallet-usage'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Security',
      collapsed: true,
      collapsible: true,
      items: ['advanced/security/content-security-policy']
    },
    'advanced/push-server',
    'advanced/walletconnect-deprecations'
  ]
}

const specs = {
  type: 'category',
  label: 'Technical Reference',
  collapsible: false,
  className: 'menu_outer_list',
  items: [
    {
      type: 'link',
      label: 'Specs',
      href: 'https://specs.walletconnect.com/'
    },
    'advanced/faq'
  ]
}

const welcome = {
  type: 'category',
  label: 'INTRODUCTION',
  collapsible: false,
  className: 'menu_outer_list',
  items: [
    {
      type: 'link',
      label: 'Overview',
      href: '/'
    }
  ]
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

module.exports = {
  WCM: [
    {
      type: 'doc',
      label: 'Home',
      className: 'kill',
      id: 'readme'
    },
    {
      type: 'link',
      label: 'Overview',
      href: '/'
    },
    {
      type: 'category',
      label: 'WalletConnectModal',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        'advanced/walletconnectmodal/about',
        'advanced/walletconnectmodal/usage',
        'advanced/walletconnectmodal/options',
        'advanced/walletconnectmodal/theming',
        'advanced/walletconnectmodal/resources'
      ]
    }
  ],
  mainSidebar: [
    {
      type: 'doc',
      label: 'Home',
      className: 'kill',
      id: 'readme'
    },
    {
      type: 'category',
      label: 'INTRODUCTION',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        {
          type: 'link',
          label: 'Overview',
          href: '/'
        },
        {
          type: 'link',
          label: 'System Status',
          href: 'https://status.walletconnect.com'
        }
      ]
    },
    {
      type: 'category',
      label: 'SDKs',
      collapsible: false,
      className: 'menu_outer_list menu_outer_list--margin-top',
      items: [
        {
          type: 'category',
          label: 'AppKit',
          collapsed: false,
          collapsible: true,
          className: 'sidebar__logo sidebar__logo--appkit',
          items: [
            'appkit/overview',
            {
              type: 'category',
              label: 'Features',
              collapsed: false,
              collapsible: true,
              link:{
                type: 'doc',
                id: 'appkit/features/index'
              },
              items: [
                { type: 'doc', label: 'Swaps', id: 'appkit/features/swaps' },
                { type: 'doc', label: 'On-Ramp', id: 'appkit/features/onramp' },
                { type: 'doc', label: 'Multichain', id: 'appkit/features/multichain' },
                { type: 'doc', label: 'Smart Accounts', id: 'appkit/features/smart-accounts' },
                { type: 'doc', label: 'Notifications', id: 'appkit/features/notifications' },
                {
                  type: 'doc',
                  label: 'Telegram Mini Apps',
                  id: 'appkit/features/telegram-mini-apps'
                },
                { type: 'doc', label: 'Gas Sponsorship', id:'appkit/features/sponsored-transactions'}
              ]
            },
            {
              type: 'category',
              label: 'Networks',
              collapsed: false,
              collapsible: true,
              items: [
                { type: 'doc', label: 'EVM Chains', id: 'appkit/networks/evm' },
                { type: 'doc', label: 'Solana', id: 'appkit/networks/solana' },
                { type: 'doc', label: 'Bitcoin', id: 'appkit/networks/bitcoin' }
              ]
            },
            {
              type: 'category',
              label: 'Authentication',
              collapsed: false,
              collapsible: true,
              items: [
                { type: 'doc', label: 'Email & Social Login', id: 'appkit/authentication/socials' },
                { type: 'doc', label: 'One-Click Auth', id: 'appkit/authentication/one-click-auth' },
                {
                  type: 'doc',
                  label: 'Sign in with X (SIWX)',
                  id: 'appkit/features/siwx/default'
                },
              ]
            },
            {
              type: 'category',
              label: 'Recipes',
              collapsed:true,
              collapsible: true,
              items: [
                { type: 'doc', label: 'Build a Telegram Mini App', id: 'appkit/recipes/telegram-mini-app' },
                { type: 'doc', label: 'Configure Virtual TestNets', id: 'appkit/recipes/tenderly-virtual-testnets'},    
                { type: 'doc', label: 'EVM Transactions using Wagmi', id: 'appkit/recipes/wagmi-send-transaction'},
                { type: 'doc', label: 'EVM Transactions using Ethers', id: 'appkit/recipes/ethers-send-transaction'},
                { type: 'doc', label: 'EVM Smart Contract Interaction', id: 'appkit/recipes/EVM-smart-contract-interaction'},
                { type: 'doc', label: 'Solana Transactions using AppKit', id: 'appkit/recipes/solana-send-transaction'},
                { type: 'doc', label: 'Bitcoin Transactions using AppKit', id: 'appkit/recipes/bitcoin-send-transaction'},
                { type: 'doc', label: 'Support Send Calls', id: 'appkit/recipes/switching-to-send-calls' },
                { type: 'doc', label: 'Gas Sponsorship using AppKit', id: 'appkit/recipes/sponsoring-first-transaction' },
                { type: 'doc', label: 'Travel Rule using AppKit', id: 'appkit/recipes/travel-rule'}
              ]
            },
            {
              type: 'category',
              label: 'Upgrade',
              collapsed: true,
              collapsible: true,
              items: [
                { type: 'doc', label: 'Web3Modal to Reown AppKit', id: 'appkit/upgrade/from-w3m-to-reown' },
                //{ type: 'doc', label: 'WalletConnect Modal to AppKit Basic', id: 'appkit/upgrade/wcm' }
              ]
            },
            {
              type: 'category',
              label: 'Migration',
              collapsed: true,
              collapsible: true,
              link:{
                type: 'doc',
                id: 'appkit/migration/index'
              },
              items: [
                {
                  type: 'doc',
                  label: 'From RainbowKit',
                  id: 'appkit/migration/from-rainbowkit-next'
                },
                {
                  type: 'doc',
                  label: 'From ConnectKit',
                  id: 'appkit/migration/from-connectkit-next'
                },
                {
                  type: 'doc',
                  label: 'From Anza Adapter',
                  id: 'appkit/migration/from-anza-adapter-react'
                }
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'WalletKit',
          collapsed: false,
          collapsible: true,
          className: 'sidebar__logo sidebar__logo--walletkit',
          items: [
            'walletkit/overview',
            {
              type: 'category',
              label: 'Features',
              collapsed: false,
              collapsible: true,
              items: [
                { type: 'doc', label: 'One-Click Auth', id: 'walletkit/features/one-click-auth' },
                { type: 'doc', label: 'Notifications', id: 'walletkit/features/notifications' },
                { type: 'doc', label: 'Verify', id: 'walletkit/features/verify' }
              ]
            },
            'walletkit/best-practices',
            {
              type: 'category',
              label: 'Upgrade',
              collapsed: true,
              collapsible: true,
              items: [
                {
                  type: 'doc',
                  label: 'From Web3Wallet',
                  id: 'walletkit/upgrade/from-web3wallet-to-reown'
                }
              ]
            }
          ]
        }
      ]
    },
    cloud,
    advanced,
    specs,
    dropdown_placeholder
  ],
  AppKit_React: [
    welcome,
    {
      type: 'category',
      label: 'AppKit',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        {
          type: 'category',
          label: 'Core',
          items: [
            'appkit/react/core/installation',
            'appkit/react/core/hooks',
            'appkit/react/core/options',
            'appkit/react/core/components',
            'appkit/react/core/socials',
            'appkit/react/core/smart-accounts',
            'appkit/react/core/custom-connectors',
            'appkit/react/core/custom-networks',
            'appkit/react/core/siwe',
            'appkit/react/core/siwx',
            'appkit/react/core/multichain',
            'appkit/react/core/theming',
            'appkit/react/core/resources'
          ]
        },
        {
          type: 'category',
          label: 'Early Access',
          items: [
            'appkit/react/early-access/smart-session',
            'appkit/react/early-access/chain-abstraction'
          ]
        },
        {
          type: 'category',
          label: 'Transactions',
          items: ['appkit/react/transactions/onramp', 'appkit/react/transactions/swaps', 'appkit/react/transactions/sponsored-transactions']
        },
        {
          type: 'category',
          label: 'Notifications',
          items: [
            'appkit/react/notifications/overview',
            'appkit/react/notifications/cloud-setup',
            'appkit/react/notifications/cloud-sending',
            {
              type: 'category',
              label: 'Frontend Integration',
              items: [
                'appkit/react/notifications/frontend-integration/usage',
                'appkit/react/notifications/frontend-integration/api',
                'appkit/react/notifications/frontend-integration/examples',
                'appkit/react/notifications/frontend-integration/migration-guide'
              ]
            },
            'appkit/react/notifications/backend-integration',
            'appkit/react/notifications/demo',
            {
              type: 'category',
              label: 'Authorization Signatures',
              items: [
                {
                  type: 'doc',
                  label: 'About',
                  id: 'appkit/react/notifications/authorization-signatures/overview'
                },
                {
                  type: 'doc',
                  label: 'This App',
                  id: 'appkit/react/notifications/authorization-signatures/this-app'
                },
                {
                  type: 'doc',
                  label: 'All Apps',
                  id: 'appkit/react/notifications/authorization-signatures/all-apps'
                }
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'Cloud',
          collapsible: false,
          className: 'menu_outer_list',
          items: [
            'appkit/react/cloud/verify',
            'appkit/react/cloud/relay',
            'appkit/react/cloud/blockchain-api',
            'appkit/react/cloud/analytics'
          ]
        }
      ]
    },
    specs,
    dropdown_placeholder
  ],
  AppKit_Next: [
    welcome,
    {
      type: 'category',
      label: 'AppKit',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        {
          type: 'category',
          label: 'Core',
          items: [
            'appkit/next/core/installation',
            'appkit/next/core/hooks',
            'appkit/next/core/options',
            'appkit/next/core/components',
            'appkit/next/core/socials',
            'appkit/next/core/smart-accounts',
            'appkit/next/core/custom-connectors',
            'appkit/next/core/custom-networks',
            'appkit/next/core/siwe',
            'appkit/next/core/siwx',
            'appkit/next/core/multichain',
            'appkit/next/core/theming',
            'appkit/next/core/resources'
          ]
        },
        {
          type: 'category',
          label: 'Early Access',
          items: [
            'appkit/next/early-access/smart-session',
            'appkit/next/early-access/chain-abstraction'
          ]
        },
        {
          type: 'category',
          label: 'Transactions',
          items: ['appkit/next/transactions/onramp', 'appkit/next/transactions/swaps', 'appkit/next/transactions/sponsored-transactions']
        },
        {
          type: 'category',
          label: 'Notifications',
          items: [
            'appkit/next/notifications/overview',
            'appkit/next/notifications/cloud-setup',
            'appkit/next/notifications/cloud-sending',
            {
              type: 'category',
              label: 'Frontend Integration',
              items: [
                'appkit/next/notifications/frontend-integration/usage',
                'appkit/next/notifications/frontend-integration/api',
                'appkit/next/notifications/frontend-integration/examples',
                'appkit/next/notifications/frontend-integration/migration-guide'
              ]
            },
            'appkit/next/notifications/backend-integration',
            'appkit/next/notifications/demo',
            {
              type: 'category',
              label: 'Authorization Signatures',
              items: [
                {
                  type: 'doc',
                  label: 'About',
                  id: 'appkit/next/notifications/authorization-signatures/overview'
                },
                {
                  type: 'doc',
                  label: 'This App',
                  id: 'appkit/next/notifications/authorization-signatures/this-app'
                },
                {
                  type: 'doc',
                  label: 'All Apps',
                  id: 'appkit/next/notifications/authorization-signatures/all-apps'
                }
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'Cloud',
          collapsible: false,
          className: 'menu_outer_list',
          items: [
            'appkit/next/cloud/verify',
            'appkit/next/cloud/relay',
            'appkit/next/cloud/blockchain-api',
            'appkit/next/cloud/analytics'
          ]
        }
      ]
    },
    specs,
    dropdown_placeholder
  ],
  AppKit_Vue: [
    welcome,
    {
      type: 'category',
      label: 'AppKit',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        {
          type: 'category',
          label: 'Core',
          items: [
            'appkit/vue/core/installation',
            'appkit/vue/core/composables',
            'appkit/vue/core/options',
            'appkit/vue/core/components',
            'appkit/vue/core/socials',
            'appkit/vue/core/smart-accounts',
            'appkit/vue/core/custom-connectors',
            'appkit/vue/core/custom-networks',
            'appkit/vue/core/siwe',
            'appkit/vue/core/siwx',
            'appkit/vue/core/multichain',
            'appkit/vue/core/theming',
            'appkit/vue/core/resources'
          ]
        },
        {
          type: 'category',
          label: 'Early Access',
          items: ['appkit/vue/early-access/smart-session']
        },
        {
          type: 'category',
          label: 'Transactions',
          items: ['appkit/vue/transactions/onramp', 'appkit/vue/transactions/swaps', 'appkit/vue/transactions/sponsored-transactions']
        },
        {
          type: 'category',
          label: 'Notifications',
          items: [
            'appkit/vue/notifications/overview',
            'appkit/vue/notifications/cloud-setup',
            'appkit/vue/notifications/cloud-sending',
            {
              type: 'category',
              label: 'Frontend Integration',
              items: [
                'appkit/vue/notifications/frontend-integration/usage',
                'appkit/vue/notifications/frontend-integration/api',
                'appkit/vue/notifications/frontend-integration/examples',
                'appkit/vue/notifications/frontend-integration/migration-guide'
              ]
            },
            'appkit/vue/notifications/backend-integration',
            'appkit/vue/notifications/demo',
            {
              type: 'category',
              label: 'Authorization Signatures',
              items: [
                {
                  type: 'doc',
                  label: 'About',
                  id: 'appkit/vue/notifications/authorization-signatures/overview'
                },
                {
                  type: 'doc',
                  label: 'This App',
                  id: 'appkit/vue/notifications/authorization-signatures/this-app'
                },
                {
                  type: 'doc',
                  label: 'All Apps',
                  id: 'appkit/vue/notifications/authorization-signatures/all-apps'
                }
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'Cloud',
          collapsible: false,
          className: 'menu_outer_list',
          items: [
            'appkit/vue/cloud/verify',
            'appkit/vue/cloud/relay',
            'appkit/vue/cloud/blockchain-api',
            'appkit/vue/cloud/analytics'
          ]
        }
      ]
    },
    specs,
    dropdown_placeholder
  ],
  AppKit_JS: [
    welcome,
    {
      type: 'category',
      label: 'AppKit',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        {
          type: 'category',
          label: 'Core',
          items: [
            'appkit/javascript/core/installation',
            'appkit/javascript/core/actions',
            'appkit/javascript/core/options',
            'appkit/javascript/core/components',
            'appkit/javascript/core/socials',
            'appkit/javascript/core/smart-accounts',
            'appkit/javascript/core/custom-connectors',
            'appkit/javascript/core/custom-networks',
            'appkit/javascript/core/siwe',
            'appkit/javascript/core/siwx',
            'appkit/javascript/core/multichain',
            'appkit/javascript/core/theming',
            'appkit/javascript/core/resources'
          ]
        },
        {
          type: 'category',
          label: 'Early Access',
          items: ['appkit/javascript/early-access/smart-session']
        },
        {
          type: 'category',
          label: 'Transactions',
          items: ['appkit/javascript/transactions/onramp', 'appkit/javascript/transactions/swaps', 'appkit/javascript/transactions/sponsored-transactions']
        },
        {
          type: 'category',
          label: 'Notifications',
          items: [
            'appkit/javascript/notifications/overview',
            'appkit/javascript/notifications/cloud-setup',
            'appkit/javascript/notifications/cloud-sending',
            {
              type: 'category',
              label: 'Frontend Integration',
              items: [
                'appkit/javascript/notifications/frontend-integration/usage',
                'appkit/javascript/notifications/frontend-integration/api',
                'appkit/javascript/notifications/frontend-integration/examples',
                'appkit/javascript/notifications/frontend-integration/migration-guide'
              ]
            },
            'appkit/javascript/notifications/backend-integration',
            'appkit/javascript/notifications/demo',
            {
              type: 'category',
              label: 'Authorization Signatures',
              items: [
                {
                  type: 'doc',
                  label: 'About',
                  id: 'appkit/javascript/notifications/authorization-signatures/overview'
                },
                {
                  type: 'doc',
                  label: 'This App',
                  id: 'appkit/javascript/notifications/authorization-signatures/this-app'
                },
                {
                  type: 'doc',
                  label: 'All Apps',
                  id: 'appkit/javascript/notifications/authorization-signatures/all-apps'
                }
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'Cloud',
          collapsible: false,
          className: 'menu_outer_list',
          items: [
            'appkit/javascript/cloud/verify',
            'appkit/javascript/cloud/relay',
            'appkit/javascript/cloud/blockchain-api',
            'appkit/javascript/cloud/analytics'
          ]
        }
      ]
    },
    specs,
    dropdown_placeholder
  ],
  AppKit_React_Native: [
    welcome,
    {
      type: 'category',
      label: 'AppKit',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        {
          type: 'category',
          label: 'Core',
          items: [
            'appkit/react-native/core/installation',
            'appkit/react-native/core/options',
            'appkit/react-native/core/hooks',
            'appkit/react-native/core/components',
            'appkit/react-native/core/email',
            'appkit/react-native/core/smart-accounts',
            'appkit/react-native/core/siwe',
            'appkit/react-native/core/link-mode',
            'appkit/react-native/core/theming',
            'appkit/react-native/core/resources'
          ]
        },
        {
          type: 'category',
          label: 'Notifications',
          items: [
            'appkit/react-native/notifications/overview',
            'appkit/react-native/notifications/cloud-setup',
            'appkit/react-native/notifications/cloud-sending',
            {
              type: 'category',
              label: 'Frontend Integration',
              items: [
                'appkit/react-native/notifications/frontend-integration/usage',
                'appkit/react-native/notifications/frontend-integration/api',
                'appkit/react-native/notifications/frontend-integration/examples',
                'appkit/react-native/notifications/frontend-integration/migration-guide'
              ]
            },
            'appkit/react-native/notifications/backend-integration',
            'appkit/react-native/notifications/demo',
            {
              type: 'category',
              label: 'Authorization Signatures',
              items: [
                {
                  type: 'doc',
                  label: 'About',
                  id: 'appkit/react-native/notifications/authorization-signatures/overview'
                },
                {
                  type: 'doc',
                  label: 'This App',
                  id: 'appkit/react-native/notifications/authorization-signatures/this-app'
                },
                {
                  type: 'doc',
                  label: 'All Apps',
                  id: 'appkit/react-native/notifications/authorization-signatures/all-apps'
                }
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'Cloud',
          collapsible: false,
          className: 'menu_outer_list',
          items: [
            'appkit/react-native/cloud/verify',
            'appkit/react-native/cloud/relay',
            'appkit/react-native/cloud/blockchain-api',
            'appkit/react-native/cloud/analytics'
          ]
        }
      ]
    },
    specs,
    dropdown_placeholder
  ],
  AppKit_Flutter: [
    welcome,
    {
      type: 'category',
      label: 'AppKit',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        {
          type: 'category',
          label: 'Core',
          items: [
            'appkit/flutter/core/installation',
            'appkit/flutter/core/usage',
            'appkit/flutter/core/options',
            'appkit/flutter/core/email',
            'appkit/flutter/core/siwe',
            'appkit/flutter/core/link-mode',
            'appkit/flutter/core/actions',
            'appkit/flutter/core/events',
            'appkit/flutter/core/theming',
            'appkit/flutter/core/custom-chains'
          ]
        },
        {
          type: 'category',
          label: 'Cloud',
          collapsible: false,
          className: 'menu_outer_list',
          items: [
            'appkit/flutter/cloud/verify',
            'appkit/flutter/cloud/relay',
            'appkit/flutter/cloud/blockchain-api',
            'appkit/flutter/cloud/analytics'
          ]
        }
      ]
    },
    specs,
    dropdown_placeholder
  ],
  AppKit_iOS: [
    welcome,
    {
      type: 'category',
      label: 'AppKit',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        {
          type: 'category',
          label: 'Core',
          items: [
            'appkit/ios/core/installation',
            'appkit/ios/core/usage',
            'appkit/ios/core/options',
            'appkit/ios/core/actions',
            'appkit/ios/core/one-click-auth',
            'appkit/ios/core/custom-chains'
          ]
        },
        {
          type: 'category',
          label: 'Cloud',
          collapsible: false,
          className: 'menu_outer_list',
          items: [
            'appkit/ios/cloud/verify',
            'appkit/ios/cloud/relay',
            'appkit/ios/cloud/blockchain-api',
            'appkit/ios/cloud/analytics'
          ]
        }
      ]
    },
    specs,
    dropdown_placeholder
  ],
  AppKit_Android: [
    welcome,
    {
      type: 'category',
      label: 'AppKit',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        {
          type: 'category',
          label: 'Core',
          items: [
            'appkit/android/core/installation',
            'appkit/android/core/usage',
            'appkit/android/core/options',
            'appkit/android/core/actions',
            'appkit/android/core/one-click-auth',
            'appkit/android/core/components',
            'appkit/android/core/theming'
          ]
        },
        {
          type: 'category',
          label: 'Cloud',
          collapsible: false,
          className: 'menu_outer_list',
          items: [
            'appkit/android/cloud/verify',
            'appkit/android/cloud/relay',
            'appkit/android/cloud/blockchain-api',
            'appkit/android/cloud/analytics'
          ]
        }
      ]
    },
    specs,
    dropdown_placeholder
  ],
  AppKit_Unity: [
    welcome,
    {
      type: 'category',
      label: 'AppKit',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        {
          type: 'category',
          label: 'Core',
          items: [
            'appkit/unity/core/installation',
            'appkit/unity/core/usage',
            'appkit/unity/core/options',
            'appkit/unity/core/actions',
            'appkit/unity/core/events',
            'appkit/unity/core/siwe',
            'appkit/unity/core/customization',
            'appkit/unity/core/socials',
            'appkit/unity/core/smart-accounts'
          ]
        },
        {
          type: 'category',
          label: 'Cloud',
          collapsible: false,
          className: 'menu_outer_list',
          items: [
            'appkit/unity/cloud/verify',
            'appkit/unity/cloud/relay',
            'appkit/unity/cloud/blockchain-api',
            'appkit/unity/cloud/analytics'
          ]
        }
      ]
    },
    specs,
    dropdown_placeholder
  ],
  walletKit_Android: [
    welcome,
    {
      type: 'category',
      label: 'WalletKit',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        'walletkit/android/installation',
        'walletkit/android/usage',
        'walletkit/android/one-click-auth',
        'walletkit/android/mobile-linking',
        'walletkit/android/link-mode',
        'walletkit/android/verify',
        'walletkit/android/eip5792',
        {
          type: 'category',
          label: 'Notifications',
          items: [
            {
              type: 'category',
              label: 'Notify',
              items: [
                'walletkit/android/notifications/notify/overview',
                'walletkit/android/notifications/notify/installation',
                'walletkit/android/notifications/notify/usage',
                'walletkit/android/notifications/notify/spam-protection',
                'walletkit/android/notifications/notify/resources'
              ]
            },
            'walletkit/android/notifications/push'
          ]
        },
        {
          type: 'category',
          label: 'Early Access',
          items: ['walletkit/android/early-access/chain-abstraction']
        },
        'walletkit/android/best-practices',
        'walletkit/android/resources',
        {
          type: 'category',
          label: 'Cloud',
          collapsible: false,
          className: 'menu_outer_list',
          items: [
            'walletkit/android/cloud/explorer-submission',
            'walletkit/android/cloud/verify',
            'walletkit/android/cloud/relay',
            'walletkit/android/cloud/analytics'
          ]
        }
      ]
    },
    specs,
    dropdown_placeholder
  ],
  walletKit_iOS: [
    welcome,
    {
      type: 'category',
      label: 'WalletKit',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        'walletkit/ios/installation',
        'walletkit/ios/usage',
        'walletkit/ios/one-click-auth',
        'walletkit/ios/mobile-linking',
        'walletkit/ios/link-mode',
        'walletkit/ios/verify',
        'walletkit/ios/eip5792',
        {
          type: 'category',
          label: 'Notifications',
          items: [
            {
              type: 'category',
              label: 'Notify',
              items: [
                'walletkit/ios/notifications/notify/overview',
                'walletkit/ios/notifications/notify/installation',
                'walletkit/ios/notifications/notify/usage',
                'walletkit/ios/notifications/notify/spam-protection',
                'walletkit/ios/notifications/notify/resources'
              ]
            },
            'walletkit/ios/notifications/push'
          ]
        },
        {
          type: 'category',
          label: 'Early Access',
          items: ['walletkit/ios/early-access/chain-abstraction']
        },
        'walletkit/ios/best-practices',
        'walletkit/ios/resources',
        {
          type: 'category',
          label: 'Cloud',
          collapsible: false,
          className: 'menu_outer_list',
          items: [
            'walletkit/ios/cloud/explorer-submission',
            'walletkit/ios/cloud/verify',
            'walletkit/ios/cloud/relay',
            'walletkit/ios/cloud/analytics'
          ]
        }
      ]
    },
    specs,
    dropdown_placeholder
  ],
  walletKit_Flutter: [
    welcome,
    {
      type: 'category',
      label: 'WalletKit',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        'walletkit/flutter/installation',
        'walletkit/flutter/usage',
        'walletkit/flutter/one-click-auth',
        'walletkit/flutter/mobile-linking',
        'walletkit/flutter/link-mode',
        'walletkit/flutter/verify',
        'walletkit/flutter/eip5792',
        {
          type: 'category',
          label: 'Cloud',
          collapsible: false,
          className: 'menu_outer_list',
          items: [
            'walletkit/flutter/cloud/explorer-submission',
            'walletkit/flutter/cloud/verify',
            'walletkit/flutter/cloud/relay',
            'walletkit/flutter/cloud/analytics'
          ]
        }
      ]
    },
    specs,
    dropdown_placeholder
  ],
  walletKit_React_Native: [
    welcome,
    {
      type: 'category',
      label: 'WalletKit',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        'walletkit/react-native/installation',
        'walletkit/react-native/usage',
        'walletkit/react-native/one-click-auth',
        'walletkit/react-native/mobile-linking',
        'walletkit/react-native/link-mode',
        'walletkit/react-native/verify',
        'walletkit/react-native/eip5792',
        {
          type: 'category',
          label: 'Notifications',
          items: [
            {
              type: 'category',
              label: 'Notify',
              items: [
                'walletkit/react-native/notifications/notify/overview',
                'walletkit/react-native/notifications/notify/installation',
                'walletkit/react-native/notifications/notify/usage',
                'walletkit/react-native/notifications/notify/spam-protection'
              ]
            },
            'walletkit/react-native/notifications/push'
          ]
        },
        'walletkit/react-native/best-practices',
        'walletkit/react-native/resources',
        {
          type: 'category',
          label: 'Cloud',
          collapsible: false,
          className: 'menu_outer_list',
          items: [
            'walletkit/react-native/cloud/explorer-submission',
            'walletkit/react-native/cloud/verify',
            'walletkit/react-native/cloud/relay',
            'walletkit/react-native/cloud/analytics'
          ]
        },
        {
          type: 'category',
          label: 'Early Access',
          items: ['walletkit/react-native/early-access/chain-abstraction']
        }
      ]
    },
    specs,
    dropdown_placeholder
  ],
  walletKit_Web: [
    welcome,
    {
      type: 'category',
      label: 'WalletKit',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        'walletkit/web/installation',
        'walletkit/web/usage',
        'walletkit/web/one-click-auth',
        'walletkit/web/verify',
        'walletkit/web/eip5792',
        'walletkit/web/best-practices',
        'walletkit/web/resources',
        {
          type: 'category',
          label: 'Cloud',
          collapsible: false,
          className: 'menu_outer_list',
          items: [
            'walletkit/web/cloud/explorer-submission',
            'walletkit/web/cloud/verify',
            'walletkit/web/cloud/relay',
            'walletkit/web/cloud/analytics'
          ]
        }
      ]
    },
    specs,
    dropdown_placeholder
  ],
  walletKit_C_Sharp: [
    welcome,
    {
      type: 'category',
      label: 'WalletKit',
      collapsible: false,
      className: 'menu_outer_list',
      items: [
        'walletkit/c-sharp/installation',
        'walletkit/c-sharp/usage',
        'walletkit/c-sharp/verify',
        {
          type: 'category',
          label: 'Cloud',
          collapsible: false,
          className: 'menu_outer_list',
          items: [
            'walletkit/c-sharp/cloud/explorer-submission',
            'walletkit/c-sharp/cloud/verify',
            'walletkit/c-sharp/cloud/relay',
            'walletkit/c-sharp/cloud/analytics'
          ]
        }
      ]
    },
    specs,
    dropdown_placeholder
  ]
}
