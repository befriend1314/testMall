<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem" />
      <scroll class="sortWrap">
        <div>
          <tab-content-category :subcategories="showSubcategory" />
          <tab-control @tabClick="tabClick" :tab-titles="tabTitles" />
          <tab-content-detail :category-detail="showCategoryDetail" />
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from "components/content/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabcontrol/TabControl";

import TabMenu from "./chirldComps/TabMenu";
import TabContentCategory from "./chirldComps/TabContentCategory";
import TabContentDetail from "./chirldComps/TabContentDetail";

import { getCategory, getSubcategory, getCategoryDetail } from 'network/sort'
import {POP, SELL, NEW} from 'common/const'
import {tabControlMixin} from "common/mixin"

export default {
  name: "Category",
  components: {
    NavBar,
    Scroll,
    TabControl,
    TabMenu,
    TabContentCategory,
    TabContentDetail
  },
  mixins: [tabControlMixin],
  data() {
    return {
      categories: [],
      categoryData: {
      },
      currentIndex: -1,
      tabTitles: ['综合', '新品', '销量'],
    }
  },
  created() {
    // 1.请求分类数据
    this._getCategory()
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {}
      return this.categoryData[this.currentIndex].subcategories
    },
    showCategoryDetail() {
      if (this.currentIndex === -1) return []
      return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
    }
  },
  methods: {
    _getCategory() {
      getCategory().then(res => {
        // 1.获取分类数据
        this.categories = res.data.category.list
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              'pop': [],
              'new': [],
              'sell': []
            }
          }
        }
        // 3.请求第一个分类的数据
        this._getSubcategories(0)
      })
    },
    _getSubcategories(index) {
      this.currentIndex = index;
      const mailKey = this.categories[index].maitKey;
      getSubcategory(mailKey).then(res => {
        this.categoryData[index].subcategories = res.data
        this.categoryData = {...this.categoryData}
        this._getCategoryDetail(POP)
        this._getCategoryDetail(SELL)
        this._getCategoryDetail(NEW)
      })
    },
    _getCategoryDetail(type) {
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      getCategoryDetail(miniWallkey, type).then(res => {
        this.categoryData[this.currentIndex].categoryDetail[type] = res
        this.categoryData = {...this.categoryData}
      })
    },
    /**
     * 事件响应相关的方法
     */
    selectItem(index) {
      this._getSubcategories(index)
    }
  }
}
</script>

<style scoped>
#category {
  height: 100vh;
}
.nav-bar {
  background-color: #fff;
  font-weight: 700;
  color: #fff;
}
.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 50px;
  bottom: 70px;
  display: flex;
}
.sortWrap{
  position: absolute;
  right: 0;
  left: 100px;
  top: 0;
  bottom: 0;
  overflow: hidden;
}
</style>