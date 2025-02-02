<script setup lang="ts">
import { computed } from 'vue';
import { TERM_LINK_REGEX, replaceUnderscores, buildTermTitle } from '../glossary/utils';
import glossaryData from '../glossary/data.ts';

const props = defineProps<{
  text: string;
}>();

const html = computed(() => {
  return props.text.replace(TERM_LINK_REGEX, (_, termKey, showText) => {
    const entry = glossaryData[termKey];
    const title = buildTermTitle(entry);
    const notFoundClass = entry ? '' : ' term-not-found';
    const linkText = showText ? replaceUnderscores(showText) : entry?.name ?? termKey;
    return `<a title="${title}" class="term${notFoundClass}" href="#${termKey}">${linkText}</a>`;
  });
});
</script>

<template>
  <dd v-html="html" />
</template>
