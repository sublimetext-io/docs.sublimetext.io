<template>
	<ParentLayout />
</template>

<script>
import ParentLayout from '@parent-theme/layouts/404.vue';
import sublimeConfig from '@theme/mixins/sublimeConfig.js';
import themeHandler from '@theme/mixins/themeHandler.js';
import darkThemeHandler from '@theme/mixins/darkThemeHandler.js';

export default {
	components: {
		ParentLayout,
	},
	mixins: [sublimeConfig, themeHandler, darkThemeHandler],
};
</script>

<style src="../styles/variables.styl" lang="stylus"></style>
<style src="../styles/index.styl" lang="stylus"></style>
<style src="../styles/themes/dark.styl" lang="stylus"></style>
<style src="../styles/themes/blue.styl" lang="stylus"></style>
<style src="../styles/themes/red.styl" lang="stylus"></style>
<style src="../styles/themes/purple.styl" lang="stylus"></style>
