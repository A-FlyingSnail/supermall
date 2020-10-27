<template>
    <transition>
      <div class="swiper-item" v-if="isShow">
        <slot></slot>
    </div>
    </transition>
</template>
<script>
export default {
  name: 'MySwiperItem',
  props: {
    name1: {
      type: String
    }
  },
  data () {
    return {
      selected: ''
    }
  },
  computed: {
    isShow () {
      return this.selected === this.name1
    }
  }
}
</script>
<style scoped>
.swiper-item{
    height:100%
}
.v-enter-active, .leave-active {
  transition: all 0.5s ease-in-out;
}
.v-leave-to {
  transform: translate(-100%);
}
.v-enter{
  transform: translate(100%);
}
.v-enter-active{
  width: 100%;
}

</style>
