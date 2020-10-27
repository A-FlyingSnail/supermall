<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar class="main-tab-bar"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './components/contents/maintarbar/MainTabBar'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}

</script>

<style>
    @import './assets/css/base.css';
    .main-tab-bar{
      width: 100%;
      position: fixed;
      left: 0px;
      bottom: 0px;
      right: 0px;
    }
</style>
