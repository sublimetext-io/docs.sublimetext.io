<template>
    <main class="page">
    	<!-- todo -
    		- With JavaScript disabled, transitions break
    		- We need to identify the proper way to provide
    		- "<noscript>" alternatives inside fo vuejs components -->
        <!-- 
        <ModuleTransition>
            <div v-show="sublimeShowModule && $page.title" class="page-title">
                <h1>{{$page.title}}</h1>
                <hr>
            </div>
        </ModuleTransition> -->
        <div v-show="$page.title" class="page-title">
            <h1>{{$page.title}}</h1>
            <hr>
        </div>
        <slot name="top"></slot>
        <Content class="theme-default-content"></Content>
        <PageEdit />
        <PageNav v-bind="{ sidebarItems }" />
        <slot name="bottom"></slot>
        <Footer />
    </main>
</template>
<script>
import PageEdit from '@parent-theme/components/PageEdit.vue';
import PageNav from '@parent-theme/components/PageNav.vue';
import Footer from '@theme/components/Footer'
import sublimeConfig from '@theme/mixins/sublimeConfig.js';
import ModuleTransition from '@theme/components/ModuleTransition'
import moduleTransitionMixin from '@theme/mixins/moduleTransition'
import themeHandler from '@theme/mixins/themeHandler.js';

export default {
    components: { PageEdit, PageNav, ModuleTransition, Footer },
    mixins: [sublimeConfig, themeHandler, moduleTransitionMixin],
    props: ['sidebarItems'],
};
</script>
<style lang="stylus">
.page
    padding-top 5rem;
    padding-bottom 2rem;
    display block;

    .page-title 
	    max-width: 920px;
	    margin: 0 auto;
	    padding: 1rem 2.5rem;
	    color var(--text-color)
</style>