<template>
    <div>
        <tab-bar>
            <tab-bar-item path="/home">
                <img slot="item-icon" src="../../../assets/images/tabbar/home.svg" alt="">
                <img slot="item-active-icon" src="../../../assets/images/tabbar/home_active.svg">
                <div slot="item-text">首页</div>
            </tab-bar-item>
            <tab-bar-item path="/category">
            <img slot="item-icon" src="../../../assets/images/tabbar/category.svg" alt="">
            <img slot="item-active-icon" src="../../../assets/images/tabbar/category_active.svg" alt="">
                <div slot="item-text">品类</div>
            </tab-bar-item>
            <tab-bar-item path="/cart">
            <img slot="item-icon" src="../../../assets/images/tabbar/shopcart.svg" alt="">
             <img slot="item-active-icon" src="../../../assets/images/tabbar/shopcart_active.svg" alt="">
                <div slot="item-text">购物车</div>
            </tab-bar-item>
            <tab-bar-item path="/me">
            <img slot="item-icon" src="../../../assets/images/tabbar/profile.svg" alt="">
            <img slot="item-active-icon" src="../../../assets/images/tabbar/profile_active.svg" alt="">
                <div slot="item-text">我的</div>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>
<script>
import TabBar from '../../common/tarbar/TabBar'
import TabBarItem from '../../common/tarbar/TabBarItem'
export default {
  name: 'MainTarBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
<style scoped>
</style>
