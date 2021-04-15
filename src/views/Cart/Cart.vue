<template>
  <div class="cart">
    <nav-bar class="navbar">
      <div slot="center">购物车 ( {{cartLength}} )</div>
    </nav-bar>
    <cart-list :cartList="cartList" />
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from "components/content/navbar/NavBar";
import CartList from "./chirldComps/CartList";
import CartBottomBar from "./chirldComps/CartBottomBar";
import { mapGetters } from 'vuex'
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters(['cartLength', 'cartList'])
  }
}
</script>

<style scoped>

</style>