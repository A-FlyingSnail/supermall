<template>
    <div id="home">
    <nav-bar class="nav">
      <div slot="center" class="center">购物街</div>
    </nav-bar>
    <div class="wrapper">
      <div class="content">
        <home-swiper :banners="banners"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view/>
        <tab-control :titles="['流行','新款','精选']"  @tabClick="tabClick"></tab-control>
        <goods-list :goods="goods[currentType].list"></goods-list>
          <ul>
            <li>拉萨大</li>
            <li>拉萨大</li>
            <li>拉萨大</li>
            <li>拉萨大</li>
            <li>拉萨大</li>
            <li>拉萨大</li>
            <li>拉萨大</li>
            <li>拉萨大</li>
            <li>拉萨大</li>
          </ul>
      </div>
    </div>
    </div>
</template>
<script>
import { getHomeMultiData, getHomeGoods } from '../../network/home'

import HomeSwiper from './childComps/HomeSwiper'
// import MyHomeSwiper from 'components/common/swiper/MyHomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/contents/tabControl/TabControl'

import GoodsList from 'components/contents/goods/GoodsList'

export default {
  name: 'Home',
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop'
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList
    // MyHomeSwiper
  },
  methods: {
    // 请求多个数据
    getHomeMultiData () {
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    // 请求商品数据
    getHomeGoods (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // console.log('商品数据')
        // console.log(res)
        this.goods[type].page = page
        this.goods[type].list = res.data.list
      })
    },
    tabClick (value) {
      switch (value) {
        case 0:
          console.log('pop')
          this.currentType = 'pop'
          break
        case 1:
          console.log('new')
          this.currentType = 'new'
          break
        case 2:
          console.log('sell')
          this.currentType = 'sell'
          break
      }
    }
  },
  created () {
    // eslint-disable-next-line no-trailing-spaces
    this.getHomeMultiData()
    this.getHomeGoods('new')
    this.getHomeGoods('pop')
    this.getHomeGoods('sell')
  }
}
</script>
<style scoped>
.nav{
 background-color: var(--color-tint);
    color:#fff;
}
.swiper{
  margin-top:49px ;
}
</style>
