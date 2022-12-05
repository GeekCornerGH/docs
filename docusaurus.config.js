// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GeekCorner',
  tagline: 'Bienvenue',
  url: 'https://geekcorner.eu.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash:true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GeekCornerGH', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },
  plugins: [
    'plugin-image-zoom',
    'docusaurus2-dotenv',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'helios',
        path: 'helios',
        routeBasePath: 'helios',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          versions:{
            current: {
              label: "Divers",
              path:"docs",
              badge:false
            },
            Helios:{
              label:"Helios Launcher",
              path:"helios",
              banner: "none",
              badge:false
            }
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/geekcornergh/docs/tree/master/',
            lastVersion:"current"
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: false,
        disableSwitch: true
      },
      navbar: {
        title: 'GeekCorner',
        logo: {
          alt: 'My Site Logo',
          src: 'img/GeekCorner.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            type:"docsVersionDropdown",
            activeBaseRegex: "docs\/|helios\/"

          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://geekcorner.eu.org/latestvideo',
            label: 'Dernière vidéo',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Helios Launcher',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Réseaux sociaux',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/GeekCornerGH',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/46zxhbK',
              },
              {
                label: 'YouTube',
                href: 'https://youtube.com/GeekCornerYT',
              },
            ],
          },
          {
            title: 'Plus',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Contribuer à ce site',
                href: 'https://github.com/GeekCornerGH/docs',
              },
            ],
          },
        ],
        copyright: `Créé avec <a href="https://docusaurus.io">Docusaurus</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
