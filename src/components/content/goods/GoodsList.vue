<template>
  <div class="goods-list">
    <goods-list-item v-for="(item, index) in goods" :key="index" :gooods-item="item" />
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
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 3px;
  }
</style>