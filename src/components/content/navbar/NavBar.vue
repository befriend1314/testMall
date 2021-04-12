<template>
  <div class="narbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center centerbox"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
name: "NavBar"
}
</script>

<style scoped>
  .narbar{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10;
  }
  .centerbox{
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    background-color: #fa563b;
  }
</style>