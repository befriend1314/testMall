<template>
  <div id="nav">
    <div class="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
name: "TabBar",
}
</script>

<style scoped>
#nav {
  position: fixed;
  z-index: 100;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 15px 0;
  height: 70px;
  background-color: #f2f2f2;
}
.tab-bar{
  display: flex;
  width: 100%;
}
</style>