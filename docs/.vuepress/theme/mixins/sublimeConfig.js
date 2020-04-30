export default {
    data() {
        return {
            sublime: {},
        };
    },

    mounted() {
        const { sublime = {} } = this.$site.themeConfig;

        this.sublime = {
            themes: sublime.colorThemes || [ 'blue', 'red', 'purple'],
            defaultColorTheme: sublime.defaultColorTheme || 'default',
            defaultDarkTheme: sublime.defaultDarkTheme || false,
            disableDarkTheme: sublime.disableDarkTheme || false,
            disableThemeIgnore: sublime.disableThemeIgnore || false,
            extraOptions: sublime.extraOptions || {},
        };

        this.sublime.hasThemes = Array.isArray(this.sublime.themes) && this.sublime.themes.length > 0;
    },
};