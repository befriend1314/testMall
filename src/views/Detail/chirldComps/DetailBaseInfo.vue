<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="i in goods.services.length-1" :key="i">
        <img :src="goods.services[i-1].icon" alt="">
        <span>{{goods.services[i-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object
    }
  },
}
</script>

<style scoped>
  .base-info{
    padding: 10px 10px 25px;
    border-bottom: 5px solid #eee;
  }
  .info-title{
    font-size: 18px;
    line-height: 1.4;
  }
  .info-price{
    margin-top: 10px;
  }
  .n-price{
    font-size: 30px;
    color: #f00;
  }
  .o-price{
    margin-left: 5px;
    color: #999;
    font-size: 16px;
    text-decoration: line-through;
  }
  .discount{
    margin-left: 8px;
    padding: 3px 6px;
    background-color: #f00;
    border-radius: 8px;
    color: #fff;
    vertical-align: top;
  }
  .info-other{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    font-size: 16px;
    color: #666;
  }
  .info-service{
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    font-size: 14px;
  }
  .info-service img{
    display: inline-block;
    margin-right: 2px;
    vertical-align: middle;
    width: 14px;
  }
</style>