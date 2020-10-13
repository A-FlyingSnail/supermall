import Vue from 'vue'
import VueRouter from 'vue-router'

// 安装路由插件
Vue.use(VueRouter)

const Home = () => import('../view/home/Home')
const Cart = () => import('../view/cart/Cart')
const Category = () => import('../view/category/Categroy')
const Me = () => import('../view/me/Me')

// 创建映射
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/Me',
    component: Me
  }
]

// 创建路由对象
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
