(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["save"],{"092e":function(t,e,a){"use strict";var n=a("2eef"),i=a.n(n);i.a},"2eef":function(t,e,a){},f408:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"uk-container"},[a("h1",{staticClass:"uk-light"},[t._v("Save & Load")]),a("vk-card",[a("vk-button",{on:{click:t.save}},[t._v(" Save state ")]),0===t.saved.length?[a("p",[t._v(" You haven't saved anything yet. ")])]:[a("vk-table",{attrs:{data:t.pagedData}},[a("vk-table-column",{attrs:{title:"Day",cell:"day"}}),a("vk-table-column",{attrs:{expanded:"",title:"Funds",cell:"funds"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.cell;return a("span",{},[t._v(t._s(t._f("currency")(n)))])}}])}),a("vk-table-column",{attrs:{expanded:"",title:"Date",cell:"date"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.cell;return a("span",{},[t._v(t._s(t._f("timestampFormat")(n)))])}}])}),a("vk-table-column",{attrs:{cellMiddle:"",title:"Actions"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return a("div",{},[a("vk-icon-button",{directives:[{name:"vk-tooltip",rawName:"v-vk-tooltip",value:"Load",expression:"'Load'"}],staticStyle:{"margin-right":"10px"},attrs:{icon:"pull"},on:{click:function(e){t.loadState(n)}}}),a("vk-icon-button",{directives:[{name:"vk-tooltip",rawName:"v-vk-tooltip",value:"Delete",expression:"'Delete'"}],attrs:{icon:"trash"},on:{click:function(e){t.deleteState(n)}}})],1)}}])})],1),a("vk-pagination",{attrs:{page:t.page,perPage:t.len,total:t.saved.length},on:{"update:page":function(e){t.page=e}}},[a("vk-pagination-page-prev"),a("vk-pagination-pages"),a("vk-pagination-page-next")],1)]],2)],1)},i=[],o=(a("20d6"),a("c93e")),l=(a("cadf"),a("551c"),a("097d"),a("2f62")),s={data:function(){return{page:1,len:5}},computed:Object(o["a"])({},Object(l["e"])(["saved"]),{pagedData:function(){var t=(this.page-1)*this.len,e=this.page*this.len;return this.saved.slice(t,e)}}),methods:Object(o["a"])({deleteState:function(t){var e=this.saved.findIndex(function(e){return e.date===t.date});this.DELETE_SAVED_STATE(e)},loadState:function(t){var e=this.saved.findIndex(function(e){return e.date===t.date});this.LOAD_STATE(e)},save:function(){this.SAVE_STATE()}},Object(l["d"])(["SAVE_STATE","LOAD_STATE","DELETE_SAVED_STATE"])),filters:{timestampFormat:function(t){var e=new Date;return e.setTime(t),"".concat(e.getDate(),"/").concat(e.getMonth(),"/").concat(e.getFullYear())}}},c=s,r=(a("092e"),a("2877")),u=Object(r["a"])(c,n,i,!1,null,null,null);u.options.__file="SaveLoad.vue";e["default"]=u.exports}}]);
//# sourceMappingURL=save.e38f5b54.js.map