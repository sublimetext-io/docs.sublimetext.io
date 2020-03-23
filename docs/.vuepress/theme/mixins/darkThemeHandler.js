export default {
	data() {
		return {
			darkTheme: false,
			ignoreForcedThemes: false,
		};
	},

	mounted() {
		if (this.sublime.disableDarkTheme !== true) {
			if (this.sublime.defaultDarkTheme === true && !localStorage.getItem('dark-theme')) {
				localStorage.setItem('dark-theme', true);
			}

			this.darkTheme = localStorage.getItem('dark-theme') === 'true';
			this.toggleDarkTheme();
		}

		if (this.sublime.disableThemeIgnore !== true) {
			this.ignoreForcedThemes = localStorage.getItem('ignore-forced-themes') === 'true';
		}
	},

	methods: {
		toggleDarkTheme() {
			if (this.darkTheme) {
				document.body.classList.add('sublime-theme-dark');
				return localStorage.setItem('dark-theme', true);
			}

			document.body.classList.remove('sublime-theme-dark');
			localStorage.setItem('dark-theme', false);
		},

		toggleForcedThemes() {
			if (this.ignoreForcedThemes) {
				this.setTheme(localStorage.getItem('color-theme'));
				return localStorage.setItem('ignore-forced-themes', true);
			}

			localStorage.removeItem('ignore-forced-themes');
		},
	},
};
