<!-- Taken and modified from https://gitlab.com/eeriksp/vuepress-plugin-glossary -->

<script setup>
import { computed } from 'vue';
import { renderTermLinksToHTML } from '../utils/term-tag';
import { data } from '../data/glossary.data.ts'

const definitions = computed(() => {
  return Object.keys(data).map(key => ({
    key,
    definition: renderTermLinksToHTML(key, data)
  }));
});
</script>

<template>
  <dl>
    <div v-for="item in definitions" :key="item.key">
      <dt class="defined-term">{{ item.key }}</dt>
      <dd class="term-definition" v-html="item.definition"></dd>
    </div>
  </dl>
</template>

<style scoped>
dd {
  margin-inline-start: 1em;
  padding: 0 0 0.75em 0;
}

dt.defined-term {
  font-weight: 600;
  color: #3eaf7c;
}

.term {
  font-weight: normal;
}

.term-not-found {
  color: darkred;
}
</style>
