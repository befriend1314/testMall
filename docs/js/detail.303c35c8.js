(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["detail"],{"0b08":function(t,e,s){},"0cb3":function(t,e,s){"use strict";s("bd52")},1148:function(t,e,s){"use strict";var i=s("a691"),n=s("1d80");t.exports=function(t){var e=String(n(this)),s="",a=i(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(s+=e);return s}},"130b":function(t,e,s){"use strict";s("e82a")},"1c7f":function(t,e,s){},"25f0":function(t,e,s){"use strict";var i=s("6eeb"),n=s("825a"),a=s("d039"),o=s("ad6d"),r="toString",c=RegExp.prototype,l=c[r],u=a((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),f=l.name!=r;(u||f)&&i(RegExp.prototype,r,(function(){var t=n(this),e=String(t.source),s=t.flags,i=String(void 0===s&&t instanceof RegExp&&!("flags"in c)?o.call(t):s);return"/"+e+"/"+i}),{unsafe:!0})},"408a":function(t,e,s){var i=s("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},"41f9":function(t,e,s){"use strict";s("8ffb")},"44e7":function(t,e,s){var i=s("861d"),n=s("c6b6"),a=s("b622"),o=a("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==n(t))}},4690:function(t,e,s){t.exports=s.p+"img/left.b3c812f1.svg"},"4d63":function(t,e,s){var i=s("83ab"),n=s("da84"),a=s("94ca"),o=s("7156"),r=s("9bf2").f,c=s("241c").f,l=s("44e7"),u=s("ad6d"),f=s("9f7f"),d=s("6eeb"),h=s("d039"),m=s("69f3").set,p=s("2626"),v=s("b622"),g=v("match"),_=n.RegExp,b=_.prototype,C=/a/g,I=/a/g,x=new _(C)!==C,w=f.UNSUPPORTED_Y,y=i&&a("RegExp",!x||w||h((function(){return I[g]=!1,_(C)!=C||_(I)==I||"/a/i"!=_(C,"i")})));if(y){var T=function(t,e){var s,i=this instanceof T,n=l(t),a=void 0===e;if(!i&&n&&t.constructor===T&&a)return t;x?n&&!a&&(t=t.source):t instanceof T&&(a&&(e=u.call(t)),t=t.source),w&&(s=!!e&&e.indexOf("y")>-1,s&&(e=e.replace(/y/g,"")));var r=o(x?new _(t,e):_(t,e),i?this:b,T);return w&&s&&m(r,{sticky:s}),r},k=function(t){t in T||r(T,t,{configurable:!0,get:function(){return _[t]},set:function(e){_[t]=e}})},E=c(_),$=0;while(E.length>$)k(E[$++]);b.constructor=T,T.prototype=b,d(n,"RegExp",T)}p("RegExp")},5125:function(t,e,s){"use strict";s("5189")},5189:function(t,e,s){},"5c4b":function(t,e,s){"use strict";s("f61b")},"5f53":function(t,e,s){"use strict";s("0b08")},"5f8e":function(t,e,s){},"6d71":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goods-list"},t._l(t.goods,(function(t,e){return s("goods-list-item",{key:e,attrs:{"gooods-item":t}})})),1)},n=[],a=s("9977"),o={name:"GoodsList",props:{goods:{type:Array,default:[]}},components:{GoodsListItem:a["a"]}},r=o,c=(s("8b3d"),s("2877")),l=Object(c["a"])(r,i,n,!1,null,"1f6a5e94",null);e["a"]=l.exports},"79a3":function(t,e,s){"use strict";s("ea38")},"7fa5":function(t,e,s){"use strict";s("886b")},"886b":function(t,e,s){},"8b3d":function(t,e,s){"use strict";s("5f8e")},"8ffb":function(t,e,s){},a701:function(t,e,s){"use strict";s("1c7f")},b0c0:function(t,e,s){var i=s("83ab"),n=s("9bf2").f,a=Function.prototype,o=a.toString,r=/^\s*function ([^ (]*)/,c="name";i&&!(c in a)&&n(a,c,{configurable:!0,get:function(){try{return o.call(this).match(r)[1]}catch(t){return""}}})},b680:function(t,e,s){"use strict";var i=s("23e7"),n=s("a691"),a=s("408a"),o=s("1148"),r=s("d039"),c=1..toFixed,l=Math.floor,u=function(t,e,s){return 0===e?s:e%2===1?u(t,e-1,s*t):u(t*t,e/2,s)},f=function(t){var e=0,s=t;while(s>=4096)e+=12,s/=4096;while(s>=2)e+=1,s/=2;return e},d=function(t,e,s){var i=-1,n=s;while(++i<6)n+=e*t[i],t[i]=n%1e7,n=l(n/1e7)},h=function(t,e){var s=6,i=0;while(--s>=0)i+=t[s],t[s]=l(i/e),i=i%e*1e7},m=function(t){var e=6,s="";while(--e>=0)if(""!==s||0===e||0!==t[e]){var i=String(t[e]);s=""===s?i:s+o.call("0",7-i.length)+i}return s},p=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){c.call({})}));i({target:"Number",proto:!0,forced:p},{toFixed:function(t){var e,s,i,r,c=a(this),l=n(t),p=[0,0,0,0,0,0],v="",g="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(v="-",c=-c),c>1e-21)if(e=f(c*u(2,69,1))-69,s=e<0?c*u(2,-e,1):c/u(2,e,1),s*=4503599627370496,e=52-e,e>0){d(p,0,s),i=l;while(i>=7)d(p,1e7,0),i-=7;d(p,u(10,i,1),0),i=e-1;while(i>=23)h(p,1<<23),i-=23;h(p,1<<i),d(p,1,1),h(p,2),g=m(p)}else d(p,0,s),d(p,1<<-e,0),g=m(p)+o.call("0",l);return l>0?(r=g.length,g=v+(r<=l?"0."+o.call("0",l-r)+g:g.slice(0,r-l)+"."+g.slice(r-l))):g=v+g,g}})},bd52:function(t,e,s){},bea9:function(t,e,s){"use strict";s("db5d")},c369:function(t,e,s){},db5d:function(t,e,s){},dc2c:function(t,e,s){"use strict";s.d(e,"a",(function(){return l})),s.d(e,"b",(function(){return p}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"hy-swiper"}},[s("div",{staticClass:"swiper",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[t._t("default")],2),t._t("indicator"),s("div",{staticClass:"indicator"},[t.showIndicator&&t.slideCount>1?t._t("indicator",t._l(t.slideCount,(function(e,i){return s("div",{key:i,staticClass:"indi-item",class:{active:i===t.currentIndex-1}})}))):t._e()],2)],2)},n=[],a=(s("a9e3"),{name:"Swiper",props:{interval:{type:Number,default:3e3},animDuration:{type:Number,default:300},moveRatio:{type:Number,default:.25},showIndicator:{type:Boolean,default:!0}},data:function(){return{slideCount:0,totalWidth:0,swiperStyle:{},currentIndex:1,scrolling:!1}},mounted:function(){var t=this;setTimeout((function(){t.handleDom(),t.startTimer()}),3e3)},methods:{startTimer:function(){var t=this;this.playTimer=window.setInterval((function(){t.currentIndex++,t.scrollContent(-t.currentIndex*t.totalWidth)}),this.interval)},stopTimer:function(){window.clearInterval(this.playTimer)},scrollContent:function(t){this.scrolling=!0,this.swiperStyle.transition="transform "+this.animDuration+"ms",this.setTransform(t),this.checkPosition(),this.scrolling=!1},checkPosition:function(){var t=this;window.setTimeout((function(){t.swiperStyle.transition="0ms",t.currentIndex>=t.slideCount+1?(t.currentIndex=1,t.setTransform(-t.currentIndex*t.totalWidth)):t.currentIndex<=0&&(t.currentIndex=t.slideCount,t.setTransform(-t.currentIndex*t.totalWidth)),t.$emit("transitionEnd",t.currentIndex-1)}),this.animDuration)},setTransform:function(t){this.swiperStyle.transform="translate3d(".concat(t,"px, 0, 0)"),this.swiperStyle["-webkit-transform"]="translate3d(".concat(t,"px), 0, 0"),this.swiperStyle["-ms-transform"]="translate3d(".concat(t,"px), 0, 0")},handleDom:function(){var t=document.querySelector(".swiper"),e=t.getElementsByClassName("slide");if(this.slideCount=e.length,this.slideCount>1){var s=e[0].cloneNode(!0),i=e[this.slideCount-1].cloneNode(!0);t.insertBefore(i,e[0]),t.appendChild(s),this.totalWidth=t.offsetWidth,this.swiperStyle=t.style}this.setTransform(-this.totalWidth)},touchStart:function(t){this.scrolling||(this.stopTimer(),this.startX=t.touches[0].pageX)},touchMove:function(t){this.currentX=t.touches[0].pageX,this.distance=this.currentX-this.startX;var e=-this.currentIndex*this.totalWidth,s=this.distance+e;this.setTransform(s)},touchEnd:function(t){var e=Math.abs(this.distance);0!==this.distance&&(this.distance>0&&e>this.totalWidth*this.moveRatio?this.currentIndex--:this.distance<0&&e>this.totalWidth*this.moveRatio&&this.currentIndex++,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer())},previous:function(){this.changeItem(-1)},next:function(){this.changeItem(1)},changeItem:function(t){this.stopTimer(),this.currentIndex+=t,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer()}}}),o=a,r=(s("5c4b"),s("2877")),c=Object(r["a"])(o,i,n,!1,null,"7311194b",null),l=c.exports,u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slide"},[t._t("default")],2)},f=[],d={name:"SwiperItem"},h=d,m=(s("a701"),Object(r["a"])(h,u,f,!1,null,"3449c8b3",null)),p=m.exports},e764:function(t,e,s){"use strict";s("f0c8")},e82a:function(t,e,s){},ea38:function(t,e,s){},ee95:function(t,e,s){"use strict";s("c369")},f0c8:function(t,e,s){},f574:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detail-wrap"},[s("detail-nav-bar",{ref:"nav",staticClass:"detail-nav",on:{titleClick:t.titleClick}}),s("scroll",{ref:"scroll",staticClass:"detail-scroll",attrs:{"probe-type":3},on:{scroll:t.contentScroll}},[s("detail-swiper",{attrs:{topImages:t.topImages}}),s("detail-base-info",{attrs:{goods:t.goods}}),s("detail-shop-info",{attrs:{shop:t.shop}}),s("detail-goods-info",{attrs:{detailInfo:t.detailInfo},on:{detailImageLoad:t.detailImageLoad}}),s("detail-params-info",{ref:"params",attrs:{paramsInfo:t.paramsInfo}}),s("detail-comment",{ref:"comment",attrs:{commentInfo:t.commentInfo}}),s("goods-list",{ref:"recommends",attrs:{goods:t.recommends}})],1),s("detail-bottom-bar",{on:{addToCart:t.addToCart}}),s("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.backTop(e)}}})],1)},n=[],a=(s("a9e3"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("swiper",{staticClass:"detail-swiper-box"},t._l(t.topImages,(function(t,e){return s("swiper-item",{key:e},[s("img",{attrs:{src:t,alt:""}})])})),1)}),o=[],r=s("dc2c"),c={name:"DetailSwiper",props:{topImages:{type:Array,default:[]}},components:{Swiper:r["a"],SwiperItem:r["b"]}},l=c,u=(s("0cb3"),s("2877")),f=Object(u["a"])(l,a,o,!1,null,"22653a46",null),d=f.exports,h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("nav-bar",[i("div",{staticClass:"leftbtn",attrs:{slot:"left"},on:{click:t.back},slot:"left"},[i("img",{staticClass:"lefticon",attrs:{src:s("4690"),alt:""}})]),i("div",{staticClass:"itemwrap",attrs:{slot:"center"},slot:"center"},t._l(t.titles,(function(e,s){return i("div",{key:s,staticClass:"item",class:{active:t.currentIndex===s},on:{click:function(e){return t.itemClick(s)}}},[t._v(t._s(e))])})),0)])],1)},m=[],p=s("7fae"),v={name:"DetailNavBar",data:function(){return{titles:["商品","参数","评论","推荐"],currentIndex:0}},components:{NavBar:p["a"]},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("titleClick",t)},back:function(){this.$router.go(-1)}}},g=v,_=(s("7fa5"),Object(u["a"])(g,h,m,!1,null,"11909533",null)),b=_.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.goods).length?s("div",{staticClass:"base-info"},[s("div",{staticClass:"info-title"},[t._v(t._s(t.goods.title))]),s("div",{staticClass:"info-price"},[s("span",{staticClass:"n-price"},[t._v(t._s(t.goods.newPrice))]),s("span",{staticClass:"o-price"},[t._v(t._s(t.goods.oldPrice))]),t.goods.discount?s("span",{staticClass:"discount"},[t._v(t._s(t.goods.discount))]):t._e()]),s("div",{staticClass:"info-other"},[s("span",[t._v(t._s(t.goods.columns[0]))]),s("span",[t._v(t._s(t.goods.columns[1]))]),s("span",[t._v(t._s(t.goods.services[t.goods.services.length-1].name))])]),s("div",{staticClass:"info-service"},t._l(t.goods.services.length-1,(function(e){return s("span",{key:e,staticClass:"info-service-item"},[s("img",{attrs:{src:t.goods.services[e-1].icon,alt:""}}),s("span",[t._v(t._s(t.goods.services[e-1].name))])])})),0)]):t._e()},I=[],x={name:"DetailBaseInfo",props:{goods:{type:Object}}},w=x,y=(s("5f53"),Object(u["a"])(w,C,I,!1,null,"251179ae",null)),T=y.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-info"},[s("div",{staticClass:"shop-top"},[s("img",{attrs:{src:t.shop.logo,alt:""}}),s("span",{staticClass:"title"},[t._v(t._s(t.shop.name))])]),s("div",{staticClass:"shop-middle"},[s("div",{staticClass:"shop-middle-item shop-middle-item-left"},[s("div",{staticClass:"info-sells"},[s("div",{staticClass:"sells-count"},[t._v(" "+t._s(t._f("sellCountFilter")(t.shop.sells))+" ")]),s("div",{staticClass:"sells-text"},[t._v("总销量")])]),s("div",{staticClass:"info-goods"},[s("div",{staticClass:"goods-count"},[t._v(" "+t._s(t.shop.goodsCount)+" ")]),s("div",{staticClass:"goods-text"},[t._v("全部宝贝")])])]),s("div",{staticClass:"shop-middle-item shop-middle-item-right"},[s("table",t._l(t.shop.score,(function(e,i){return s("tr",{key:i},[s("td",[t._v(t._s(e.name))]),s("td",[s("span",{staticClass:"score",class:{"score-better":e.isBetter}},[t._v(t._s(e.score))])]),s("td",[s("span",{staticClass:"better",class:{"better-more":e.isBetter}},[t._v(t._s(e.isBetter?"高":"低"))])])])})),0)])]),t._m(0)])},E=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-bottom"},[s("div",{staticClass:"enter-shop"},[t._v("进店逛逛")])])}],$=(s("b680"),{name:"DetailShopInfo",props:{shop:{type:Object,default:{}}},filters:{sellCountFilter:function(t){return(t/1e4).toFixed(1)+"万"}}}),S=$,D=(s("e764"),Object(u["a"])(S,k,E,!1,null,"2660fb72",null)),O=D.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.detailInfo).length?s("div",{staticClass:"goods-info"},[s("div",{staticClass:"info-desc"},[s("div",{staticClass:"desc"},[t._v(t._s(t.detailInfo.desc))])]),s("div",{staticClass:"info-key"},[t._v(t._s(t.detailInfo.detailImage[0].key))]),s("div",{staticClass:"info-list"},t._l(t.detailInfo.detailImage[0].list,(function(e,i){return s("img",{key:i,attrs:{src:e,alt:""},on:{load:t.imageLoad}})})),0)]):t._e()},B=[],R={name:"DetailGoodsInfo",props:{detailInfo:Object,default:{}},methods:{imageLoad:function(){this.$emit("detailImageLoad")}}},N=R,P=(s("ee95"),Object(u["a"])(N,j,B,!1,null,"0f5dce10",null)),Y=P.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.paramsInfo).length?s("div",{staticClass:"params-info"},[t._l(t.paramsInfo.sizes,(function(e,i){return s("table",{key:i,staticClass:"info-size"},t._l(e,(function(e,i){return s("tr",{key:i},t._l(e,(function(e,i){return s("td",{key:i},[t._v(t._s(e))])})),0)})),0)})),s("table",{staticClass:"info-param"},t._l(t.paramsInfo.infos,(function(e,i){return s("tr",[s("td",[s("span",{staticClass:"info-key"},[t._v(t._s(e.key))])]),s("td",[s("span",{staticClass:"info-value"},[t._v(t._s(e.value))])])])})),0),0!==t.paramsInfo.image.length?s("div",{staticClass:"info-img"},[s("img",{attrs:{src:t.paramsInfo.image,alt:""}})]):t._e()],2):t._e()},F=[],L={name:"DetailParamsInfo",props:{paramsInfo:{type:Object,default:{}}}},M=L,X=(s("130b"),Object(u["a"])(M,W,F,!1,null,"6140cd68",null)),G=X.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.commentInfo).length?s("div",{staticClass:"comment-info"},[t._m(0),s("div",{staticClass:"info-user"},[s("img",{attrs:{src:t.commentInfo.user.avatar,alt:""}}),s("span",[t._v(t._s(t.commentInfo.user.uname))])]),s("div",{staticClass:"info-detail"},[s("p",[t._v(t._s(t.commentInfo.content))]),s("div",{staticClass:"info-other"},[s("span",{staticClass:"date"},[t._v(t._s(t._f("showDate")(t.commentInfo.created)))]),s("span",[t._v(t._s(t.commentInfo.style))])]),s("div",{staticClass:"info-imgs"},t._l(t.commentInfo.images,(function(t,e){return s("div",{key:e,staticClass:"imgbox"},[s("img",{attrs:{src:t,alt:""}})])})),0)])]):t._e()},z=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"info-header"},[s("div",{staticClass:"header-title"},[t._v("用户评价")]),s("div",{staticClass:"header-more"},[t._v("更多"),s("i",{staticClass:"arrow-right"})])])}];s("ac1f"),s("5319"),s("4d63"),s("25f0");function U(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,s=null;return function(){for(var i=this,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];s&&clearTimeout(s),s=setTimeout((function(){t.apply(i,a)}),e)}}function q(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var s={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var i in s)if(new RegExp("(".concat(i,")")).test(e)){var n=s[i]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?n:J(n))}return e}function J(t){return("00"+t).substr(t.length)}var H={name:"DetailComment",props:{commentInfo:{type:Object,default:{}}},filters:{showDate:function(t){var e=new Date(1e3*t);return q(e,"yyyy-MM-dd")}}},V=H,K=(s("79a3"),Object(u["a"])(V,A,z,!1,null,"0ffe53c8",null)),Q=K.exports,Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom-bar"},[t._m(0),s("div",{staticClass:"bar-item bar-right"},[s("div",{staticClass:"cart",on:{click:t.addToCart}},[t._v("加入购物车")]),s("div",{staticClass:"buy"},[t._v("购买")])])])},tt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bar-item bar-left"},[s("div",[s("i",{staticClass:"icon service"}),s("span",{staticClass:"text"},[t._v("客服")])]),s("div",[s("i",{staticClass:"icon shop"}),s("span",{staticClass:"text"},[t._v("店铺")])]),s("div",[s("i",{staticClass:"icon select"}),s("span",{staticClass:"text"},[t._v("收藏")])])])}],et={name:"DetailBottomBar",methods:{addToCart:function(){this.$emit("addToCart")}}},st=et,it=(s("5125"),Object(u["a"])(st,Z,tt,!1,null,"cdaafffa",null)),nt=it.exports,at=s("5d17"),ot=s("f8c8"),rt=s("6d71");function ct(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}s("b0c0");var lt=s("1bab");function ut(t){return Object(lt["a"])({url:"/detail",params:{iid:t}})}function ft(){return Object(lt["a"])({url:"./recommend"})}var dt=function t(e,s,i){ct(this,t),this.title=e.title,this.desc=e.desc,this.newPrice=e.price,this.oldPrice=e.oldPrice,this.discount=e.discountDesc,this.columns=s,this.services=i,this.realPrice=e.lowNowPrice},ht=function t(e){ct(this,t),this.logo=e.shopLogo,this.name=e.name,this.fans=e.cFans,this.sells=e.cSells,this.score=e.score,this.goodsCount=e.cGoods},mt=function t(e,s){ct(this,t),this.image=e.images?e.images[0]:"",this.infos=e.set,this.sizes=s.tables},pt={name:"Detail",data:function(){return{iid:null,topImages:[],goods:{},shop:{},detailInfo:{},paramsInfo:{},commentInfo:{},recommends:[],themeTopY:[],getThemeTopY:null,isShowBackTop:!1,currentIndex:0}},components:{DetailNavBar:b,DetailSwiper:d,DetailBaseInfo:T,DetailShopInfo:O,DetailGoodsInfo:Y,DetailParamsInfo:G,DetailComment:Q,DetailBottomBar:nt,GoodsList:rt["a"],BackTop:ot["a"],Scroll:at["a"]},created:function(){var t=this;this.iid=this.$route.query.iid,ut(this.iid).then((function(e){var s=e.result;t.topImages=s.itemInfo.topImages,t.goods=new dt(s.itemInfo,s.columns,s.shopInfo.services),t.shop=new ht(s.shopInfo),t.detailInfo=s.detailInfo,t.paramsInfo=new mt(s.itemParams.info,s.itemParams.rule),0!==s.rate.cRate&&(t.commentInfo=s.rate.list[0])})),ft().then((function(e){t.recommends=e.data.list})),this.getThemeTopY=U((function(){t.themeTopY=[],t.themeTopY.push(0),t.themeTopY.push(t.$refs.params.$el.offsetTop-50),t.themeTopY.push(t.$refs.comment.$el.offsetTop-50),t.themeTopY.push(t.$refs.recommends.$el.offsetTop-50),t.themeTopY.push(Number.MAX_VALUE)}))},methods:{titleClick:function(t){this.$refs.scroll.scrollTo(0,-this.themeTopY[t],300)},detailImageLoad:function(){this.getThemeTopY()},contentScroll:function(t){for(var e=-t.y,s=this.themeTopY.length,i=0;i<s-1;i++)this.currentIndex!==i&&e>=this.themeTopY[i]&&e<this.themeTopY[i+1]&&(this.currentIndex=i,this.$refs.nav.currentIndex=this.currentIndex);this.isShowBackTop=-t.y>1e3},backTop:function(){this.$refs.scroll.scrollTo(0,0)},addToCart:function(){var t={};t.image=this.topImages[0],t.title=this.goods.title,t.desc=this.goods.desc,t.price=this.goods.realPrice,t.iid=this.iid,this.$store.dispatch("addCart",t)}}},vt=pt,gt=(s("bea9"),Object(u["a"])(vt,i,n,!1,null,"1fe43e4a",null));e["default"]=gt.exports},f61b:function(t,e,s){},f8c8:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"backtop"})},n=[],a={name:"BackTop"},o=a,r=(s("41f9"),s("2877")),c=Object(r["a"])(o,i,n,!1,null,"46ff70a3",null);e["a"]=c.exports}}]);
//# sourceMappingURL=detail.303c35c8.js.map