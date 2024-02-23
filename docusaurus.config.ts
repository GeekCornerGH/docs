import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import npm2yarn from "@docusaurus/remark-plugin-npm2yarn"

const config: Config = {
  title: 'GeekCorner',
  tagline: 'Bienvenue! Vous trouverez sur ce site la documentation relative aux tutos sur ma chaîne YouTube.',
  url: 'https://docs.geekcorner.eu.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/geekcorner.png',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GeekCornerGH', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'nl', 'ru'],
  },
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/GeekCorner.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#1ac4bb',
          },
        ],
      },
    ],
    'plugin-image-zoom',
    'docusaurus2-dotenv',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'helios',
        path: 'helios',
        routeBasePath: 'helios',
        sidebarPath: './sidebars.ts',
      },
    ]
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        debug: true, // This will enable the plugin in production
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        docs: {
          sidebarPath: './sidebars.ts',
          versions: {
            current: {
              label: "Divers",
              path: "",
              badge: false
            },
            Helios: {
              label: "Helios Launcher",
              path: "helios",
              banner: "none",
              badge: false
            },
          },
          remarkPlugins: [
            [npm2yarn, { sync: false }],
          ],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/geekcornergh/docs/edit/master/',
          lastVersion: "current"
        },
        blog: {
          showReadingTime: true,
          remarkPlugins: [
            [npm2yarn, { sync: false }],
          ],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        pages: {
          remarkPlugins: [
            [npm2yarn, { sync: false }],
          ],
        },
        theme: {
          customCss: 'src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig:
    {
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
            to: '/docs/helios/intro',
            position: 'left',
            label: 'Docs'
          },
          /*{
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            type: "docsVersionDropdown",
            // activeBaseRegex: "docs\/|helios\/" Uncomment this line to show original files
            activeBaseRegex: "helios\/"

          },
          /*{ to: '/blog', label: 'Blog', position: 'left' },*/ //Uncomment when misc docs and comments are live
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://geekcorner.eu.org/lastvideo',
            label: 'lastVideo',
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
                to: '/docs/helios/intro',
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
              {
                label: 'Mastodon',
                href: 'https://mastodon.geekcorner.eu.org/@GeekCornerM',
                rel: 'me'
              }
            ],
          },
          {
            title: 'Plus',
            items: [
              /*{
                label: 'Blog',
                to: '/blog',
              },*/ //uncomment to show blog
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
        theme: prismThemes.vsLight,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['ejs', 'json', 'bash', 'diff', 'markup-templating']
      },
      algolia: {
        appId: "6RFBY32AJ4",
        apiKey: "e2d11db365439274ba5bfded32750b7d",
        indexName: "geekcorner-eu",
        searchPagePath: 'search',
        contextualSearch: true
      }
    } satisfies Preset.ThemeConfig,
};

export default config;