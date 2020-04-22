const config = {
    title: "Sublime Text Community Documentation",
    description: "Community-drivien Documentation for Sublime Text",
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
                text: 'Glossary',
                link: '/GLOSSARY.md',
            },
            {
                text: 'F.A.Q',
                link: '/other/question.md',
            },
            {
                text: 'Offical Docs',
                link: 'https://www.sublimetext.com/docs/3/',
            },
        ],
        sidebar: {
            '/guide/': [
                {
                    title: 'Introduction',
                    path: '/guide/',
                },
                {
                    title: 'Installation',
                    path: 'installation.md',
                },
                {
                    title: 'Basic Concepts',
                    path: 'basic-concepts/',
                },
                {
                    title: 'Editing',
                    path: 'editing/',
                },
                {
                    title: 'Search & Replace',
                    // The theme has a problem if I use a relative path to `/guide/` here.
                    collapsable: true,
                    path: '/guide/search-and-replace/',
                    children: [
                        'search-and-replace/',
                        'search-and-replace/single.md',
                        'search-and-replace/multiple.md,'
                    ],
                },
                {
                    title: 'Build Systems (Batch Processing)',
                    path: 'build-systems/',
                },
                {
                    title: 'File Management & Navigation',
                    path: '/guide/file-management/',
                    collapsable: true,
                    children: [
                        'file-management/',
                        'file-management/projects.md',
                        'file-management/navigation.md',
                    ],
                },
                {
                    title: 'Customization',
                    path: '/guide/customization/',
                    collapsable: true,
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
                    collapsable: true,
                    children: [
                        'extensibility/',
                        'extensibility/command_palette.md',
                        'extensibility/commands.md',
                        'extensibility/completions.md',
                        'extensibility/macros.md',
                        'extensibility/packages.md',
                        'extensibility/plugins.md',
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
                        ['https://www.sublimetext.com/docs/3/build_systems.html', 'Build Systems'],
                        ['https://www.sublimetext.com/docs/3/color_schemes.html', 'Color Schemes'],
                        'color_schemes_legacy.md',
                        'command_palette.md',
                        'commands.md',
                        'comments.md',
                        'completions.md',
                        'key_bindings.md',
                        'menus.md',
                        'metadata.md',
                        'plugins.md',
                        'projects.md',
                        'python_api.md',
                        'settings.md',
                        'symbols.md',
                        ['https://www.sublimetext.com/docs/3/syntax.html', "Syntax Definitions"],
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
        // TODO 'md-check',
    ]
};

module.exports = config;
