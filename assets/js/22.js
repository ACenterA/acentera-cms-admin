webpackJsonp([22],{685:function(e,n,t){t(747);var i=t(1)(t(734),t(756),"data-v-25ea5b92",null);e.exports=i.exports},734:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(10);n.default={components:{Modal:i.a},props:{domain:String,visible:Boolean,title:String,info:String,error:String},methods:{close:function(){this.$emit("close")},confirmed:function(){this.$emit("confirmed")}}}},739:function(e,n,t){n=e.exports=t(676)(),n.push([e.i,".is-danger[data-v-25ea5b92]{background-color:#ff3860;border-radius:3px 3px 0 0;color:#fff;font-size:1.25em;line-height:1.25;padding:.5em .75em}.float-right[data-v-25ea5b92]{float:right}.right-m[data-v-25ea5b92]{margin-right:30px}","",{version:3,sources:["/data/serverless-cms-admin/client/views/admin/modals/ConfirmTxtModal.vue"],names:[],mappings:"AACA,4BACE,yBAA0B,AAC1B,0BAA2B,AAC3B,WAAe,AACf,iBAAkB,AAClB,iBAAkB,AAClB,kBAAsB,CACvB,AACD,8BACE,WAAa,CACd,AACD,0BACE,iBAAmB,CACpB",file:"ConfirmTxtModal.vue",sourcesContent:["\n.is-danger[data-v-25ea5b92] {\n  background-color: #ff3860;\n  border-radius: 3px 3px 0 0;\n  color: #ffffff;\n  font-size: 1.25em;\n  line-height: 1.25;\n  padding: 0.5em 0.75em;\n}\n.float-right[data-v-25ea5b92] {\n  float: right;\n}\n.right-m[data-v-25ea5b92] {\n  margin-right: 30px;\n}\n"],sourceRoot:""}])},747:function(e,n,t){var i=t(739);"string"==typeof i&&(i=[[e.i,i,""]]);t(677)(i,{});i.locals&&(e.exports=i.locals)},756:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("modal",{attrs:{visible:e.visible},on:{close:e.close}},[t("div",{staticClass:"box"},[t("article",{staticClass:"media"},[t("div",{staticClass:"media-content"},[t("div",{staticClass:"content"},[t("p",[e._v("\n            We have to validate that you own the following domain name:\n            "),t("br"),t("br"),e._v(" "),t("b",[e._v(e._s(e.domain))]),e._v(" "),t("br"),e._v(" "),t("br"),e._v("\n            We require a TXT DNS record on your current DNS provider.\n            "),t("br"),e._v(" "),t("br"),e._v("\n            Create the following TXT record on "),t("b",[e._v(e._s(e.domain))]),t("br"),t("br"),e._v(" "),t("strong",[e._v("acentera-websites      TXT         "+e._s(e.info))]),e._v(" "),t("br"),e._v(" "),t("i",[e._v("Note: it may takes few hours depending on your current configuration")])]),e.error?t("div",{staticClass:"is-danger"},[e._v("\n              "+e._s(e.error)+"\n            ")]):e._e(),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("a",{staticClass:"button is-primary float-right",on:{click:e.confirmed}},[t("span",[e._v("Validate")]),e._v(" "),t("span",{staticClass:"icon"})]),e._v(" "),t("a",{staticClass:"button is-warning float-right right-m",on:{click:e.close}},[t("span",[e._v("Cancel")])]),e._v(" "),t("p")])])])])])},staticRenderFns:[]}}});