<template>
  <template v-if="!error">
    <h1>Contributors ({{ contributors.length }})</h1>
    <VPTeamMembers v-if="!error" size="small" :members="displayedContributors" />
    <button v-if="contributors.length > maxVisible" @click="toggleShowMore">
      <svg v-if="showMore" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="lucide lucide-chevron-up">
        <path d="m18 15-6-6-6 6" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="lucide lucide-chevron-down">
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
  </template>
  <p v-else class="error-message">{{ error }}</p>
</template>

<script>
import { VPTeamMembers } from 'vitepress/theme'

export default {
  components: {
    VPTeamMembers
  },
  props: {
    user: {
      type: String,
      required: true
    },
    repo: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      contributors: [],
      error: null,
      showMore: false,
      maxVisible: 10
    }
  },
  computed: {
    displayedContributors() {
      if (this.showMore) {
        return this.contributors;
      }
      return this.contributors.slice(0, this.maxVisible);
    }
  },
  async mounted() {
    try {
      await this.getContributors()
    } catch {
      this.error = "Whoops! Unable to fetch contributors."
    }
  },
  methods: {
    async getContributors() {
      const { user, repo } = this;
      let page = 1;
      let hasNextPage = true;
      const allContributors = [];

      while (hasNextPage) {
        const uri = `https://api.github.com/repos/${user}/${repo}/contributors?per_page=100&page=${page}`;

        const response = await fetch(uri);

        if (!response.ok) {
          throw new Error('Failed to fetch contributors');
        }

        const res = await response.json();

        if (res.length === 0) {
          hasNextPage = false;
        } else {
          const contributors = res.map(contributor => ({
            avatar: contributor.avatar_url,
            name: contributor.login,
            title: 'Contributor',
            links: [
              { icon: 'github', link: contributor.url },
            ]
          }));

          allContributors.push(...contributors);
          page++;
        }
      }

      this.contributors = allContributors;
    },
    toggleShowMore() {
      this.showMore = !this.showMore;
    }
  }
}
</script>

