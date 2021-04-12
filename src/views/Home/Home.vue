<template>
  <div class="home">
    <nav-bar>
      <div slot="center">蘑菇街</div>
    </nav-bar>
    <home-swiper :banners="banners" />

  </div>
</template>

<script>
import NavBar from 'components/content/navbar/NavBar'
import HomeSwiper from "./chirldComps/HomeSwiper"

import {getHomeMultidata} from "network/home"
export default {
  name: 'Home',
  data() {
     return {
       banners: [],
       recommends: []
     }
  },
  components: {
    NavBar,
    HomeSwiper
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>
