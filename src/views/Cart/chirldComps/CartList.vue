<template>
  <scroll class="carlist-content">
    <cart-list-item v-for="item in cartList" :key="item.iid" :item-info="item" />
  </scroll>
</template>

<script>
import CartListItem from "./CartListItem";
import Scroll from "components/common/scroll/Scroll";
export default {
  name: "CartList",
  props: {
    cartList: {
      type: Array,
      default: []
    }
  },
  components: {
    CartListItem,
    Scroll
  }
}
</script>

<style scoped>
  .carlist-content{
    height: calc(100vh - 170px) ;
    overflow: hidden;
  }
</style>