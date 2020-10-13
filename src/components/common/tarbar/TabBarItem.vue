<template>
    <div class="tab-bar-item" @click="itemClick">
        <slot name="item-icon" v-if="!isActive"></slot>
        <slot name="item-active-icon" v-else></slot>
        <div :style="isStyleActive">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>
<script>
export default {
  name: 'TabBarItem',
  props: {
    activeColor: {
      type: String,
      default: 'coral'
    },
    path: {
      type: String
    }
  },
  methods: {
    itemClick () {
      this.$router.push(this.path)
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    isStyleActive () {
      return this.isActive ? { color: this.activeColor } : {}
    }
  }
}
</script>
<style scoped>
.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    font-weight: bold;
    color:black;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin: 4px 0 2px 0;
  }

  .actived {
    color:coral;
    font-weight: bolder;
  }

</style>
