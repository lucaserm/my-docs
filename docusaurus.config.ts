import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Developers ComedyHub",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://my-docs-delta-vert.vercel.app/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "lucaserm", // Usually your GitHub org/user name.
  projectName: "my-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "pt-br",
    locales: ["pt-br"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "./docs",
          routeBasePath: "docs",
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          path: "./blog", // Caminho para o primeiro blog
          routeBasePath: "blog", // Rota base para acessar o blog
          blogSidebarCount: 0,
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/logo.png",
    navbar: {
      title: "Developers",
      logo: {
        alt: "ComedyHub Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/blog",
          label: "Blog",
          position: "left",
        },
        {
          to: "/docs",
          label: "Documentação",
          position: "left",
        },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Discord do ComedyHub",
              href: "https://discordapp.com/invite/comedyhub",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/lucaserm",
            },
            {
              label: "LinkedIn",
              href: "https://linkedin.com/in/lucaserm",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lucas Macedo, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["http"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
