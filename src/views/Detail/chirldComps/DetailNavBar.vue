<template>
  <div>
    <nav-bar>
      <div slot="left" class="leftbtn" @click="back"><img src="~assets/img/detail/left.svg" class="lefticon" alt=""></div>
      <div slot="center" class="itemwrap">
        <div v-for="(item, index) in titles" @click="itemClick(index)" class="item" :class="{active: currentIndex === index}" :key="index">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/content/navbar/NavBar";
export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    },
    back(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.itemwrap{
  background-color: #fff;
}
.item{
  display: inline-block;
  margin: 0 10px;
  color: #333;
}
.active{
  color: #f00;
}
.lefticon{
  width: 30px;
  vertical-align: middle;
}
.leftbtn{
  margin-left: 10px;
  margin-top: 10px;
}
</style>