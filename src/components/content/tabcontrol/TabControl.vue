<template>
  <div class="tab-control">
    <div v-for="(item, index) in tabTitles"
         :class="{item, active: index === currentIndex }"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      tabTitles: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
  }
  .item{
    flex: 1;
  }
  .item span{
    display: inline-block;
    padding: 0 8px;
    border-bottom: 2px solid transparent;
  }
  .active{
    color: #f00;
  }
  .active span{
    border-bottom-color: #f00;
  }
</style>