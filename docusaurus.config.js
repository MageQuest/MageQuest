// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MageQuest',
  tagline: 'Open Source Magento 2 Learning, Resources & Tools',
  url: 'https://magequest.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo-small.png',
  organizationName: 'MageQuest', // Usually your GitHub org/user name.
  projectName: 'magequest', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'quests',
          routeBasePath: 'quests',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
              'https://github.com/magequest/magequest/edit/main/',
        },
        blog: {
          path: 'blog',
          blogDescription: 'Blog',
          routeBasePath: 'blog',
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
              'https://github.com/magequest/magequest/edit/main/blog/',
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
      navbar: {
        title: 'MageQuest',
        logo: {
          alt: 'MageQuest Logo',
          src: 'img/logo-small.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Quests',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/magequest/magequest',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} MageQuest. Supported by <a href="https://www.fisheye.co.uk/"><img src="/img/fisheye-logo.png" alt="Fisheye"/></a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
