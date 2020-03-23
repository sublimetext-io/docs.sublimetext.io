<template>
  <div class="footer-wrapper">
    <span>
      <a target="blank" href="https://github.com/danktuary/vuepress-theme-yuu">Based on vuepress-theme-yuu</a>
    </span>
    <span>
      Copyright:
      <a>
        <span v-if="$themeConfig.sublime.startYear">{{ $themeConfig.sublime.startYear }} - </span>
        {{ year }}
      </a>
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .footer-wrapper {
    padding: 1.5rem 2.5rem;
    border-top: 1px solid var(--border-color);
    text-align: center;
    font-size .75rem
    color: #5d5959;
    a {
      font-size .75rem
      color: #5d5959;
    }
    > span {
      margin-left 1rem
      > i {
        margin-right .5rem
      }
    }
  }
@media (max-width: $MQMobile) {
  .footer {
    text-align: left!important;
    > span {
      display block
      margin-left 0
      line-height 2rem
    }
  }
}
</style>