<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc">
      <div class="desc">{{detailInfo.desc}}</div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" :src="item" :key="index" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: Object,
    default: {}
  }
}
</script>

<style scoped>
  .goods-info{
    padding: 20px 10px;
  }
  .info-desc .desc{
    font-size: 18px;
    line-height: 1.875;
  }
  .info-key{
    margin: 15px 0;
    font-size: 18px;
  }
  .info-list img{
    display: block;
    margin-bottom: 10px;
    width: 100%;
  }
</style>