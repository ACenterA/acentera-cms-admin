webpackJsonp([33],{688:function(t,s,e){var i=e(1)(e(737),e(755),null,null);t.exports=i.exports},737:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(10);s.default={components:{Modal:i.a},props:{visible:Boolean,title:String,info:String},methods:{close:function(){this.$emit("close")},confirmed:function(){this.$emit("confirmed")}}}},755:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("modal",{attrs:{visible:t.visible},on:{close:t.close}},[e("div",{staticClass:"box"},[e("article",{staticClass:"media"},[e("div",{staticClass:"media-content"},[e("div",{staticClass:"content"},[e("p",[e("strong",[t._v(t._s(t.title))]),t._v(" "),e("br"),t._v(" "),e("a",{staticClass:"button is-danger",on:{click:t.confirmed}},[e("span",[t._v("Delete")]),t._v(" "),e("span",{staticClass:"icon"},[e("i",{staticClass:"fa fa-times"})])])])])])])])])},staticRenderFns:[]}}});