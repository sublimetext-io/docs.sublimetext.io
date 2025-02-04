<script setup lang="ts">
import { computed } from 'vue';
import glossaryData from '../glossary/data.ts'
import GlossaryDefinition from './GlossaryDefinition.vue';

const definitions = computed(() => {
  const keys = Object.keys(glossaryData);
  keys.sort();
  return keys.map(key => [key, glossaryData[key]]);
});
</script>

<template>
  <dl>
    <template v-for="[key, item] in definitions" :key="key">
      <dt>
        <a :id="key" />
        {{ item.name ?? key }}
      </dt>

      <GlossaryDefinition
        class="glossary-definition"
        :text="item.text"
      />
    </template>
  </dl>
</template>

<style scoped>
.glossary-definition {
  margin-inline-start: 1em;
  padding: 0 0 0.75em 0;
}

dt {
  color: var(--vp-c-brand);
  text-transform: uppercase;
  font-weight: 600;
}
</style>
