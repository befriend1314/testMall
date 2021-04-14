<template>
  <div class="detailwrap">
    <detail-nav-bar class="detail-nav"/>
    <scroll class="detailscroll">
      <detail-swiper :topImages="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detailInfo="detailInfo" />
      <detail-params-info :paramsInfo="paramsInfo"/>
      <detail-comment :commentInfo="commentInfo"/>
    </scroll>
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

import Scroll from "components/common/scroll/Scroll";

import {getDetail, Goods, Shop, GoodsParam} from "network/detail";

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
      commentInfo: {}
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
    Scroll
  },
  created() {
    this.iid = this.$route.params.iid
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
  }
}
</script>

<style scoped>
  .detail-nav{
    position: relative;
    z-index: 1002;
  }
  .detailwrap{
    position: relative;
    z-index: 1000;
    height: 100vh;
    background-color: #fff;
    overflow: hidden;
  }
  .detailscroll{
    height: calc(100% - 50px);
  }
</style>