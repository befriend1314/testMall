<template>
  <div class="home">
    <nav-bar>
      <div slot="center">蘑菇街</div>
    </nav-bar>
    <tab-control ref="tabControl1" v-show="isTabFix" class="vs-control" @tabClick="tabClick" :tab-titles="tabTitles"/>
    <scroll
      class="my-content"
      :probe-type="3"
      :pull-up-load="true"
      ref="scroll"
      @scroll="contentScroll"
      @pullingUp="loadMore">
      <home-swiper :banners="banners" />
      <home-recommend :recommends="recommends" />
      <home-feature />
      <tab-control
        @tabClick="tabClick"
        :tab-titles="tabTitles"
        ref="tabControl2"/>
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
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
       isShowBackTop: false,
       isTabFix: false,
       tabOffsetTop: 0,
       saveY: 0,
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
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y
  },
  created() {
    this.getMultidata()
    this.getGoods('pop')
    this.getGoods('new')
    this.getGoods('sell')
  },
  mounted() {
    //获取 tabOffsetTop
    setTimeout(() => {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    }, 1000)
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
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    backTop(){
      this.$refs.scroll.scrollTo(0,0)
    },
    contentScroll(position) {
      this.isShowBackTop = (-position.y) > 1000

      // 控制切换按钮
      this.isTabFix = (-position.y) > this.tabOffsetTop
    },
    loadMore() {
      this.getGoods(this.currentType)
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

        this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
.home{
  height: 100vh;
}
.vs-control{
  position: relative;
  z-index: 10;
}
.my-content{
  position: absolute;
  left: 0;
  right: 0;
  top: 50px;
  bottom: 70px;
  overflow: hidden;
}
</style>
