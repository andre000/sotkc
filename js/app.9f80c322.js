(function(t){function e(e){for(var a,r,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)r=s[l],o[r]&&f.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({404:"404",day:"day",portfolio:"portfolio",save:"save",stock:"stock"}[t]||t)+"."+{404:"475b8611",day:"545bddf8",portfolio:"c3a38aa4",save:"f2611bf6",stock:"0cba95b8"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={404:1,portfolio:1,stock:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({404:"404",day:"day",portfolio:"portfolio",save:"save",stock:"stock"}[t]||t)+"."+{404:"d83cadce",day:"31d6cfe0",portfolio:"09262a71",save:"31d6cfe0",stock:"8c055d4d"}[t]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.request=a,delete r[t],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){r[t]=0}));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,n){a=o[t]=[e,n]});e.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t),u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,n[1](i)}o[t]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/sotkc/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=n("6d68"),o=n("5320"),i=(n("a977"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("st-navbar",[n("router-link",{attrs:{tag:"li",to:"Portfolio"}},[n("a",[t._v("Portfolio")])]),n("router-link",{attrs:{tag:"li",to:"Stocks"}},[n("a",[t._v("Stocks")])]),n("template",{slot:"right"},[n("router-link",{attrs:{tag:"li",to:"EndDay"}},[n("a",[t._v("End Day")])]),n("router-link",{attrs:{tag:"li",to:"SaveLoad"}},[n("a",[t._v("Save & Load")])])],1)],2),n("div",{staticClass:"uk-section"},[n("transition",{attrs:{name:"route",mode:"out-in",appear:""}},[n("router-view")],1)],1),n("st-float"),n("transition",{attrs:{name:"alert",appear:""}},[t.alert?n("div",{staticClass:"st-alert"},[n("div",{class:t.alert.class,attrs:{"uk-alert":""}},[n("a",{staticClass:"uk-alert-close",attrs:{"uk-close":""}}),t._v("\n          "+t._s(t.alert.message)+"\n      ")])]):t._e()])],1)}),s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("vk-navbar",{staticClass:"uk-light",attrs:{transparent:""}},[t.size>426?n("vk-navbar-nav",{attrs:{slot:"center-left"},slot:"center-left"},[t._t("default")],2):t._e(),n("vk-navbar-logo",{staticClass:"nav-logo",attrs:{slot:"center"},on:{click:function(e){t.$router.push("/")}},slot:"center"},[t._v("sotkc.io\n    ")]),t.size>426?n("vk-navbar-nav",{attrs:{slot:"center-right"},slot:"center-right"},[t._t("right")],2):t._e()],1),t.size<=426?n("div",{staticClass:"responsive-menu"},[n("vk-navbar-nav",{attrs:{slot:"center-left"},slot:"center-left"},[t._t("default")],2),n("vk-navbar-nav",{attrs:{slot:"center-right"},slot:"center-right"},[t._t("right")],2)],1):t._e()],1)},u=[],l={data:function(){return{size:null}},created:function(){var t=this;this.size=screen.width,window.addEventListener("resize",function(){t.size=screen.width})}},f=l,d=(n("8f88"),n("ced9"),n("2877")),p=Object(d["a"])(f,c,u,!1,null,"95f671d2",null);p.options.__file="Navbar.vue";var v=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vk-card",{staticClass:"st-float",class:{active:t.active},on:{touchstart:t.handleTouch}},[n("ul",{staticClass:"uk-list"},[n("li",[n("b",[t._v("Funds:")]),t._v(" "+t._s(t._f("currency")(t.funds)))]),n("li",[n("b",[t._v("Day:")]),t._v(" "+t._s(t.day))])]),n("div",[n("vk-button",{attrs:{disabled:!t.initialized,type:"secondary"},on:{click:t.next}},[t._v("\n      "+t._s(t.lastDay?"See Results":"Next Day")+"\n    ")])],1)])},h=[],b=n("cebc"),y=n("2f62"),g={data:function(){return{active:!1}},computed:Object(b["a"])({},Object(y["e"])(["funds","day","initialized"]),Object(y["c"])(["lastDay"])),methods:Object(b["a"])({next:function(){this.lastDay?this.$router.push("/EndDay"):this.INCREMENT_DAY()}},Object(y["d"])(["INCREMENT_DAY"]),{handleTouch:function(){this.active=!this.active}})},_=g,k=(n("ed2b"),Object(d["a"])(_,m,h,!1,null,"e9fe86ee",null));k.options.__file="Float.vue";var E=k.exports,S={components:{stNavbar:v,stFloat:E},computed:Object(y["e"])(["alert"])},T=S,x=(n("034f"),Object(d["a"])(T,i,s,!1,null,null,null));x.options.__file="App.vue";var O=x.exports,w=n("8c4f"),j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"uk-container uk-text-center"},[a("img",{attrs:{alt:"Vue logo",src:n("d092")}}),a("div",{staticClass:"uk-section"},[a("div",{staticClass:"uk-container uk-text-center"},[a("p",{staticClass:"uk-text-lead uk-light"},[t._v("\n        An project made to complete the Vue.js course on udemy.com\n      ")])])])])}],A={name:"home"},P=A,D=Object(d["a"])(P,j,C,!1,null,"dd302fc6",null);D.options.__file="Home.vue";var N=D.exports;a["a"].use(w["a"]);var z=new w["a"]({base:"/sotkc/",routes:[{path:"/",name:"home",component:N},{path:"/Stocks",name:"stock",component:function(){return n.e("stock").then(n.bind(null,"68e3"))}},{path:"/Portfolio",name:"portfolio",component:function(){return n.e("portfolio").then(n.bind(null,"c9e5"))}},{path:"/EndDay",name:"day",component:function(){return n.e("day").then(n.bind(null,"84f7"))}},{path:"/SaveLoad",name:"save",component:function(){return n.e("save").then(n.bind(null,"f408"))}},{path:"*",name:"not_found",component:function(){return n.e("404").then(n.bind(null,"8cdb"))}}]}),L=(n("c5f6"),n("795b")),R=n.n(L),q=(n("ac6a"),n("5df3"),n("96cf"),n("3b8d")),M=n("75fc"),I=n("0a0d"),$=n.n(I),Y=n("a8db"),B=(n("7514"),n("e814")),F=n.n(B),V=(n("20d6"),n("bc3a")),J=n.n(V);a["a"].use(y["a"]);var K=new y["a"].Store({state:{initialized:!1,companies:[],portfolio:[],day:0,funds:0,alert:null,type:"infocus",optionType:["infocus","mostactive","gainers","losers","iexvolume","iexpercent"],saved:[]},mutations:{SET_COMPANIES:function(t,e){t.companies=e},START_APP:function(t){t.initialized=!0,t.funds=1e4},SET_ALERT:function(t,e){t.alert=e,setTimeout(function(){t.alert=null},5e3)},BUY_STOCK:function(t,e){var n=t.portfolio.findIndex(function(t){return t.symbol===e.symbol});n>=0?t.portfolio[n].quantity+=F()(e.quantity,10):t.portfolio.push({symbol:e.symbol,quantity:F()(e.quantity,10)}),t.funds-=e.price*e.quantity},SELL_STOCK:function(t,e){var n=t.portfolio.findIndex(function(t){return t.symbol===e.symbol}),a=t.companies.find(function(t){return t.symbol===e.symbol});t.portfolio[n].quantity-=F()(e.quantity,10),t.funds+=a.prices[t.day]*e.quantity,t.portfolio[n].quantity<=0&&t.portfolio.splice(n,1)},INCREMENT_DAY:function(t){t.lastDay||(t.day+=1)},RESET_APP:function(t){t.initialized=!1,t.companies=[],t.portfolio=[],t.day=0,t.funds=0,t.alert=null},SET_TYPE:function(t,e){t.type=e},SAVE_STATE:function(t){t.saved;var e=Object(Y["a"])(t,["saved"]);e.date=$()(),t.saved.push(e)},LOAD_STATE:function(t,e){var n=t.saved[e],a=n.initialized,r=n.companies,o=n.portfolio,i=n.day,s=n.funds,c=n.alert;t.initialized=a,t.companies=Object(M["a"])(r),t.portfolio=Object(M["a"])(o),t.day=i,t.funds=s,t.alert=c},DELETE_SAVED_STATE:function(t,e){t.saved.splice(e,1)}},getters:{lastDay:function(t){return 0!==t.companies.length&&(!!t.companies[0].prices&&t.day+1===t.companies[0].prices.length)}},actions:{loadCompanies:function(){var t=Object(q["a"])(regeneratorRuntime.mark(function t(e){var n,a,r,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,a=e.state,t.next=3,J.a.get("https://api.iextrading.com/1.0/stock/market/list/".concat(a.type));case 3:if(r=t.sent,0!==r.data.length){t.next=6;break}return t.abrupt("return",!1);case 6:return o=r.data.map(function(t){return{name:t.companyName,symbol:t.symbol,logo:"https://storage.googleapis.com/iex/api/logos/".concat(t.symbol,".png")}}),t.abrupt("return",n("SET_COMPANIES",o));case 8:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),loadPrices:function(){var t=Object(q["a"])(regeneratorRuntime.mark(function t(e){var n,a,r,o,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.commit,a=e.state,0!==a.companies.length){t.next=3;break}return t.abrupt("return",!1);case 3:return r=a.companies.reduce(function(t,e){var n=J.a.get("https://api.iextrading.com/1.0/stock/".concat(e.symbol,"/chart/1m"));return t.push(n),t},[]),t.next=6,R.a.all(r);case 6:return o=t.sent,i=a.companies.map(function(t,e){var n=o[e].data;return t.prices=n.map(function(t){return Number(t.close).toFixed(2)}),t}),n("SET_COMPANIES",i),t.abrupt("return",n("START_APP"));case 10:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}});a["a"].config.productionTip=!1,a["a"].use(r["a"]),a["a"].use(o["a"]),a["a"].filter("currency",function(t){var e=t||0;return e.toLocaleString({style:"currency",currency:"USD",minimumSignificantDigits:2})}),new a["a"]({router:z,store:K,render:function(t){return t(O)}}).$mount("#app")},"64a9":function(t,e,n){},"86b2":function(t,e,n){},"8afb":function(t,e,n){},"8f88":function(t,e,n){"use strict";var a=n("8afb"),r=n.n(a);r.a},b059:function(t,e,n){},ced9:function(t,e,n){"use strict";var a=n("86b2"),r=n.n(a);r.a},d092:function(t,e,n){t.exports=n.p+"img/logo3.218d299b.png"},ed2b:function(t,e,n){"use strict";var a=n("b059"),r=n.n(a);r.a}});
//# sourceMappingURL=app.9f80c322.js.map