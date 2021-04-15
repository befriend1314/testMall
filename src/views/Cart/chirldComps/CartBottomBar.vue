<template>
  <div class="bottom-menu">
    <CheckButton class="select-all" @checkBtnClick="checkBtnClick" v-model="isSelectAll"></CheckButton>
    <span>全选</span>
    <span class="total-price">合计: ¥{{totalPrice}}</span>
    <span class="buy-product">去计算({{$store.getters.cartCount}})</span>
  </div>
</template>

<script>
import CheckButton from './CheckButton'
export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  computed: {
    totalPrice() {
      const cartList = this.$store.getters.cartList;
      return cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.count * item.price
      }, 0).toFixed(2)
    },
    isSelectAll: function () {
      return this.$store.getters.cartList.find(item => item.checked === false) === undefined;
    }
  },
  methods: {
    checkBtnClick: function () {
      let isSelectAll = this.$store.getters.cartList.find(item => !item.checked);
      if (isSelectAll) {
        this.$store.state.cartList.forEach(item => {
          item.checked = true;
        });
      } else {
        this.$store.state.cartList.forEach(item => {
          item.checked = false;
        });
      }
    }
  }
}
</script>

<style scoped>
.bottom-menu {
  position: absolute;
  bottom: 70px;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #eee;
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
}
.bottom-menu .select-all {
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 13px;
}
.bottom-menu .total-price {
  margin-left: 15px;
  font-size: 16px;
  color: #666;
}
.bottom-menu .buy-product {
  background-color: orangered;
  color: #fff;
  width: 100px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  float: right;
}
</style>