<template>
  <div v-if="Object.keys(paramsInfo).length !== 0" class="params-info">
    <table v-for="(table, index) in paramsInfo.sizes" class="info-size" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in paramsInfo.infos">
        <td><span class="info-key">{{info.key}}</span></td>
        <td><span class="info-value">{{info.value}}</span></td>
      </tr>
    </table>
    <div v-if="paramsInfo.image.length !== 0" class="info-img">
      <img :src="paramsInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props: {
    paramsInfo: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style scoped>
  .params-info{
    border-top: 5px solid #eee;
    padding: 20px 15px;
  }
  table{
    width: 100%;
    font-size: 16px;
  }
  td{
    height: 40px;
  }
  .info-size tr td:first-child{
    width: 65px;
  }
  .info-param tr td:first-child{
    width: 80px;
  }
  .info-param{
    border-top: 5px solid #eee;
  }
  .info-value{
    color: #f00;
  }
</style>