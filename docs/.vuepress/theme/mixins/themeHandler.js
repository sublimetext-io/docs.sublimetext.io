export default {
	mounted() {
		if (this.sublime.defaultColorTheme !== 'default' && !localStorage.getItem('color-theme')) {
			localStorage.setItem('color-theme', this.sublime.defaultColorTheme);
		}

		this.setPageTheme();
	},

	beforeUpdate() {
		this.setPageTheme();
	},

	methods: {
		setTheme(theme, persist = true) {
			const colorThemes = this.sublime.themes || {};

			if (!Array.isArray(colorThemes) || !colorThemes.length) return;

			const classes = document.body.classList;
			const themes = colorThemes.map(colorTheme => `sublime-theme-${colorTheme}`);

			if (!theme) {
				if (persist) localStorage.setItem('color-theme', 'default');
				return classes.remove(...themes);
			}

			if (theme && !colorThemes.includes(theme)) {
				const oldTheme = localStorage.getItem('color-theme');
				return this.setTheme(colorThemes.includes(oldTheme) ? oldTheme : null);
			}

			classes.remove(...themes.filter(t => t !== `sublime-theme-${theme}`));
			classes.add(`sublime-theme-${theme}`);

			if (persist) localStorage.setItem('color-theme', theme);
		},

		setPageTheme() {
			const { forceTheme } = this.$page.frontmatter;
			const colorTheme = localStorage.getItem('color-theme');
			const ignoreForcedThemes = localStorage.getItem('ignore-forced-themes') === 'true';
			const theme = this.sublime.disableThemeIgnore !== true && ignoreForcedThemes ? colorTheme : forceTheme || colorTheme;

			this.setTheme(theme, false);
		},
	},
};
