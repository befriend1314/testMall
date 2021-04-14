<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多<i class="arrow-right"></i></div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-imgs">
        <div class="imgbox" v-for="(item,index) in commentInfo.images" :key="index">
          <img :src="item"  alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate} from "common/utils";

export default {
  name: "DetailComment",
  props: {
    commentInfo: {
      type: Object,
      default: {}
    }
  },
  filters: {
    showDate(value) {
      const date = new Date(value * 1000)
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
  .comment-info{
    padding: 0 10px 20px;
    border-top: 5px solid #eee;
  }
  .info-header{
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    border-bottom: 1px solid #eee;
  }
  .info-user{
    margin-top: 15px;
    font-size: 16px;
  }
  .info-user img{
    margin-right: 20px;
    width: 40px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .info-detail{
    line-height: 1.5;
  }
  .info-other span{
    margin-right: 20px;
  }
  .info-imgs{
    margin-top: 10px;
  }
  .imgbox{
    display: inline-block;
    margin-right: 10px;
    width: 70px;
    height: 70px;
    overflow: hidden;
  }
  .info-imgs img{
    display: block;
    width: 200px;
  }
</style>