(function(t){function e(e){for(var n,r,s=e[0],u=e[1],l=e[2],c=0,f=[];c<s.length;c++)r=s[c],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,r=1;r<o.length;r++){var s=o[r];0!==a[s]&&(n=!1)}n&&(i.splice(e--,1),t=u(u.s=o[0]))}return t}var n={},r={app:0},a={app:0},i=[];function s(t){return u.p+"js/"+({"about~about2":"about~about2",about:"about",about2:"about2"}[t]||t)+"."+{"about~about2":"c90e76a6",about:"ffcfb272",about2:"c4544f55"}[t]+".js"}function u(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.e=function(t){var e=[],o={"about~about2":1,about2:1};r[t]?e.push(r[t]):0!==r[t]&&o[t]&&e.push(r[t]=new Promise((function(e,o){for(var n="css/"+({"about~about2":"about~about2",about:"about",about2:"about2"}[t]||t)+"."+{"about~about2":"77854958",about:"31d6cfe0",about2:"3b3c9ddb"}[t]+".css",a=u.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===n||c===a))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],c=l.getAttribute("data-href");if(c===n||c===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],p.parentNode.removeChild(p),o(i)},p.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){r[t]=0})));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,o){n=a[t]=[e,o]}));e.push(n[2]=i);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=s(t);var f=new Error;l=function(e){c.onerror=c.onload=null,clearTimeout(p);var o=a[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",f.name="ChunkLoadError",f.type=n,f.request=r,o[1](f)}a[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(e)},u.m=t,u.c=n,u.d=function(t,e,o){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(o,n,function(e){return t[e]}.bind(null,n));return o},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var p=c;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{id:"inspire"}},[o("v-navigation-drawer",{attrs:{app:"",color:"primary"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",{attrs:{dense:""}},[o("v-list-item",{attrs:{router:"",to:"/"}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-home")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Halaman 1")])],1)],1),o("v-list-item",{attrs:{router:"",to:"/about"}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-pencil")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Makanan")])],1)],1),o("v-list-item",{attrs:{router:"",to:"/about2"}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-pencil")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Minuman")])],1)],1)],1)],1),o("v-app-bar",{attrs:{app:""}},[o("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),o("v-toolbar-title",[t._v("Application")])],1),o("v-content",[o("router-view")],1)],1)},a=[],i={data:function(){return{drawer:null}}},s=i,u=o("2877"),l=o("6544"),c=o.n(l),f=o("7496"),p=o("40dc"),m=o("5bc1"),d=o("a75b"),v=o("132d"),h=o("8860"),b=o("da13"),g=o("1800"),y=o("5d23"),w=o("f774"),x=o("2a7f"),_=Object(u["a"])(s,r,a,!1,null,null,null),j=_.exports;c()(_,{VApp:f["a"],VAppBar:p["a"],VAppBarNavIcon:m["a"],VContent:d["a"],VIcon:v["a"],VList:h["a"],VListItem:b["a"],VListItemAction:g["a"],VListItemContent:y["a"],VListItemTitle:y["c"],VNavigationDrawer:w["a"],VToolbarTitle:x["a"]});var k=o("9483");Object(k["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});o("d3b7");var C=o("8c4f"),V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:o("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},A=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{"text-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-img",{staticClass:"my-3",attrs:{src:o("9b19"),contain:"",height:"200"}})],1),n("v-flex",{attrs:{"mb-4":""}},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),n("br"),t._v("please join our online "),n("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),n("v-flex",{attrs:{"mb-5":"",xs12:""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),n("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,(function(e,o){return n("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-flex",{attrs:{xs12:"","mb-5":""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),n("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,(function(e,o){return n("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-flex",{attrs:{xs12:"","mb-5":""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),n("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,(function(e,o){return n("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},E=[],L={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},P=L,N=o("a523"),T=o("0e8f"),S=o("adda"),I=o("a722"),M=Object(u["a"])(P,O,E,!1,null,null,null),q=M.exports;c()(M,{VContainer:N["a"],VFlex:T["a"],VImg:S["a"],VLayout:I["a"]});var B={name:"home",components:{HelloWorld:q}},F=B,W=Object(u["a"])(F,V,A,!1,null,null,null),D=W.exports;n["a"].use(C["a"]);var H=[{path:"/",name:"home",component:D},{path:"/about",name:"about",component:function(){return Promise.all([o.e("about~about2"),o.e("about")]).then(o.bind(null,"f820"))}},{path:"/about2",name:"about2",component:function(){return Promise.all([o.e("about~about2"),o.e("about2")]).then(o.bind(null,"a8c9"))}}],$=new C["a"]({mode:"history",base:"/",routes:H}),J=$,K=o("0ff2"),Q=o("f309");n["a"].use(Q["a"]);var U=new Q["a"]({});n["a"].use(K["a"]),n["a"].config.productionTip=!1,new n["a"]({router:J,vuetify:U,render:function(t){return t(j)}}).$mount("#app")},"9b19":function(t,e,o){t.exports=o.p+"img/logo.63a7d78d.svg"},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.1428c84e.js.map