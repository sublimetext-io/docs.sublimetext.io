<script setup lang="ts">
import { computed } from "vue";
import { buildTermTitle } from "../glossary/utils";
import glossaryData from '../glossary/data.ts'

const props = defineProps<{
  term: string;
}>();

const glossaryEntry = computed(() => {
  const entry = glossaryData[props.term];
  if (!entry) {
    throw new Error(`Term '${props.term}' not found`)
  }
  return entry;
});

const title = computed(() => buildTermTitle(glossaryEntry.value));
const defaultText = computed(() => glossaryEntry.value.name ?? props.term);
const href = computed(() => `/glossary.html#${props.term}`);
</script>

<template>
  <a
    class="term"
    :title="title"
    :href="href"
  >
    <slot>
      {{ defaultText }}
    </slot>
  </a>
</template>
