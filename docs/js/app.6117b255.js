(function(t){function e(e){for(var a,o,c=e[0],s=e[1],l=e[2],u=0,d=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,o=1;o<r.length;o++){var c=r[o];0!==n[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},o={app:0},n={app:0},i=[];function c(t){return s.p+"js/"+({"cart~detail~home~sort":"cart~detail~home~sort",cart:"cart","detail~home~sort":"detail~home~sort",detail:"detail",home:"home",sort:"sort",user:"user"}[t]||t)+"."+{"cart~detail~home~sort":"d3de93a4",cart:"be64f463","detail~home~sort":"ef207439",detail:"585bb678",home:"bfe694cb",sort:"249d59ca",user:"4b995b0d"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(t){var e=[],r={"cart~detail~home~sort":1,cart:1,"detail~home~sort":1,detail:1,home:1,sort:1,user:1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=new Promise((function(e,r){for(var a="css/"+({"cart~detail~home~sort":"cart~detail~home~sort",cart:"cart","detail~home~sort":"detail~home~sort",detail:"detail",home:"home",sort:"sort",user:"user"}[t]||t)+"."+{"cart~detail~home~sort":"65e9d34d",cart:"eaa09127","detail~home~sort":"763a7a83",detail:"bd4461d1",home:"af648932",sort:"531f27ef",user:"ab04682a"}[t]+".css",n=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===n))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===a||u===n)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var a=e&&e.target&&e.target.src||n,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[t],m.parentNode.removeChild(m),r(i)},m.href=n;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){o[t]=0})));var a=n[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,r){a=n[t]=[e,r]}));e.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var r=n[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,r[1](d)}n[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"1ac0":function(t,e,r){t.exports=r.p+"img/user.da45c2b4.svg"},"1f92":function(t,e,r){t.exports=r.p+"img/cart_active.b12bf874.svg"},"2fe1":function(t,e,r){t.exports=r.p+"img/user_active.1353e733.svg"},"38f5":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("keep-alive",{attrs:{exclude:"Detail"}},[r("router-view")],1),r("main-tab-bar")],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tab-bar",[a("tab-item",{attrs:{path:"/home"}},[a("img",{attrs:{slot:"item-icon",src:r("9443"),alt:""},slot:"item-icon"}),a("img",{attrs:{slot:"item-icon-ac",src:r("b508"),alt:""},slot:"item-icon-ac"}),a("div",{attrs:{slot:"item-test"},slot:"item-test"},[t._v("首页")])]),a("tab-item",{attrs:{path:"/sort"}},[a("img",{attrs:{slot:"item-icon",src:r("bda4"),alt:""},slot:"item-icon"}),a("img",{attrs:{slot:"item-icon-ac",src:r("eeb9"),alt:""},slot:"item-icon-ac"}),a("div",{attrs:{slot:"item-test"},slot:"item-test"},[t._v("分类")])]),a("tab-item",{attrs:{path:"/cart"}},[a("img",{attrs:{slot:"item-icon",src:r("d1c9"),alt:""},slot:"item-icon"}),a("img",{attrs:{slot:"item-icon-ac",src:r("1f92"),alt:""},slot:"item-icon-ac"}),a("div",{attrs:{slot:"item-test"},slot:"item-test"},[t._v("购物车")])]),a("tab-item",{attrs:{path:"/user"}},[a("img",{attrs:{slot:"item-icon",src:r("1ac0"),alt:""},slot:"item-icon"}),a("img",{attrs:{slot:"item-icon-ac",src:r("2fe1"),alt:""},slot:"item-icon-ac"}),a("div",{attrs:{slot:"item-test"},slot:"item-test"},[t._v("我的")])])],1)},c=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"nav"}},[r("div",{staticClass:"tab-bar"},[t._t("default")],2)])},l=[],u={name:"TabBar"},d=u,m=(r("584f"),r("2877")),f=Object(m["a"])(d,s,l,!1,null,"1a868a4c",null),p=f.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tab-item",on:{click:t.itemClick}},[t.isActive?r("div",[t._t("item-icon-ac")],2):r("div",[t._t("item-icon")],2),r("div",{style:t.activeStyle},[t._t("item-test")],2)])},v=[],b=(r("ac1f"),r("5319"),{name:"TabItem",props:{path:String,activeColor:{type:String,default:"red"}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.path)},activeStyle:function(){return this.isActive?{color:this.activeColor}:{}}},methods:{itemClick:function(){this.$router.replace(this.path)}}}),g=b,y=(r("ddfa"),Object(m["a"])(g,h,v,!1,null,"09f3df47",null)),_=y.exports,x={name:"MainTabBar",components:{TabBar:p,TabItem:_}},w=x,O=Object(m["a"])(w,i,c,!1,null,"443c5f32",null),C=O.exports,j={components:{MainTabBar:C}},S=j,k=(r("034f"),Object(m["a"])(S,o,n,!1,null,null,null)),P=k.exports,T=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f"));a["a"].use(T["a"]);var E=T["a"].prototype.replace;T["a"].prototype.replace=function(t){return E.call(this,t).catch((function(t){return t}))};var L,A=function(){return Promise.all([r.e("cart~detail~home~sort"),r.e("detail~home~sort"),r.e("home")]).then(r.bind(null,"1c62"))},B=function(){return Promise.all([r.e("cart~detail~home~sort"),r.e("detail~home~sort"),r.e("sort")]).then(r.bind(null,"0720"))},$=function(){return Promise.all([r.e("cart~detail~home~sort"),r.e("cart")]).then(r.bind(null,"a10a"))},M=function(){return r.e("user").then(r.bind(null,"c760"))},N=function(){return Promise.all([r.e("cart~detail~home~sort"),r.e("detail~home~sort"),r.e("detail")]).then(r.bind(null,"f574"))},D=[{path:"/",redirect:"home"},{path:"/home",name:"Home",component:A},{path:"/sort",name:"Sort",component:B},{path:"/cart",name:"Cart",component:$},{path:"/user",name:"User",component:M},{path:"/detail",name:"Detail",component:N}],I=new T["a"]({mode:"history",base:"/",routes:D}),q=I,H=r("2f62"),J=(r("7db0"),"addCount"),U="addCart",F={addCart:function(t,e){var r=t.state.cartList.find((function(t){return t.iid===e.iid}));r?t.commit(J,r):(e.count=1,t.commit(U,e))}},K=r("ade3"),z=(L={},Object(K["a"])(L,J,(function(t,e){e.count++})),Object(K["a"])(L,U,(function(t,e){e.checked=!0,t.cartList.push(e)})),L),G=(r("4de4"),{cartLength:function(t){return t.cartList.length},cartList:function(t){return t.cartList},cartCount:function(t){return t.cartList.filter((function(t){return t.checked})).length}});a["a"].use(H["a"]);var Q={cartList:[]},R=new H["a"].Store({state:Q,mutations:z,actions:F,getters:G});a["a"].config.productionTip=!1,new a["a"]({router:q,store:R,render:function(t){return t(P)}}).$mount("#app")},"584f":function(t,e,r){"use strict";r("38f5")},"85ec":function(t,e,r){},9443:function(t,e,r){t.exports=r.p+"img/home.c89cd7da.svg"},b508:function(t,e,r){t.exports=r.p+"img/home_active.6b9e60d9.svg"},bda4:function(t,e,r){t.exports=r.p+"img/sort.af1a5237.svg"},d1c9:function(t,e,r){t.exports=r.p+"img/cart.d1be0608.svg"},d6c5:function(t,e,r){},ddfa:function(t,e,r){"use strict";r("d6c5")},eeb9:function(t,e,r){t.exports=r.p+"img/sort_active.8baffa5a.svg"}});
//# sourceMappingURL=app.6117b255.js.map