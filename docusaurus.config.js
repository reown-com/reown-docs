// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer')
const lightCodeTheme = themes.github
const darkCodeTheme = themes.dracula

const projectKey =
  process.env.NODE_ENV === 'production'
    ? 'Uuv6kG5tEsMxJaTbj66ljUoei91qg1La'
    : 'sk_test_uH7GmxPmqXDxpn4x6EXi4V5Hg4PsQFFh'

/** @type {import('@docusaurus/types').Config} */
const config = {
  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
        src: 'https://app.termly.io/resource-blocker/22740907-ba21-41a3-bbd9-106afc077eab?autoBlock=on'
      }
    },
    {
      tagName: 'script',
      attributes: {
        defer: 'true',
        type: 'text/javascript',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-56G35T8X'
      }
    },
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
        defer: 'true'
      },
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-56G35T8X');
      `
    },
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
        defer: 'true'
      },
      innerHTML: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-56G35T8X');
      `
    }
  ],
  title: 'Reown Docs',
  tagline: 'Reown gives developers the tools to build user experiences that make digital ownership effortless, intuitive, and secure.',
  url: 'https://docs.reown.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'reown',
  projectName: 'reown-docs',
  staticDirectories: ['static'],
  scripts: [
    {
      src: 'https://plausible.io/js/plausible.js',
      defer: 'true',
      'data-domain': 'docs.reown.com'
    }
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          breadcrumbs: true,
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          editUrl: 'https://github.com/reown-com/reown-docs/blob/main/',
          remarkPlugins: [
            [
              require('@docusaurus/remark-plugin-npm2yarn'),
              {
                sync: true,
                converters: [
                  'yarn',
                  [
                    'Bun',
                    code => code.replace(/npm i /g, 'bun a ').replace(/npm install /g, 'bun add ')
                  ],
                  'pnpm'
                ]
              }
            ]
          ]
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],

  themeConfig: {
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    algolia: {
      appId: 'KEO8ND6AUT',
      apiKey: '5921626237dc9040afc258af25d4e77d',
      indexName: 'walletconnect',
      contextualSearch: true
    },
    image: 'img/Docs-OG.png',
    metadata: [{ name: 'twitter:card', content: 'summary_large_image' }],
    navbar: {
      items: [
        {
          type: 'html',
          value:
            '<a class="navbar__brand" href="/"><div class="navbar__logo"><img src="/img/docs-logo.svg"  alt="Docs Logo"></a>'
        },
        {
          label: 'Dashboard',
          href: 'https://cloud.reown.com/?utm_source=website&utm_medium=docs&utm_campaign=walletconnectdocs',
          position: 'right',
          className: 'header-cloud-link',
          'aria-label': 'Cloud'
        },
        {
          href: 'https://github.com/reown-com/',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository'
        }
      ]
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'AppKit',
              to: '/appkit/overview'
            },
            {
              label: 'WalletKit',
              to: '/walletkit/overview'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/orgs/reown-com/discussions'
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/kdTQHQ6AFQ'
            },
            /*{
              label: 'Telegram',
              href: 'https://t.me/walletconnect'
            },*/ //Commenting out for now
            {
              label: 'X',
              href: 'https://x.com/reown_'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://reown.com/blog'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/reown-com/reown-docs'
            },
            {
              label: 'Farcaster',
              href: 'https://warpcast.com/reown/'
            }
          ]
        },
        {
          title: 'Privacy',
          items: [
            {
              href: '#',
              id: 'termly-display-preferences',
              class: 'termly-display-preferences footer__link-item',
              label: 'Consent Preferences'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Reown, Inc.`
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true
    },
    prism: {
      darkTheme: darkCodeTheme,
      theme: lightCodeTheme,
      additionalLanguages: ['swift', 'kotlin', 'dart', 'csharp', 'gradle', 'ruby'],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-delete',
          line: 'highlight-delete',
          block: { start: 'highlight-delete-start', end: 'highlight-delete-end' }
        },
        {
          className: 'theme-code-block-highlighted-add',
          line: 'highlight-add',
          block: { start: 'highlight-add-start', end: 'highlight-add-end' }
        }
      ]
    }
    // announcementBar: {
    //   id: 'support_us',
    //   content:
    //     'It’s shipping szn 🚢 Explore AppKit’s latest features: Email Wallets and On-ramp! <a rel="noopener noreferrer" href="/web3modal/features/onramp">Read the docs</a>',
    //   backgroundColor: '#3182ce',
    //   textColor: '#fff',
    //   isCloseable: true
    // }
  }
}

module.exports = config