<script setup lang="ts">
import { computed, ref } from "vue";
import { buildTermTitle, replaceUnderscores } from "../glossary/utils";
import glossaryData from '../glossary/data.ts'

const props = defineProps<{
  term: string;
}>();


const glossaryItem = computed(() => glossaryData[props.term]);

const termNotFound = computed(() => glossaryItem.value == null);

const title = computed(() => buildTermTitle(glossaryItem.value));

const defaultText = computed(() => glossaryItem.value?.name ?? props.term);

const href = computed(() => `/glossary.html#${props.term}`);
</script>

<template>
  <a
    :title="title"
    :class="{ 'term-not-found': termNotFound, term: true }"
    :href="href"
  >
    <slot>
      {{ defaultText }}
    </slot>
  </a>
</template>
