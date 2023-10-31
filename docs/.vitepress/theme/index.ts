import type { EnhanceAppContext } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

import Contributors from '../components/Contributors.vue';
import Key from '../components/Key.vue';

import './custom.css';

export default {
    extends: DefaultTheme,
    enhanceApp(context: EnhanceAppContext) {
        context.app.component('Contributors', Contributors);
        context.app.component('Key', Key);
    }
}
