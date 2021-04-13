<template>
  <div class="sort">
    <scroll class="mycontent">
      <ul>
        <li v-for="i in 100">这里是数据{{i}}</li>
      </ul>
    </scroll>
  </div>
</template>

<script>

import Scroll from "components/common/scroll/Scroll"
export default {
  name: "Sort",
  components: {
    Scroll
  }
}
</script>

<style scoped>

  .mycontent{
    height: 300px;
    overflow: hidden;
    background-color: #fcc;
  }
</style>