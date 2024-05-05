import { defineConfig, type HeadConfig } from 'vitepress';

const customHead: HeadConfig[] = [
  ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],

  ['meta', { name: 'author', content: 'sublime text community' }],
  ['meta', { name: 'keywords', content: 'sublime text,sublime,documentation' }],

  ['meta', { name: 'theme-color', content: '#e79823' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['meta', { name: 'msapplication-TileColor', content: '#e79823' }],

  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg', sizes: 'any' }],
  ['link', { rel: 'mask-icon', type: 'image/svg+xml', href: '/logo.svg', color: '#e79823' }],
];

export default defineConfig({
  title: 'Sublime Text Community Documentation',
  description: 'Community-driven Documentation for Sublime Text',
  head: customHead,
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'ST Community Docs',
    appearance: 'dark',
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    editLink: {
      text: 'Edit this page on GitHub',
      pattern: 'https://github.com/sublimetext-io/docs.sublimetext.io/blob/master/docs/:path'
    },
    outline: {
      label: 'On this page',
      level: [2, 3]
    },
    // search: {
    //   provider: 'local',
    //   options: {
    //   },
    // },
    search: {
      provider: 'algolia',
      options: {
        appId: 'VG0SM49I9Y',
        apiKey: '03a9038782a67456948aa551344de4ee',
        indexName: 'sublimetext'
      }
    },
    // Navbar Link
    nav: [
      { text: 'Guide', link: '/guide/', activeMatch: '^/guide/' },
      { text: 'Reference', link: '/reference/', activeMatch: '^/reference/' },
      { text: 'Glossary', link: '/glossary.md' },
      {
        text: 'More', items: [
          { text: 'Contributing', link: '/contributing.md' },
          { text: 'Backers', link: '/backers.md' },
        ]
      }
    ],
    // Social Icons
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sublimetext-io/docs.sublimetext.io' },
      { icon: 'discord', link: 'https://discord.sublimetext.io/' },
    ],
    // Sidebar
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/guide/' },
          ],
        },
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'Installation', link: '/guide/getting-started/installation.md' },
            { text: 'Basic Concepts', link: '/guide/getting-started/basic-concepts.md' },
          ],
        },
        {
          text: 'Basic Usage',
          collapsed: false,
          items: [
            { text: 'Editing', link: '/guide/usage/editing.md' },
            {
              text: 'File Management & Navigation',
              link: '/guide/usage/file-management/',
              items: [
                { text: 'Projects', link: '/guide/usage/file-management/projects.md' },
                { text: 'Navigation', link: '/guide/usage/file-management/navigation.md' },
              ],
            },
            { text: 'Search and Replace', link: '/guide/usage/search-and-replace.md' },
            { text: 'Build Systems', link: '/guide/usage/build-systems.md' },
          ],
        },
        {
          text: 'Customization',
          collapsed: false,
          items: [
            { text: 'Settings', link: '/guide/customization/settings.md' },
            { text: 'Key Bindings', link: '/guide/customization/key_bindings.md' },
            { text: 'Menus', link: '/guide/customization/menus.md' },
            { text: 'Color Schemes', link: '/guide/customization/color_schemes.md' },
          ],
        },
        {
          text: 'Extensibility & Automation',
          collapsed: false,
          items: [
            { text: 'Command Palette', link: '/guide/extensibility/command_palette.md' },
            { text: 'Commands', link: '/guide/extensibility/commands.md' },
            { text: 'Completions', link: '/guide/extensibility/completions.md' },
            { text: 'Macros', link: '/guide/extensibility/macros.md' },
            { text: 'Packages', link: '/guide/extensibility/packages.md' },
            {
              text: 'Plugins',
              link: '/guide/extensibility/plugins/',
              items: [
                { text: 'Input Handlers', link: '/guide/extensibility/plugins/input_handlers/' },
              ],
            },
            { text: 'Snippets', link: '/guide/extensibility/snippets.md' },
            { text: 'Syntax Definitions', link: '/guide/extensibility/syntaxdefs.md' },
          ],
        },
      ],
      '/reference/': [
        {
          text: 'Reference',
          link: '/reference/',
          items: [
            { text: 'Build Systems', link: 'https://www.sublimetext.com/docs/build_systems.html' },
            { text: 'Color Schemes', link: 'https://www.sublimetext.com/docs/color_schemes.html' },
            { text: 'Color Schemes Legacy', link: '/reference/color_schemes_legacy.md' },
            { text: 'Command Palette', link: '/reference/command_palette.md' },
            { text: 'Commands', link: '/reference/commands.md' },
            { text: 'Comments', link: '/reference/comments.md' },
            { text: 'Completions', link: '/reference/completions.md' },
            { text: 'Key Bindings', link: '/reference/key_bindings.md' },
            { text: 'Mouse Bindings', link: '/reference/mouse_bindings.md' },
            { text: 'Menus', link: '/reference/menus.md' },
            { text: 'Metadata', link: '/reference/metadata.md' },
            { text: 'Plugins', link: '/reference/plugins.md' },
            { text: 'Projects', link: '/reference/projects.md' },
            { text: 'Python API', link: '/reference/python_api.md' },
            { text: 'Settings', link: '/reference/settings.md' },
            { text: 'Symbols', link: '/reference/symbols.md' },
            { text: 'Syntax', link: 'https://www.sublimetext.com/docs/syntax.html' },
            { text: 'Syntax Definitions Legacy', link: '/reference/syntaxdefs_legacy.md' },
            {
              text: 'Keyboard Shortcuts',
              items: [
                { text: 'Windows/Linux', link: '/reference/keyboard_shortcuts_win.md' },
                { text: 'MacOS/OSX', link: '/reference/keyboard_shortcuts_osx.md' },
              ],
            },
          ],
        },
      ],
    },
    footer: {
      message: 'Released under the <a rel="license" href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0 Deed License</a>.',
      copyright: `Copyright © 2013 - ${new Date().getFullYear()}`
    },
    markdown: {
      theme: 'material-palenight',
      lineNumbers: true,
      config: md => {
        require('vuepress-plugin-glossary').extendMarkdown(md);
      },
      toc: {
        level: [2]
      }
    },
  },
});
