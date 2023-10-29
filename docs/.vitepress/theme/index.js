import DefaultTheme from "vitepress/theme";
import Contributors from '../components/Contributors.vue';
import Key from '../components/Key.vue';
import "./custom.css";

export default {
    ...DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        app.component('Contributors', Contributors)
        app.component('Key', Key)
        // app is the Vue 3 app instance from `createApp()`. router is VitePress'
        // custom router. `siteData`` is a `ref`` of current site-level metadata.
    }
}
