<template>
  <tab-bar>
    <tab-item path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-ac" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-test">首页</div>
    </tab-item>
    <tab-item path="/sort">
      <img slot="item-icon" src="~assets/img/tabbar/sort.svg" alt="">
      <img slot="item-icon-ac" src="~assets/img/tabbar/sort_active.svg" alt="">
      <div slot="item-test">分类</div>
    </tab-item>
    <tab-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt="">
      <img slot="item-icon-ac" src="~assets/img/tabbar/cart_active.svg" alt="">
      <div slot="item-test">购物车</div>
    </tab-item>
    <tab-item path="/user">
      <img slot="item-icon" src="~assets/img/tabbar/user.svg" alt="">
      <img slot="item-icon-ac" src="~assets/img/tabbar/user_active.svg" alt="">
      <div slot="item-test">我的</div>
    </tab-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar"
import TabItem from "components/common/tabbar/TabItem"
export default {
name: "MainTabBar",
  components: {
    TabBar,
    TabItem
  }
}
</script>

<style scoped>

</style>