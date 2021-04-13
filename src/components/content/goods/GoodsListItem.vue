<template>
  <div class="goodsitem">
    <img :src="gooodsItem.show.img" alt="">
    <div class="goodsintro">
      <p class="title">{{gooodsItem.title}}</p>
      <span class="price">¥{{gooodsItem.price}}</span>
      <span class="cfav"><i></i>{{gooodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    gooodsItem: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style scoped>
  .goodsitem{
    padding: 20px 0 0;
    width: 48%;
  }
  .goodsitem img{
    display: block;
    width: 100%;
    border-radius: 5px;
  }
  .title{
    margin: 5px 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .price{
    color: #f00;
  }
  .cfav{
    float: right;
    margin-right: 10px;
  }
  .cfav i{
    display: inline-block;
    margin-right: 3px;
    width: 15px;
    height: 15px;
    vertical-align: top;
    background: url("~assets/img/home/cfavicon.png") no-repeat;
    background-size: cover;
  }
</style>