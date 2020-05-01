
<template>
  <div class="kbd-container" v-html="generateKbd" />
</template>

<script>
export default {
  props: {
    k: {
      type: String,
      default: false
    },
  },
  data () {
    return {
      keys: []
    }
  },
  mounted () {
    this.splitShortcut()
  },
  computed: {
    generateKbd () {
      return this.keys.map(function(x) {return "<kbd>" + x + "</kbd>"}).join(" + ")
    }
  },
  methods: {
    splitShortcut () {
      this.keys = this.k.split("+").map((item)=>item.trim());
    }
  }
}
</script>