<template>
    <div>
        <my-swiper v-model="selected" class="myswiper">
            <my-swiper-item name1="item1">
                <div class="item-box">内容1</div>
            </my-swiper-item>
            <my-swiper-item name1="item2">
                <div class="item-box2">内容2</div>
            </my-swiper-item>
            <my-swiper-item name1="item3">
                <div class="item-box3">内容3</div>
            </my-swiper-item>
        </my-swiper>
    </div>
</template>
<script>
import MySwiper from './MySwiper'
import MySwiperItem from './MySwiperItem'
export default {
  name: 'MyHomeSwiper',
  data () {
    return {
      selected: ''
    }
  },
  components: {
    MySwiperItem,
    MySwiper
  }
}
</script>
<style scoped>
 .item-box{
    background:#99a9bf;
     height:150px
 }
 .item-box2{
     background: red;
     height: 150px;
 }
 .item-box3{
     background: blue;
     height: 150px;
 }
 .center .item-box{
     background: blue;
 }
</style>
