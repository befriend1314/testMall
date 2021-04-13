<template>
  <div class="goodslist">
    <goods-list-item v-for="(item, index) in goods" :key="index" :gooodsItem="item" />
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";
  export default {
    name: "GoodsList",
    props: {
      goods: {
        type: Array,
        default: []
      }
    },
    components: {
      GoodsListItem
    }
  }
</script>

<style scoped>
  .goodslist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 3px;
  }
</style>