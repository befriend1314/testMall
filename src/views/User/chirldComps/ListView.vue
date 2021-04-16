<template>
  <div id="list">
    <div v-for="(item, index) in listData" :key="index" class="item">
      <span class="icon" :class="item.icon"></span>
      <div class="info">{{item.info}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListView",
  props: {
    listData: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style scoped>
#list {
  background-color: #fff;
  font-size: 15px;
  color: #333;
}
#list .item {
  height: 44px;
  line-height: 44px;
  position: relative;
}
.item .icon {
  margin-top: 10px;
  position: absolute;
  left: 16px;
  top: 4px;
  width: 16px;
  height: 16px;
  background-size: cover;
  background-repeat: no-repeat;
}
.item .icon.order{
  background-image: url("~assets/img/user/order.png");
}
.item .icon.point{
  background-image: url("~assets/img/user/point.png");
}
.item .icon.vip{
  background-image: url("~assets/img/user/vip.png");
}
.item .icon.service{
  background-image: url("~assets/img/user/service.png");
}
.item .icon.download{
  background-image: url("~assets/img/user/download.png");
}
.item .info {
  margin-left: 40px;
  border-bottom: 1px solid rgba(100, 100, 100, .1);
  padding-left: 5px;
}


.item:last-of-type .info {
  border-bottom: none;
}
</style>