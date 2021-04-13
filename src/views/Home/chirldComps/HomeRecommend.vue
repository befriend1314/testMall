<template>
  <ul class="list">
    <li v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
        <span>{{item.title}}</span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
  .list{
    display: flex;
    padding: 20px 0;
    border-bottom: 8px solid #eee;
  }
  .list li{
    flex: 1;
    text-align: center;
  }
  .list a{
    text-decoration: none;
    color: #333;
    font-size: 16px;
  }
  .list img{
    display: block;
    margin: 0 auto 15px;
    width: 70px;
  }
</style>