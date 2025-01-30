<!-- Taken and modified from https://gitlab.com/eeriksp/vuepress-plugin-glossary -->

<template>
  <a :title="definition" :class="{ 'term-not-found': termNotFound, term: true }">
    {{ displayText }}
  </a>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { removeTermLink } from "../utils/term-tag";
import { data } from '../data/glossary.data.ts'

const props = defineProps<{
  term: string;
  show?: string;
}>();

const termNotFound = ref(false);

const definition = computed(() => {
  const termWithSpaces = replaceUnderscoresWithSpaces(props.term);
  const termDefinition = data[termWithSpaces];

  if (termDefinition) {
    return removeTermLink(termDefinition);
  }

  termNotFound.value = true;
  return "Term not found in the glossary";
});

const displayText = computed(() => {
  return replaceUnderscoresWithSpaces(props.show || props.term);
});

function replaceUnderscoresWithSpaces(str: string): string {
  return str.replace(/_/g, " ");
}
</script>

<style scoped>
.term-not-found {
  color: darkred;
  font-style: italic;
}

.term {
  cursor: pointer;
  color: #3eaf7c;
  text-decoration: underline;
}
</style>
