webpackJsonp([1],{"3mXS":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",{attrs:{id:"header"}},[e("div",{staticClass:"content",style:{backgroundColor:this.ColorSet.bgColor}},[e("h1",{style:{color:this.ColorSet.txtColor}},[this._v("ゆき的补番列表(๑╹ω╹๑ )")])])])},staticRenderFns:[]},s=n("VU/8")({data:function(){return{}},props:["ColorSet"]},i,!1,null,null,null).exports;n("gTRQ");var r={data:function(){return{img_src:"",setColor:{bgColor:"",txtColor:""}}},mounted:function(){this.getPixivBackground()},methods:{getPixivBackground:function(){var t=this;this.axios.get("./static/api/pixiv").then(function(e){var n=e.data,a=n[Math.floor(Math.random()*n.length)];t.img_src=a.img_src,t.$nextTick(function(){t.setHeaderColor()})})},setHeaderColor:function(){var t=document.querySelector(".hidden-image"),e=this,n=new Image;n.src=t.getAttribute("src"),n.onload=function(){RGBaster.colors(t,{paletteSize:50,exclude:["rgb(255,255,255)","rgb(0,0,0)"],success:function(t){e.setColor.bgColor=t.dominant;var n=t.dominant.match(/\d+/g);.299*n[0]+.587*n[1]+.114*n[2]>=192?(e.setColor.txtColor="#333",e.$emit("sendColor",e.setColor)):(e.setColor.txtColor="#fff",e.$emit("sendColor",e.setColor))}})}}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"banner"},[e("div",{staticClass:"card-text"}),this._v(" "),e("div",{staticClass:"banner-image",style:{backgroundImage:"url("+this.img_src+")"}}),this._v(" "),e("img",{staticClass:"hidden-image",attrs:{src:this.img_src,alt:""}})])},staticRenderFns:[]},c={data:function(){return{ColorObj:{}}},components:{mainHeader:s,banner:n("VU/8")(r,o,!1,null,null,null).exports},mounted:function(){},methods:{setColor:function(t){this.ColorObj=t}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("mainHeader",{attrs:{ColorSet:this.ColorObj}}),this._v(" "),e("banner",{on:{sendColor:this.setColor}}),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var u=n("VU/8")(c,l,!1,function(t){n("3mXS")},null,null).exports,d=n("/ocq"),m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-list"},t._l(t.listArray,function(e,a){return n("div",{key:a,staticClass:"item"},[n("div",{staticClass:"content"},[n("div",{staticClass:"embed-responsive",on:{click:function(e){t.showTips(a)}}},[n("div",{staticClass:"cover"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img_src,expression:"item.img_src"}],attrs:{alt:""}})])]),t._v(" "),n("div",{staticClass:"info"},[n("h3",{staticClass:"title"},[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.showTips(a)}}},[t._v(t._s(e.name)),n("i")])]),t._v(" "),n("div",{staticClass:"stat"},[n("div",{staticClass:"top"},[n("a",{staticClass:"detail",attrs:{href:e.link,target:"_blank"}},[t._v("查看详情")]),t._v(" "),n("i",{class:[e.is_finished?"checked":""]})]),t._v(" "),n("a",{staticClass:"watch_link",attrs:{href:e.watch_link,target:"_blank"}},[t._v("补番通道")])])]),t._v(" "),n("div",{staticClass:"card-reveal",class:{active:e.active}},[n("a",{staticClass:"close",attrs:{href:"javascript:;"},on:{click:function(e){t.hideTips(a)}}}),t._v(" "),n("h3",{staticClass:"reveal-title"},[t._v("\n                    "+t._s(e.name)+"\n                ")]),t._v(" "),n("p",[t._v("\n                  "+t._s(e.caption)+"  \n                ")]),t._v(" "),e.is_finished?n("div",{staticClass:"reveal-mark"},[t._v("\n                    已补完"),n("i")]):t._e()])])])}))},staticRenderFns:[]},v={components:{List:n("VU/8")({data:function(){return{revealShow:!1,listArray:[]}},created:function(){},mounted:function(){this.getList()},methods:{getList:function(){var t=this;this.axios.get("./static/api/list").then(function(e){for(var n=e.data.list,a=0,i=n.length;a<i;a++){var s=n[a].name,r=n[a].caption,o=n[a].img_src,c=n[a].link,l=n[a].watch_link,u=n[a].time,d=n[a].is_finished;t.listArray.push({name:s,caption:r,img_src:o,link:c,watch_link:l,time:u,is_finished:d,active:!1})}})},showTips:function(t){this.listArray[t].active=!0},hideTips:function(t){this.listArray[t].active=!1}}},m,!1,null,null,null).exports}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"main"}},[e("div",{staticClass:"container"},[e("List")],1)])},staticRenderFns:[]},f=n("VU/8")(v,h,!1,null,null,null).exports;a.a.use(d.a);var p=new d.a({routes:[{path:"/",name:"home",component:f}]}),g=n("mtWM"),_=n.n(g),C=n("cTzj"),x=n.n(C);a.a.config.productionTip=!1,a.a.prototype.axios=_.a,a.a.use(x.a,{preLoad:1.3,error:"./static/images/loaderror.png",loading:"./static/images/lazyload.png",attempt:1}),new a.a({el:"#app",router:p,components:{App:u},template:"<App/>"})},gTRQ:function(t,e){!function(t,e){"use strict";var n=function(t,e){var n=new Image,a=t.src||t;"data:"!==a.substring(0,5)&&(n.crossOrigin="Anonymous"),n.onload=function(){var t=document.createElement("canvas").getContext("2d");t.drawImage(n,0,0);var a=t.getImageData(0,0,n.width,n.height);e&&e(a.data)},n.src=a},a=function(t){return["rgb(",t,")"].join("")},i={};i.colors=function(t,e){var i=(e=e||{}).exclude||[],s=e.paletteSize||10;n(t,function(n){for(var r=t.width*t.height||n.length,o={},c="",l=[],u={dominant:{name:"",count:0},palette:Array.apply(null,new Array(s)).map(Boolean).map(function(t){return{name:"0,0,0",count:0}})},d=0;d<r;){if(l[0]=n[d],l[1]=n[d+1],l[2]=n[d+2],o[c=l.join(",")]=c in o?o[c]+1:1,-1===i.indexOf(a(c))){var m=o[c];m>u.dominant.count?(u.dominant.name=c,u.dominant.count=m):u.palette.some(function(t){if(m>t.count)return t.name=c,t.count=m,!0})}d+=20}if(e.success){var v=function(t){return t.map(function(t){return a(t.name)})}(u.palette);e.success({dominant:a(u.dominant.name),secondary:v[0],palette:v})}})},t.RGBaster=t.RGBaster||i}(window),t.exports=RGBaster}},["NHnr"]);
//# sourceMappingURL=app.4ed03507cacb3eb4e39a.js.map