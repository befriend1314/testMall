import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 当前路由重复点击时报错
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

const Home = () => import(/* webpackChunkName: "home" */ '../views/Home/Home')
const Sort = () => import(/* webpackChunkName: "sort" */ '../views/Sort/Sort')
const Cart = () => import(/* webpackChunkName: "cart" */ '../views/Cart/Cart')
const User = () => import(/* webpackChunkName: "user" */ '../views/User/User')
const Detail = () => import(/* webpackChunkName: "detail" */ '../views/Detail/Detail')
const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/sort',
    name: 'Sort',
    component: Sort
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
