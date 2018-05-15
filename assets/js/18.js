webpackJsonp([18],{678:function(t,e,i){i(724);var a=i(1)(i(720),i(727),"data-v-911e8b86",null);t.exports=a.exports},720:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(10);e.default={components:{Modal:a.a},props:{visible:Boolean,object:Object,type:String},data:function(){return{editing:!1,action:"",pageTitle:"",errorMsg:null,filename:""}},methods:{addPageValidator:function(){return""===this.pageTitle||(""===this.widgetCategory||!this.filename.endsWith(".yml"))},createPage:function(){if(this.filename.endsWith(".yml")){if(""===this.pageTitle)return this.errorMsg="Widget name must not be empty",!0;if(""===this.widgetCategory)return this.errorMsg="Widget category must not be empty",!0;this.errorMsg=null;var t=this.object.original.Path+this.object.original.Name+"/";this.object.original.Root&&(t="");var e={folder:t,filename:this.filename,headers:{title:this.pageTitle,category:this.widgetCategory}};this.pageTitle="",this.widgetCategory="",this.filename="",this.$emit("createWidget",e)}else this.errorMsg="Filename must ends with .yml"},validateFilename:function(){return!1},validateTitle:function(){return!0},widgetCategory:function(){return!0},checkAction:function(t,e){return t===e},isInEdit:function(){return!0===this.editing},isDir:function(){return!!this.object&&"Dir"===this.object.subtype},isFile:function(){return!!this.object&&"File"===this.object.subtype},cancel:function(){!0===this.editing?this.editing=!1:this.close()},close:function(){this.$emit("close")},edit:function(t){this.$emit("editObj",t)},addPage:function(){this.action="AddPage",this.editing=!0},addFolder:function(){this.action="AddFolder",this.editing=!0}}}},722:function(t,e,i){e=t.exports=i(676)(),e.push([t.i,".box[data-v-911e8b86]{min-height:400px}.btnNoPad[data-v-911e8b86]{width:29%}.btn[data-v-911e8b86]{width:29%;margin:30px}.rightfloat[data-v-911e8b86]{float:right}","",{version:3,sources:["/data/serverless-cms-admin/client/views/design/modals/InfoModalWidget.vue"],names:[],mappings:"AACA,sBACE,gBAAkB,CACnB,AACD,2BACE,SAAW,CACZ,AACD,sBACE,UAAW,AACX,WAAY,CACb,AACD,6BACE,WAAa,CACd",file:"InfoModalWidget.vue",sourcesContent:["\n.box[data-v-911e8b86] {\n  min-height: 400px;\n}\n.btnNoPad[data-v-911e8b86] {\n  width: 29%;\n}\n.btn[data-v-911e8b86] {\n  width: 29%;\n  margin:30px;\n}\n.rightfloat[data-v-911e8b86] {\n  float: right;\n}\n\n"],sourceRoot:""}])},724:function(t,e,i){var a=i(722);"string"==typeof a&&(a=[[t.i,a,""]]);i(677)(a,{});a.locals&&(t.exports=a.locals)},727:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("modal",{attrs:{visible:t.visible},on:{close:t.close}},[i("div",{staticClass:"box"},[i("article",{staticClass:"media"},[i("div",{staticClass:"media-content"},[i("button",{staticClass:"btnNoPad rightfloat",on:{click:t.cancel}},[t._v("Cancel")]),t._v(" "),i("div",{staticClass:"content"},[t.editing?i("div",[t.checkAction(t.action,"AddPage")?i("div",[i("article",{staticClass:"tile is-child box"},[i("label",{staticClass:"label"},[t._v("Widget Name")]),t._v(" "),i("div",{staticClass:"field has-addons"},[i("p",{staticClass:"control is-expanded"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.pageTitle,expression:"pageTitle"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter widget short name"},domProps:{value:t.pageTitle},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.validateTitle()},input:function(e){e.target.composing||(t.pageTitle=e.target.value)}}})])]),t._v(" "),i("label",{staticClass:"label"},[t._v("Widget Category")]),t._v(" "),i("div",{staticClass:"field has-addons"},[i("p",{staticClass:"control is-expanded"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.widgetCategory,expression:"widgetCategory"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter widget category"},domProps:{value:t.widgetCategory},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.validateCategory()},input:function(e){e.target.composing||(t.widgetCategory=e.target.value)}}})])]),t._v(" "),i("label",{staticClass:"label"},[t._v("File name "),i("i",[t._v("(must ends with .yml)")])]),t._v(" "),i("div",{staticClass:"field has-addons"},[i("p",{staticClass:"control is-expanded"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.filename,expression:"filename"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter .yml file name here"},domProps:{value:t.filename},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.validateFilename()},input:function(e){e.target.composing||(t.filename=e.target.value)}}})])]),t._v(" "),i("p",{staticClass:"control"},[i("a",{staticClass:"button rightfloat is-primary",attrs:{disabled:t.addPageValidator()},on:{click:function(e){t.createPage()}}},[i("span",[t._v("Create widget")])])])])]):t._e(),t._v(" "),t.checkAction(t.action,"AddFolder")?i("div",[t._v("\n                Adding foler\n              ")]):t._e()]):t._e(),t._v(" "),t.editing?t._e():i("div",[t.isDir(t.object)?i("div",[i("p",[i("strong",[t._v("Selected Directory: "+t._s(t.object.key))]),t._v(" "),i("br"),t._v("Type : "+t._s(t.type)+"\n                "),i("br"),t._v("Select one of the operation below."),i("br")])]):t._e(),t._v(" "),t.isFile(t.object)?i("div",[i("p",[i("strong",[t._v("File "+t._s(t.object.key))]),t._v("\n                Path: "+t._s(t.object.original.Path)+"\n                "),i("br"),t._v("Type is "+t._s(t.type)+"\n              ")])]):t._e()])]),t._v(" "),t.editing?t._e():i("div",{staticClass:"buttons"},[t.isDir(t.object)?i("div",[i("button",{staticClass:"btn",on:{click:t.addPage}},[t._v("Add Widget")]),t._v(" "),i("button",{staticClass:"btn",on:{click:t.addFolder}},[t._v("Add Widget Folder")]),t._v(" "),i("br"),t._v(" "),i("br"),t._v(" "),i("button",{staticClass:"btn",attrs:{title:"Not yet implemented",disabled:""}},[t._v("Delete Widget Folder")])]):t._e(),t._v(" "),t.isFile(t.object)?i("div",[i("button",{staticClass:"btn right",on:{click:function(e){t.edit(t.object)}}},[t._v("Edit")]),t._v(" "),i("br"),t._v(" "),i("br"),t._v(" "),i("button",{staticClass:"btn",attrs:{title:"Not yet implemented",disabled:""}},[t._v("Delete Widget")]),t._v(" "),i("button",{staticClass:"btn",attrs:{title:"Not yet implemented",disabled:""}},[t._v("Copy Widget")])]):t._e()])])])])])},staticRenderFns:[]}}});