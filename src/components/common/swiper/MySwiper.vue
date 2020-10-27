<template>
    <div class="wrap">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'MySwiper',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      names: [],
      itemLen: 0,
      curSelected: ''
    }
  },
  methods: {
    // 不断修改子组件的显示和隐藏
    showChilden () {
      this.curSelected = this.value || this.names[0]
      this.$children.forEach(vm => {
        vm.selected = this.curSelected
      })
    },
    selected (newIndex) {
      if (newIndex === -1) newIndex = this.itemLen - 1
      this.$emit('input', this.names[newIndex])
    },
    run () {
      setInterval(() => {
        const index = this.active
        const newIndex = index - 1
        this.selected(newIndex)
        console.log('时间出发')
      }, 3000)
    }
  },
  mounted () {
    this.names = this.$children.map(children => children.name1)
    console.log(this.names)
    this.itemLen = this.names.length
    this.showChilden()
    this.run()
  },
  watch: {
    value () {
      this.showChilden()
    }
  },
  computed: {
    active () {
      // 记录当前激活的下标
      return this.names.indexOf(this.curSelected)
    }
  }
}
</script>
<style scoped>
    .wrap {
        height:100%;
        width: 100%;
        overflow: hidden;
    }
</style>
