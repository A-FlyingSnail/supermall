<template>
    <div class="content">
    <ul>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
      <li>sad</li>
    </ul>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'Categroy',
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    // console.log(document.querySelector('.content'))
    // eslint-disable-next-line no-new
    this.scroll = new BScroll(document.querySelector('.content'), {
      probeType: 3,
      click: true,
      pullUpLoad: true
    })
    // this.scroll.on('scroll', (position) => { console.log(position) })
    // 下拉加载更多
    this.scroll.on('pullingUp', () => {
      console.log('下拉加载更多')
    })
  }
}
</script>
<style scoped>
.content{
  height:150px;
  background: red;
  overflow: hidden;
}
</style>
