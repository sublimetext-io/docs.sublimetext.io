const config = {
    title: "Sublime Text Community Documentation",
    description: "Community-driven Documentation for Sublime Text",
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
        sublime: {
            defaultDarkTheme: false,
            startYear: 2013
        },
        repo: 'sublimetext-io/docs.sublimetext.io',
        docsDir: 'docs',
        editLinks: true,
        sidebarDepth: 3,
        lastUpdated: true,
        nav: [
            {
                text: 'Guide',
                link: '/guide/',
            },
            {
                text: 'Reference',
                link: '/reference/',
            },
            {
                text: 'Other',
                // ariaLabel: 'Language Menu',
                items: [
                    {
                        text: 'Glossary',
                        link: '/GLOSSARY.md',
                    },
                    {
                        text: 'F.A.Q',
                        link: '/other/question.md',
                    },
                    {
                        text: 'Offical Docs',
                        link: 'https://www.sublimetext.com/docs/',
                    },
                ],
            },
        ],
        sidebar: {
            '/guide/': [
                {
                    title: 'Introduction',
                    // The theme has a problem if I use a relative path to `/guide/` here.
                    path: '/guide/',
                },
                {
                    title: 'Getting Started',
                    // path: '/guide/getting-started/',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        'getting-started/installation.md',
                        'getting-started/basic-concepts.md',
                    ],
                },
                {
                    title: 'Basic Usage',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: [
                        'usage/editing.md',
                        {
                            title: 'File Management & Navigation',
                            path: '/guide/usage/file-management/',
                            collapsable: false,
                            children: [
                                'usage/file-management/projects.md',
                                'usage/file-management/navigation.md',
                            ],
                        },
                        'usage/search-and-replace.md',
                        'usage/build-systems.md',
                    ],
                },
                {
                    title: 'Customization',
                    path: '/guide/customization/',
                    collapsable: false,
                    children: [
                        'customization/',
                        'customization/settings.md',
                        'customization/key_bindings.md',
                        'customization/menus.md',
                        'customization/color_schemes.md',
                    ],
                },
                {
                    title: 'Extensibility & Automation',
                    path: '/guide/extensibility/',
                    collapsable: false,
                    children: [
                        'extensibility/',
                        'extensibility/command_palette.md',
                        'extensibility/commands.md',
                        'extensibility/completions.md',
                        'extensibility/macros.md',
                        'extensibility/packages.md',
                        {
                            title: 'Plugins',
                            path: '/guide/extensibility/plugins/',
                            collapsable: false,
                            children: [
                                'extensibility/plugins/input_handlers.md',
                            ],
                        },
                        'extensibility/snippets.md',
                        'extensibility/syntaxdefs.md',
                    ],
                },
            ],
            '/reference/': [
                {
                    title: 'Reference',
                    path: '/reference/',
                    collapsable: false,
                    children: [
                        ['https://www.sublimetext.com/docs/build_systems.html', 'Build Systems'],
                        ['https://www.sublimetext.com/docs/color_schemes.html', 'Color Schemes'],
                        'color_schemes_legacy.md',
                        'command_palette.md',
                        'commands.md',
                        'comments.md',
                        'completions.md',
                        'key_bindings.md',
                        'mouse_bindings.md',
                        'menus.md',
                        'metadata.md',
                        'plugins.md',
                        'projects.md',
                        'python_api.md',
                        'settings.md',
                        'symbols.md',
                        ['https://www.sublimetext.com/docs/syntax.html', "Syntax Definitions"],
                        'syntaxdefs_legacy.md',
                        {
                            title: 'Keyboard Shortcuts',
                            collapsable: false,
                            children: [
                                ['keyboard_shortcuts_win.md', "Windows/Linux"],
                                ['keyboard_shortcuts_osx.md', "OSX"],
                            ],
                        },
                    ],
                },
            ],
        },
    },
    markdown: {
        lineNumbers: false,
        plugins: [
            'attrs',
            'deflist',
            'footnote',
        ],
    },
    plugins: [
        [
            'container',
            {
                type: 'seealso',
                defaultTitle: 'See Also',
                before: info => `<div class="custom-block seealso"><p class="custom-block-title">${info}</p>`,
                after: '</div>',
            },
        ],
        'glossary',
        'check-md',
    ],
    configureWebpack: (config, isServer) => {
        // Override webpack's default hashFunction value to avoid a breaking change in Node 17
        // after updating OpenSSL.
        // https://stackoverflow.com/a/73027407/1327727
        // Unfortunately, this appears to have no effect,
        // so we need to override `NODE_OPTIONS` regardless (see `package.json`).
        config.output.hashFunction = 'sha512';
    },
};

module.exports = config;
