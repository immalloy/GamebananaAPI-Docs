const { themes: prismThemes } = require("prism-react-renderer");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "GameBanana API Docs",
  tagline: "Unofficial documentation for the public GameBanana API surface.",
  favicon: "icons/favicon.ico",
  url: "https://immalloy.github.io",
  baseUrl: "/GamebananaAPI-Docs/",
  organizationName: "Imalloy",
  projectName: "GamebananaAPI-Docs",
  trailingSlash: false,
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  staticDirectories: ["static", "assets", "spec"],
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js")
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "icons/gaybanana-100.png",
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: false
      },
      navbar: {
        title: "GameBanana API",
        logo: {
          alt: "GameBanana icon",
          src: "icons/gaybanana-100.png"
        },
        items: [
          { to: "/", label: "Docs", position: "left" },
          { to: "/api", label: "API Explorer", position: "left" },
          {
            href: "https://github.com/Imalloy/GamebananaAPI-Docs",
            label: "GitHub",
            position: "right"
          }
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentation",
            items: [
              { label: "Getting Started", to: "/" },
              { label: "API Explorer", to: "/api" }
            ]
          },
          {
            title: "Project",
            items: [
              {
                label: "Repository",
                href: "https://github.com/Imalloy/GamebananaAPI-Docs"
              },
              {
                label: "OpenAPI Spec In Repo",
                href: "https://github.com/Imalloy/GamebananaAPI-Docs/blob/main/spec/openapi.yaml"
              }
            ]
          }
        ],
        copyright: `Copyright ${new Date().getFullYear()} GameBanana API Docs contributors.`
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["bash", "json", "yaml"]
      }
    })
};

module.exports = config;
