<template>
  <div>
    <h1>Contributors ({{ contributors.length }})</h1>

    <input type="checkbox" id="showMoreToggle" class="hidden">

    <!-- Displayed contributors -->
    <VPTeamMembers size="small" :members="contributors.slice(0, maxVisible)" />

    <!-- More contributors -->
    <div class="moreContributors">
      <VPTeamMembers size="small" :members="contributors.slice(maxVisible)" />
    </div>

    <!-- Toggle button -->
    <label for="showMoreToggle" class="toggleButton">
      <div class="icon-container">
        <svg class="show" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="m6 9 6 6 6-6" />
        </svg>
        <svg class="hide" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="m18 15-6-6-6 6" />
        </svg>
      </div>
    </label>

    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<style>
.icon-container {
  display: inline-block;
  width: 24px;
  height: 24px;
  position: relative;
}

.hidden {
  display: none;
}

.moreContributors {
  display: none;
}

#showMoreToggle:checked~.moreContributors {
  display: block;
}

#showMoreToggle:checked~.toggleButton .show,
#showMoreToggle:not(:checked)~.toggleButton .hide {
  display: none;
}
</style>


<script>
import { VPTeamMembers } from 'vitepress/theme'

import { data } from '../data/contributors.data.ts'

export default {
  components: {
    VPTeamMembers
  },
  data() {
    return {
      contributors: data.contributors,
      maxVisible: 12,
      error: null
    }
  },
}
</script>

