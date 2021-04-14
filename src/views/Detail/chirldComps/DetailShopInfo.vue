<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-item-left">
        <div class="info-sells">
          <div class="sells-count">
            {{shop.sells | sellCountFilter}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{shop.goodsCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-item-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td><span class="score" :class="{'score-better': item.isBetter}">{{item.score}}</span></td>
            <td><span class="better" :class="{'better-more': item.isBetter}">{{item.isBetter? '高': '低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default: {}
    }
  },
  filters: {
    sellCountFilter(num) {
      return (num/10000).toFixed(1) + '万'
    }
  }
}
</script>

<style scoped>
  .shop-info{
    padding: 30px 10px 20px;
    background-color: #fff;
  }
  .shop-top img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .shop-top .title{
    margin-left: 10px;
    font-size: 18px;
  }
  .shop-middle{
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .shop-middle::after{
    position: absolute;
    top: 10%;
    left: 50%;
    height: 80%;
    content: '';
    border-left: 1px solid #ddd;
  }
  .info-sells,.info-goods{
    display: inline-block;
    margin: 0 10px;
    text-align: center;
  }
  .sells-count,.goods-count{
    margin-bottom: 10px;
    font-size: 22px;
  }
  .shop-middle-item-right .score, .shop-middle-item-right .better{
    margin: 0 10px;
    color: green;
  }
  .shop-middle-item-right .score-better, shop-middle-item-right .better-more{
    color: #f00;
  }
  .shop-middle-item-right .better-more{
    color: #fff;
    background-color: #f00;
  }
  .shop-bottom{
    margin-top: 20px;
    text-align: center;
  }
  .enter-shop{
    display: inline-block;
    padding: 8px 30px;
    border-radius: 10px;
    background-color: #ddd;
  }
</style>