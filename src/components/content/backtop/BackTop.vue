<template>
  <div class="backtop"></div>
</template>

<script>
export default {
name: "BackTop"
}
</script>

<style scoped>
  .backtop{
    position: fixed;
    bottom: 70px;
    right: 10px;
    width: 50px;
    height: 50px;
    background: url("~assets/img/common/top.png") no-repeat;
    background-size: cover;
    z-index: 10;
  }
</style>