(function(e){function t(t){for(var a,o,i=t[0],c=t[1],d=t[2],f=0,l=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&l.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(l.length)l.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dtt-aex/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";var a=n("85ec"),s=n.n(a);s.a},"10ef":function(e,t,n){"use strict";var a=n("fa90"),s=n.n(a);s.a},"17ec":function(e,t,n){},"29b9":function(e,t,n){},"34bc":function(e,t,n){},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=r,e.exports=s,s.id="4678"},"64b3":function(e,t,n){"use strict";var a=n("cbae"),s=n.n(a);s.a},"674f":function(e,t,n){"use strict";var a=n("e709"),s=n.n(a);s.a},"85ec":function(e,t,n){},"8b92":function(e,t,n){"use strict";var a=n("29b9"),s=n.n(a);s.a},"95ab":function(e,t,n){},"9dc3":function(e,t,n){"use strict";var a=n("ac8e"),s=n.n(a);s.a},a6e7:function(e,t,n){"use strict";var a=n("95ab"),s=n.n(a);s.a},ac8e:function(e,t,n){},b21f:function(e,t,n){"use strict";var a=n("17ec"),s=n.n(a);s.a},cbae:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Menu",{on:{randomReload:function(t){return e.newRandomClick()}}}),n("router-view",{attrs:{events:e.events,about:e.about,time:e.time,newRandom:e.newRandom}}),n("Footer")],1)},r=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"menu"}},[n("ul",[n("li",[n("router-link",{attrs:{to:"/"}},[e._v("timetable")])],1),n("li",[n("router-link",{attrs:{to:"/archive"}},[e._v("archive")])],1),n("li",{on:{click:function(t){return e.reload()}}},[n("router-link",{attrs:{to:"/random"}},[e._v("random")])],1),n("li",[n("router-link",{attrs:{to:"/add"}},[e._v("+ add event")])],1)])])},i=[],c=a["a"].extend({name:"Menu",data:function(){return{click:!1}},props:{},methods:{reload:function(){this.$emit("randomReload")}}}),d=c,u=(n("10ef"),n("2877")),f=Object(u["a"])(d,o,i,!1,null,"13cf5e4d",null),l=f.exports,m=n("bc3a"),v=n.n(m),b=n("c1df"),p=n.n(b),j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"footer"}},[n("p",[e._v("Sitemap")]),n("nav",e._l(e.$router.options.routes,(function(t){return n("router-link",{key:t.path,attrs:{to:t.path}},[n("p",[e._v("/"+e._s(t.name))])])})),1)])},h=[],_=a["a"].extend({name:"Footer",data:function(){return{}},methods:{}}),y=_,k=(n("64b3"),Object(u["a"])(y,j,h,!1,null,"6da1b32f",null)),g=k.exports,w=a["a"].extend({name:"App",components:{Menu:l,Footer:g},data(){return{about:"",events:[],time:p()().format("YYYYMMDDHHmm"),newRandom:0}},mounted(){var e=this;v.a.get("https://dev.oort.network/new-aex/wp-json/api/main").then(t=>{e.about=t.data.about,e.events=t.data.events}).catch(e=>{console.log(e)}),setInterval(()=>{this.time=p()().format("YYYYMMDDHHmm")},1e3)},methods:{newRandomClick:function(){this.newRandom+=1}}}),D=w,x=(n("034f"),Object(u["a"])(D,s,r,!1,null,null,null)),Y=x.exports,M=n("8c4f"),E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"timetable"}},[e._l(e.events,(function(t,a){return n("div",{key:a,staticClass:"scheduleWrap",attrs:{item:t}},[t.key>=e.todayDateKey?n("div",{staticClass:"schedule"},[n("div",{staticClass:"date"},[e._v(e._s(e.todayDate===t.date?"Today":e.tomorrowDate===t.date?"Tomorrow":t.date))]),e._l(t.posts,(function(t){return n("DataItem",{key:t.id,attrs:{event:t,events:e.events,time:e.time}})}))],2):e._e()])})),n("router-view",{attrs:{event:e.currentItem,events:e.events}})],2)},O=[],z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("RouterLink",{staticClass:"data_item",class:{playing:e.event.dateUnix_start<=e.time&&e.event.dateUnix_end>e.time,ended:e.event.dateUnix_start<e.time&&e.event.dateUnix_end<e.time},attrs:{to:(e.type,"/event/"+e.event.id),type:e.type}},[n("p",{staticClass:"bold"},[e._v(e._s(e._f("truncate")(e.event.name,400,"..")))]),e._v(" "+e._s(e.type)+" "),n("p",{staticClass:"mono"},[e._v(e._s(e.event.time_start)+" CET")]),e.event.initiator?n("p",[e._v("by "+e._s(e._f("truncate")(e.event.initiator,400,"..")))]):e._e(),e.event.image?n("div",{attrs:{id:"container"}},[n("img",{attrs:{src:e.event.image.url}})]):e._e()])},I=[],C=a["a"].extend({name:"DataItem",props:["event","time","type"],filters:{truncate:function(e,t,n){return e.slice(0,t)+(t<e.length?n||"...":"")}}}),R=C,$=(n("a6e7"),Object(u["a"])(R,z,I,!1,null,"624b2118",null)),T=$.exports,S=a["a"].extend({name:"Timetable",data:function(){return{currentItem:{},todayDateKey:p()().format("YYYYMMDD"),todayDate:p()().format("DD-MM-YYYY"),tomorrowDate:p()().add(1,"days").format("DD-MM-YYYY")}},components:{DataItem:T},props:["events","time"],mounted:function(){this.checkCurrentItem()},beforeUpdate:function(){this.checkCurrentItem()},methods:{checkCurrentItem:function(){for(var e=this.events,t=0;t<e.length;t++)for(var n=e[t],a=0;a<n.posts.length;a++){var s=n.posts[a];s.id===parseInt(this.$route.params.id)&&(this.currentItem=s)}}}}),P=S,F=(n("8b92"),Object(u["a"])(P,E,O,!1,null,"b25e7e78",null)),U=F.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.events.length&&null!=e.randomEvent?n("DataItem",{attrs:{event:e.randomEvent,events:e.events,time:e.time}}):e._e()],1)},H=[],K=a["a"].extend({name:"Random",props:["about","events","time","reloadEvent","newRandom"],components:{DataItem:T},data:function(){return{randomEvent:null}},mounted:function(){this.events.length&&this.pickRandomEvent()},watch:{events:function(){this.pickRandomEvent()},newRandom:function(){this.pickRandomEvent()}},methods:{pickRandomEvent:function(){var e=this.$props.events[Math.floor(Math.random()*this.$props.events.length)],t=e.posts[Math.floor(Math.random()*e.posts.length)];this.randomEvent=t}}}),L=K,W=(n("f3b9"),Object(u["a"])(L,A,H,!1,null,"72616076",null)),q=W.exports,G=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},J=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"add"}},[n("iframe",{attrs:{src:"https://dev.oort.network/new-aex/"}})])}],N=a["a"].extend({name:"Add"}),B=N,Q=(n("b21f"),Object(u["a"])(B,G,J,!1,null,"393359dc",null)),V=Q.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"timetable"}},e._l(e.events.slice().reverse(),(function(t,a){return n("div",{key:a,staticClass:"scheduleWrap",attrs:{item:t}},[t.key<e.todayDateKey?n("div",{staticClass:"schedule"},[n("div",{staticClass:"date"},[e._v(e._s(e.todayDate===t.date?"Today":e.tomorrowDate===t.date?"Tomorrow":t.date))]),e._l(t.posts,(function(e){return n("DataItem",{key:e.id,attrs:{event:e}})}))],2):e._e()])})),0)},Z=[],ee=a["a"].extend({name:"Archive",data:function(){return{currentItem:{},todayDateKey:p()().format("YYYYMMDD"),todayDate:p()().format("DD-MM-YYYY"),tomorrowDate:p()().add(1,"days").format("DD-MM-YYYY")}},components:{DataItem:T},props:["events","time"]}),te=ee,ne=(n("674f"),Object(u["a"])(te,X,Z,!1,null,"33bba342",null)),ae=ne.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"popup"}},[n("p",[e._v(e._s(e.event.name))]),n("p",[e._v(e._s(e.event.time_start)+" CET")]),e.event.initiator?n("p",[e._v("by "+e._s(e.event.initiator))]):e._e(),n("p",[e._v("location: "),n("a",{attrs:{target:"_blank",href:e.event.streaming}},[e._v(e._s(e.event.streaming))])]),e.event.donate?n("p",[e._v("donation link: "),n("a",{attrs:{target:"_blank",href:e.event.donate}},[e._v(e._s(e.event.donate))])]):e._e(),e.event.description?n("div",[n("br"),n("div",{domProps:{innerHTML:e._s(e.event.description)}})]):e._e(),n("br"),n("p",[e._v("related events:")]),n("div",{attrs:{id:"relatedWrap"}},[n("br"),e._l(e.relatedEvents,(function(e,t){return n("DataItem",{key:t,staticClass:"related",attrs:{event:e}})}))],2),e.event.image?n("img",{attrs:{src:e.event.image.url}}):e._e(),n("div",{staticClass:"footer"},[n("router-link",{staticClass:"footer_back",attrs:{to:"archive"==e.type?"/archive":"timetable"==e.type?"/":"/random"}},[e._v("back")])],1)])},re=[],oe=a["a"].extend({name:"Popup",props:["event","type","events"],components:{DataItem:T},data:function(){return{relatedEvents:new Array,ready:!1}},mounted:function(){this.events.length&&this.checkForSameInitiator()},beforeUpdate:function(){this.events.length&&this.checkForSameInitiator()},watch:{events:function(){this.checkForSameInitiator()}},methods:{checkForSameInitiator:function(){for(var e=this.event.initiator,t=0,n=new Array,a=0,s=Object.entries(this.events);a<s.length;a++)for(var r=s[a],o=(r[0],r[1]),i=0,c=Object.entries(o["posts"]);i<c.length;i++){var d=c[i],u=(d[0],d[1]);u["initiator"]==e&&u["id"]!=this.event.id&&(t++,window.console.log(e),t<=3&&n.unshift(u))}this.relatedEvents=n,this.ready=!0}}}),ie=oe,ce=(n("9dc3"),Object(u["a"])(ie,se,re,!1,null,"e3b3dd66",null)),de=ce.exports;a["a"].use(M["a"]);var ue=[{path:"/",name:"Timetable",component:U,props:!0,children:[{path:"/event/:id",component:de,props:{type:"timetable"}}]},{path:"/random",name:"Random",component:q,props:!0,children:[{path:"/event/:id",component:de,props:{type:"random"}}]},{path:"/add",name:"Add",component:V,props:!0},{path:"/archive",name:"Archive",component:ae,props:!0,children:[{path:"/event/:id",component:de,props:{type:"archive"}}]}],fe=new M["a"]({routes:ue}),le=fe;a["a"].config.productionTip=!1,new a["a"]({router:le,render:function(e){return e(Y)}}).$mount("#app")},e709:function(e,t,n){},f3b9:function(e,t,n){"use strict";var a=n("34bc"),s=n.n(a);s.a},fa90:function(e,t,n){}});
//# sourceMappingURL=app.010d5511.js.map