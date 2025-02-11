import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br'],
  },

  presets: [
    [
      'classic',
      {
        docs: {

          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'comedyhub',  // ID único para o primeiro blog
        path: './comedyhub',  // Caminho para o primeiro blog
        routeBasePath: 'comedyhub',  // Rota base para acessar o blog
        showReadingTime: true,
        blogSidebarTitle: 'All Posts - ComedyHub',
        blogSidebarCount: 'ALL',
        feedOptions: {
          type: ['rss', 'atom'],
        },
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
        
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'sgpl',
        path: './sgpl',  // Caminho para o segundo blog
        routeBasePath: 'sgpl',  // Rota base para acessar o segundo blog
        showReadingTime: true,
        blogSidebarTitle: 'All Posts - SGPL',
        blogSidebarCount: 'ALL',
        feedOptions: {
          type: ['rss', 'atom'],
        },
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
        
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          to: '/comedyhub',  // Link para o primeiro blog
          label: 'ComedyHub',
          position: 'left',
        },
        {
          to: '/sgpl',  // Link para o segundo blog
          label: 'SGPL',
          position: 'left',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right'
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord do ComedyHub',
              href: 'https://discordapp.com/invite/comedyhub',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/lucaserm',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/lucaserm',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lucas Macedo, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
