<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles" :key="index" class="tab-control-item" :class="{active:(currentIndex===index)}" @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>
<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index
      // eslint-disable-next-line vue/custom-event-name-casing
      this.$emit('tabClick', index)
    }
  }
}
</script>
<style>
    .tab-control{
        display: flex;
        text-align: center;
        font-size: 14px;
    }
    .tab-control-item{
        flex: 1;
        height: 40px;
        line-height: 40px;
    }
    .tab-control-item span{
        padding: 5px;
    }
    .active{
        color:var(--color-tint);
    }
    .active span{
         border-bottom:3px solid var(--color-tint);
    }
</style>
