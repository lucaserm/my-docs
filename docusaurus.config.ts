import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "Developers SGPL",
  tagline: "Sistema de Gestão de Processos Legislativos",
  favicon: "img/favicon.ico",
  url: "https://my-docs-delta-vert.vercel.app/",
  baseUrl: "/",
  organizationName: "lucaserm",
  projectName: "my-docs",
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
      title: "SGPL Team",
      logo: {
        alt: "SGPL Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "/docs",
          label: "Documentação",
          position: "left",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      // links: [
      //   {},
      //   {},
      //   {
      //     title: "More",
      //     items: [
      //       {
      //         label: "GitHub",
      //         href: "https://github.com/lucaserm",
      //       },
      //       {
      //         label: "LinkedIn",
      //         href: "https://linkedin.com/in/lucaserm",
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Lucas Macedo.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["http"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
