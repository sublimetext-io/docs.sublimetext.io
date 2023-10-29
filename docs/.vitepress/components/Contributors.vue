<template>
  <div class="contributors-card">
    <h1>Contributors ({{ contributors.length }})</h1>

    <input type="checkbox" id="showMoreToggle" class="hidden">

    <!-- Displayed contributors -->

    <VPTeamMembers class="contributors" size="small" :members="contributors.slice(0, maxVisible)" />

    <!-- More contributors -->
    <VPTeamMembers class="moreContributors" size="small" :members="contributors" />

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
.contributors-card {
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  min-height: 400px;
  border-radius: 10px;
  padding: 24px;
}

.contributors-card h1 {
  font-size: 1.75rem;
  font-weight: 600;
}


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

.toggleButton {
  cursor: pointer;
}

#showMoreToggle:checked~.contributors {
  display: none;
}

#showMoreToggle:checked~.moreContributors {
  display: block;
}

#showMoreToggle:checked~.toggleButton .show,
#showMoreToggle:not(:checked)~.toggleButton .hide {
  display: none;
}

.VPTeamMembers>.container {
  /* Allows items to wrap to the next line if there's not enough space */
  display: flex;
  flex-wrap: wrap;
  /* Centers items horizontally */
  justify-content: center;
  /* Space between members. Adjust as needed */
  gap: 10px;
}

.VPTeamMembers>.container>.item {
  width: 180px;
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

