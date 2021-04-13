<template>
  <div class="home">
    <nav-bar>
      <div slot="center">蘑菇街</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <home-recommend :recommends="recommends" />
    <home-feature />
    <tab-control
      class="tab-control"
      @tabClick="tabClick"
      :tabTitles="tabTitles" />
    <goods-list :goods="showGoods" />
    <ul>
      <li v-for="i in 100">这里是数据{{i}}</li>
    </ul>
    <back-top />
  </div>
</template>

<script>
import NavBar from 'components/content/navbar/NavBar'
import TabControl from "components/content/tabcontrol/TabControl"
import GoodsList from "components/content/goods/GoodsList"
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backtop/BackTop";

import HomeSwiper from "./chirldComps/HomeSwiper"
import HomeRecommend from "./chirldComps/HomeRecommend";
import HomeFeature from "./chirldComps/HomeFeature";

import {getHomeMultidata, getHomeGoods} from "network/home"
export default {
  name: 'Home',
  data() {
     return {
       banners: [],
       recommends: [],
       tabTitles: ['流行', '新款', '精选'],
       goods: {
         'pop': {
           page: 0, list: []
         },
         'new': {
           page: 0, list: []
         },
         'sell': {
           page: 0, list: []
         },
       },
       currentType: 'pop'
     }
  },
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    HomeSwiper,
    HomeRecommend,
    HomeFeature
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    this.getMultidata()
    this.getGoods('pop')
    this.getGoods('new')
    this.getGoods('sell')
  },
  methods: {
    /** 事件监听相关 **/
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    /** 网络请求相关**/
    getMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    }
  }
}
</script>

<style scoped>
.home{
  padding-top: 50px;
}
.tab-control{
  position: -webkit-sticky;
  position: sticky;
  top: 50px;
  background-color: #fff;
}
</style>
