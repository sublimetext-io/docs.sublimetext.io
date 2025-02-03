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
    <div v-for="[key, item] in definitions" :key="key">
      <dt class="defined-term">
        <a :id="key" />
        {{ item.name ?? key }}
      </dt>
      <GlossaryDefinition :text="item.text" />
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
</style>
