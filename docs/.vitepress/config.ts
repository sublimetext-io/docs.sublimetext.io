import { defineConfig } from 'vitepress';


export default defineConfig({
  title: "Sublime Text Community Documentation",
  description: "Community-driven Documentation for Sublime Text",
  cleanUrls: true,
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'author', content: 'sublime text community' }],
    ['meta', { name: 'keywords', content: 'sublime text,sublime,documentation' }],
    ['meta', { name: 'theme-color', content: '#ff6600' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Community Docs",
    appearance: 'dark',
    search: {
      provider: 'algolia',
      options: {
        appId: 'VG0SM49I9Y',
        apiKey: '2f739e1649966b92c9a34866a6337e55',
        indexName: 'sublimetext'
      }
    },
    smoothScroll: true,
    // Navbar Link
    nav: [
      { text: "Guide", link: "/guide/", activeMatch: "/guide/" },
      { text: "Reference", link: "/reference/", activeMatch: "/reference/" },
      { text: "Glossary", link: "/glossary", activeMatch: "/glossary" },
      {
        text: "More", items: [
          { text: "Contributing", link: "/contributing.md", activeMatch: "/contributing" },
          { text: "Backers", link: "/backers.md", activeMatch: "/backers" },
        ]
      }
    ],
    // Social Icons
    socialLinks: [
      { icon: "github", link: "https://github.com/sublimetext-io/docs.sublimetext.io" },
      { icon: "discord", link: "https://discord.sublimetext.io/" },
    ],
    // Sidebar
    sidebar: {
      '/guide/': [
        {
          text: "Guide",
          base: "/guide/",
          collapsible: true,
          items: [
            { text: "Introduction", link: "/guide/" },
          ],
        },
        {
          text: 'Getting Started',
          collapsible: true,
          items: [
            { text: "Installation", link: '/guide/getting-started/installation' },
            { text: "Basic Concepts", link: '/guide/getting-started/basic-concepts' },
          ],
        },
        {
          text: 'Basic Usage',
          collapsible: true,
          items: [
            { text: "Editing", link: '/guide/usage/editing' },
            {
              text: 'File Management & Navigation',
              link: '/guide/usage/file-management/',
              items: [
                { text: "Projects", link: '/guide/usage/file-management/projects' },
                { text: "Navigation", link: '/guide/usage/file-management/navigation' },
              ],
            },
            { text: "Search and Replace", link: '/guide/usage/search-and-replace' },
            { text: "Build Systems", link: '/guide/usage/build-systems' },
          ],
        },
        {
          text: 'Customization',
          collapsible: true,
          items: [
            { text: "Settings", link: '/guide/customization/settings' },
            { text: "Key Bindings", link: '/guide/customization/key_bindings' },
            { text: "Menus", link: '/guide/customization/menus' },
            { text: "Color Schemes", link: '/guide/customization/color_schemes' },
          ],
        },
        {
          text: 'Extensibility & Automation',
          collapsible: true,
          items: [
            { text: "Command Palette", link: '/guide/extensibility/command_palette' },
            { text: "Commands", link: '/guide/extensibility/commands' },
            { text: "Completions", link: '/guide/extensibility/completions' },
            { text: "Macros", link: '/guide/extensibility/macros' },
            { text: "Packages", link: '/guide/extensibility/packages' },
            {
              text: 'Plugins',
              link: '/guide/extensibility/plugins/',
              items: [
                { text: "Input Handlers", link: '/guide/extensibility/plugins/input_handlers' },
              ],
            },
            { text: "Snippets", link: '/guide/extensibility/snippets' },
            { text: "Syntax Definitions", link: '/guide/extensibility/syntaxdefs' },
          ],
        },
      ],
      '/reference/': [
        {
          text: 'Reference',
          base: '/reference/',
          path: '/reference/',
          items: [
            { text: "Build Systems", link: 'https://www.sublimetext.com/docs/build_systems.html' },
            { text: "Color Schemes", link: 'https://www.sublimetext.com/docs/color_schemes.html' },
            { text: "Color Schemes Legacy", link: '/reference/color_schemes_legacy' },
            { text: "Command Palette", link: '/reference/command_palette' },
            { text: "Commands", link: '/reference/commands' },
            { text: "Comments", link: '/reference/comments' },
            { text: "Completions", link: '/reference/completions' },
            { text: "Key Bindings", link: '/reference/key_bindings' },
            { text: "Mouse Bindings", link: '/reference/mouse_bindings' },
            { text: "Menus", link: '/reference/menus' },
            { text: "Metadata", link: '/reference/metadata' },
            { text: "Plugins", link: '/reference/plugins' },
            { text: "Projects", link: '/reference/projects' },
            { text: "Python API", link: '/reference/python_api' },
            { text: "Settings", link: '/reference/settings' },
            { text: "Symbols", link: '/reference/symbols' },
            { text: "Syntax", link: 'https://www.sublimetext.com/docs/syntax.html' },
            { text: "Syntax Definitions Legacy", link: '/reference/syntaxdefs_legacy' },
            {
              text: 'Keyboard Shortcuts',
              items: [
                { text: "Windows/Linux", link: '/reference/keyboard_shortcuts_win' },
                { text: "MacOS/OSX", link: '/reference/keyboard_shortcuts_osx' },
              ],
            },
          ],
        },
      ],
    },
    footer: {
      message: 'Released under the <a rel="license" href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0 Deed License</a>.',
      copyright: "Copyright © 2013-present",
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
  },
});
