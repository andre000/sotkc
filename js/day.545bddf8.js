(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["day"],{"84f7":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"uk-container"},[n("h1",{staticClass:"uk-light"},[t._v("End Day")]),n("transition",{attrs:{name:"route"}},[t.initialized&&!t.lastDay?n("vk-card",[n("p",[t._v(" Current day: "+t._s(t.day))]),n("vk-button",{on:{click:t.nextDay}},[t._v("Go to the next day")])],1):t.lastDay?n("st-results"):n("vk-card",[n("p",[t._v(" The app isn't loaded yet! ")]),n("p",[t._v("\n        Go to the "),n("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.$router.push("/Stocks")}}},[t._v("Stock")]),t._v("\n        page in order to start.\n      ")])])],1)],1)},i=[],s=n("cebc"),c=n("2f62"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vk-card",[n("vk-card-title",[t._v("Results")]),n("p",[t._v("\n    In these "+t._s(t.day)+" days you ended with "+t._s(t._f("currency")(t.funds))+" of the initial of 10.000\n  ")]),n("p",[t._v("\n    That's is a "+t._s(t.modifier)+" of "+t._s(t.percentage)+"\n  ")]),n("vk-button",{on:{click:t.reset}},[t._v(" Start Again ")])],1)},r=[],u={data:function(){return{initial:1e4}},computed:Object(s["a"])({},Object(c["e"])(["day","funds"]),{modifier:function(){return this.funds<this.initial?"decrease":"increase"},percentage:function(){return"".concat(Math.floor(100*(this.funds/this.initial-1)),"%")}}),methods:Object(s["a"])({reset:function(){this.RESET_APP()}},Object(c["d"])(["RESET_APP"]))},l=u,d=n("2877"),_=Object(d["a"])(l,o,r,!1,null,null,null);_.options.__file="CompanyResults.vue";var f=_.exports,p={components:{stResults:f},computed:Object(s["a"])({},Object(c["e"])(["initialized","day","companies"]),Object(c["c"])(["lastDay"])),methods:Object(s["a"])({nextDay:function(){this.INCREMENT_DAY()}},Object(c["d"])(["INCREMENT_DAY","SET_ALERT"]))},v=p,h=Object(d["a"])(v,a,i,!1,null,null,null);h.options.__file="Day.vue";e["default"]=h.exports}}]);
//# sourceMappingURL=day.545bddf8.js.map