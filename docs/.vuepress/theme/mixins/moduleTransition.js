export default {
  data () {
    return {
      sublimeShowModule: false
    }
  },
  mounted () {
    this.sublimeShowModule = true
  },
  destroyed () {
    this.sublimeShowModule = false
  }
}