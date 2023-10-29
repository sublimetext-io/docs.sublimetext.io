import DefaultTheme from "vitepress/theme";
import Contributors from '../components/Contributors.vue';
import Key from '../components/Key.vue';
import "./custom.css";

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('Contributors', Contributors)
        app.component('Key', Key)
    }
}
