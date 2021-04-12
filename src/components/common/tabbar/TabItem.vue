<template>
  <div class="tab-item" @click="itemClick">
    <div v-if="isActive">
      <slot name="item-icon-ac"></slot>
    </div>
    <div v-else>
      <slot name="item-icon"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-test"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
  .tab-item{
    flex: 1;
    text-align: center;
  }
  .tab-item img{
    width: 25px;
    vertical-align: middle;
  }
  a{
    display: block;
    text-decoration: none;
    color: #333;
  }
  a.router-link-exact-active {
    color: #e04006;
  }
</style>