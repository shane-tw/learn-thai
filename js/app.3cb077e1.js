(function(e){function t(t){for(var r,a,c=t[0],u=t[1],l=t[2],s=0,f=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({reference:"reference"}[e]||e)+"."+{"chunk-6e9263ca":"90d959d4","chunk-77431b6e":"6a9b23c3",reference:"51cf9fa5"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-6e9263ca":1,"chunk-77431b6e":1,reference:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({reference:"reference"}[e]||e)+"."+{"chunk-6e9263ca":"1519c902","chunk-77431b6e":"1519c902",reference:"2688f98b"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],s=l.getAttribute("data-href");if(s===r||s===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var d=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("Header"),n("v-content",[n("router-view")],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-navigation-drawer",{attrs:{app:"",fixed:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{dense:"",nav:""}},e._l(e.items,(function(t){return n("v-list-item",{key:t.title,attrs:{to:t.to,link:""}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1),!1!==e.$route.meta.header?n("v-app-bar",{attrs:{app:"",color:"green",dark:"","hide-on-scroll":""},scopedSlots:e._u([e.$route.meta.header_extension?{key:"extension",fn:function(){return[n("router-view",{attrs:{name:"header_extension"}})]},proxy:!0}:null],null,!0)},[e.drawer?e._e():n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-toolbar-title",[e._v(e._s(e.$route.meta.title))])],1):e._e()],1)},c=[],u={name:"Header",data:function(){return{drawer:null,items:[{title:"Reference",icon:"mdi-image",to:"/reference"},{title:"Games",icon:"mdi-view-dashboard",to:"/games"},{title:"About",icon:"mdi-help-box",to:"/about"}]}}},l=u,s=n("2877"),f=n("6544"),d=n.n(f),p=n("40dc"),h=n("5bc1"),m=n("132d"),v=n("8860"),b=n("da13"),g=n("5d23"),y=n("34c3"),w=n("f774"),_=n("2a7f"),x=Object(s["a"])(l,i,c,!1,null,null,null),k=x.exports;d()(x,{VAppBar:p["a"],VAppBarNavIcon:h["a"],VIcon:m["a"],VList:v["a"],VListItem:b["a"],VListItemContent:g["a"],VListItemIcon:y["a"],VListItemTitle:g["b"],VNavigationDrawer:w["a"],VToolbarTitle:_["a"]});var O={name:"App",components:{Header:k}},T=O,j=n("7496"),V=n("a75b"),A=Object(s["a"])(T,a,o,!1,null,null,null),E=A.exports;d()(A,{VApp:j["a"],VContent:V["a"]});n("d3b7");var P=n("8c4f");r["a"].use(P["a"]);var S=[{path:"/",redirect:"/reference"},{path:"/reference",components:{default:function(){return n.e("reference").then(n.bind(null,"3955"))},header_extension:function(){return n.e("reference").then(n.bind(null,"44bb"))}},meta:{title:"Reference",header_extension:!0},children:[{path:"",redirect:"consonants"},{path:"consonants",components:{default:function(){return n.e("reference").then(n.bind(null,"2d2a"))}},meta:{title:"Reference",header_extension:!0}},{path:"vowels",components:{default:function(){return n.e("reference").then(n.bind(null,"817e"))}},meta:{title:"Reference",header_extension:!0}},{path:"tones",components:{default:function(){return n.e("reference").then(n.bind(null,"8965"))}},meta:{title:"Reference",header_extension:!0}},{path:"numbers",components:{default:function(){return n.e("reference").then(n.bind(null,"c623"))}},meta:{title:"Reference",header_extension:!0}}]},{path:"/games",component:function(){return n.e("chunk-77431b6e").then(n.bind(null,"7384"))},meta:{title:"Games"}},{path:"/not-found",component:function(){return n.e("chunk-6e9263ca").then(n.bind(null,"8c65"))},meta:{title:"Not Found"}},{path:"*",redirect:"/not-found"}],L=new P["a"]({base:"/",routes:S,scrollBehavior:function(e,t,n){return n||{x:0,y:0}}}),C=L,I=n("f309");r["a"].use(I["a"]);var N=new I["a"]({}),R=n("2f62");r["a"].use(R["a"]);var B=new R["a"].Store({state:{referenceTab:""},mutations:{setReferenceTab:function(e,t){e.referenceTab=t}}});r["a"].config.productionTip=!1,new r["a"]({router:C,vuetify:N,store:B,render:function(e){return e(E)}}).$mount("#app")}});
//# sourceMappingURL=app.3cb077e1.js.map