<template>
  <div class="detail-wrap">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
    <scroll class="detail-scroll" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :topImages="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detailInfo="detailInfo" @detailImageLoad="detailImageLoad"/>
      <detail-params-info :paramsInfo="paramsInfo" ref="params"/>
      <detail-comment :commentInfo="commentInfo" ref="comment"/>
      <goods-list :goods="recommends" ref="recommends"/>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart" />
    <back-top @click.native="backTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import DetailSwiper from "./chirldComps/DetailSwiper";
import DetailNavBar from "./chirldComps/DetailNavBar";
import DetailBaseInfo from "./chirldComps/DetailBaseInfo";
import DetailShopInfo from "./chirldComps/DetailShopInfo";
import DetailGoodsInfo from "./chirldComps/DetailGoodsInfo";
import DetailParamsInfo from "./chirldComps/DetailParamsInfo";
import DetailComment from "./chirldComps/DetailComment";
import DetailBottomBar from "./chirldComps/DetailBottomBar";

import Scroll from "components/common/scroll/Scroll";

import BackTop from "components/content/backtop/BackTop";
import GoodsList from "components/content/goods/GoodsList";

import {debounce} from 'common/utils'

import {getDetail, Goods, Shop, GoodsParam, getRecommend} from "network/detail";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages:[],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopY: [],
      getThemeTopY: null,
      isShowBackTop: false,
      currentIndex: 0
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailComment,
    DetailBottomBar,
    GoodsList,
    BackTop,
    Scroll
  },
  created() {
    this.iid = this.$route.query.iid
    getDetail(this.iid).then(res => {
      const data = res.result
      this.topImages = data.itemInfo.topImages

      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      this.shop = new Shop(data.shopInfo)

      this.detailInfo = data.detailInfo

      this.paramsInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

      if(data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
    })

    getRecommend().then(res => {
      this.recommends = res.data.list
    })
    this.getThemeTopY = debounce(() => {
      this.themeTopY = []
      this.themeTopY.push(0)
      this.themeTopY.push(this.$refs.params.$el.offsetTop - 50)
      this.themeTopY.push(this.$refs.comment.$el.offsetTop - 50)
      this.themeTopY.push(this.$refs.recommends.$el.offsetTop - 50)
      this.themeTopY.push(Number.MAX_VALUE)
    })
  },
  methods: {
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 300)
    },
    detailImageLoad() {
      this.getThemeTopY()
    },
    contentScroll(position) {
      const pY = -position.y
      let l = this.themeTopY.length
      for(let i = 0; i < l - 1; i++) {
        if((this.currentIndex !== i) && (pY >= this.themeTopY[i] && pY < this.themeTopY[i+1])) {
          this.currentIndex = i
          this.$refs.nav.currentIndex  = this.currentIndex
        }
      }

      this.isShowBackTop = (-position.y) > 1000

    },
    backTop(){
      this.$refs.scroll.scrollTo(0,0)
    },
    addToCart() {
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      this.$store.dispatch('addCart',product)
    }
  }
}
</script>

<style scoped>
  .detail-nav{
    position: relative;
    z-index: 1002;
  }
  .detail-wrap{
    position: relative;
    z-index: 1000;
    height: 100vh;
    background-color: #fff;
    overflow: hidden;
  }
  .detail-scroll{
    height: calc(100% - 120px);
    overflow: hidden;
  }
</style>