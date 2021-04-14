<template>
  <div v-if="Object.keys(goods).length !== 0" class="baseinfo">
    <div class="infotitle">{{goods.title}}</div>
    <div class="infoprice">
      <span class="nprice">{{goods.newPrice}}</span>
      <span class="oprice">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="infoother">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="infoservice">
      <span class="infoserviceitem" v-for="i in goods.services.length-1" :key="i">
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
  .baseinfo{
    padding: 10px 10px 25px;
    border-bottom: 5px solid #eee;
  }
  .infotitle{
    font-size: 18px;
    line-height: 1.4;
  }
  .infoprice{
    margin-top: 10px;
  }
  .nprice{
    font-size: 30px;
    color: #f00;
  }
  .oprice{
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
  .infoother{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    font-size: 16px;
    color: #666;
  }
  .infoservice{
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    font-size: 14px;
  }
  .infoservice img{
    display: inline-block;
    margin-right: 2px;
    vertical-align: middle;
    width: 14px;
  }
</style>