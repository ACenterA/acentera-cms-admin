webpackJsonp([2,18],{678:function(t,e,i){i(724);var n=i(1)(i(720),i(727),"data-v-911e8b86",null);t.exports=n.exports},706:function(t,e,i){i(842);var n=i(1)(i(783),i(870),"data-v-d7960548",null);t.exports=n.exports},716:function(t,e,i){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,i,s){e=e||"&",i=i||"=";var o={};if("string"!=typeof t||0===t.length)return o;var r=/\+/g;t=t.split(e);var l=1e3;s&&"number"==typeof s.maxKeys&&(l=s.maxKeys);var c=t.length;l>0&&c>l&&(c=l);for(var d=0;d<c;++d){var u,h,p,f,g=t[d].replace(r,"%20"),v=g.indexOf(i);v>=0?(u=g.substr(0,v),h=g.substr(v+1)):(u=g,h=""),p=decodeURIComponent(u),f=decodeURIComponent(h),n(o,p)?a(o[p])?o[p].push(f):o[p]=[o[p],f]:o[p]=f}return o};var a=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},717:function(t,e,i){"use strict";function n(t,e){if(t.map)return t.map(e);for(var i=[],n=0;n<t.length;n++)i.push(e(t[n],n));return i}var a=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,i,r){return e=e||"&",i=i||"=",null===t&&(t=void 0),"object"==typeof t?n(o(t),function(o){var r=encodeURIComponent(a(o))+i;return s(t[o])?n(t[o],function(t){return r+encodeURIComponent(a(t))}).join(e):r+encodeURIComponent(a(t[o]))}).join(e):r?encodeURIComponent(a(r))+i+encodeURIComponent(a(t)):""};var s=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},o=Object.keys||function(t){var e=[];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.push(i);return e}},718:function(t,e,i){"use strict";e.decode=e.parse=i(716),e.encode=e.stringify=i(717)},720:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(10);e.default={components:{Modal:n.a},props:{visible:Boolean,object:Object,type:String},data:function(){return{editing:!1,action:"",pageTitle:"",errorMsg:null,filename:""}},methods:{addPageValidator:function(){return""===this.pageTitle||(""===this.widgetCategory||!this.filename.endsWith(".yml"))},createPage:function(){if(this.filename.endsWith(".yml")){if(""===this.pageTitle)return this.errorMsg="Widget name must not be empty",!0;if(""===this.widgetCategory)return this.errorMsg="Widget category must not be empty",!0;this.errorMsg=null;var t=this.object.original.Path+this.object.original.Name+"/";this.object.original.Root&&(t="");var e={folder:t,filename:this.filename,headers:{title:this.pageTitle,category:this.widgetCategory}};this.pageTitle="",this.widgetCategory="",this.filename="",this.$emit("createWidget",e)}else this.errorMsg="Filename must ends with .yml"},validateFilename:function(){return!1},validateTitle:function(){return!0},widgetCategory:function(){return!0},checkAction:function(t,e){return t===e},isInEdit:function(){return!0===this.editing},isDir:function(){return!!this.object&&"Dir"===this.object.subtype},isFile:function(){return!!this.object&&"File"===this.object.subtype},cancel:function(){!0===this.editing?this.editing=!1:this.close()},close:function(){this.$emit("close")},edit:function(t){this.$emit("editObj",t)},addPage:function(){this.action="AddPage",this.editing=!0},addFolder:function(){this.action="AddFolder",this.editing=!0}}}},722:function(t,e,i){e=t.exports=i(676)(),e.push([t.i,".box[data-v-911e8b86]{min-height:400px}.btnNoPad[data-v-911e8b86]{width:29%}.btn[data-v-911e8b86]{width:29%;margin:30px}.rightfloat[data-v-911e8b86]{float:right}","",{version:3,sources:["/data/serverless-cms-admin/client/views/design/modals/InfoModalWidget.vue"],names:[],mappings:"AACA,sBACE,gBAAkB,CACnB,AACD,2BACE,SAAW,CACZ,AACD,sBACE,UAAW,AACX,WAAY,CACb,AACD,6BACE,WAAa,CACd",file:"InfoModalWidget.vue",sourcesContent:["\n.box[data-v-911e8b86] {\n  min-height: 400px;\n}\n.btnNoPad[data-v-911e8b86] {\n  width: 29%;\n}\n.btn[data-v-911e8b86] {\n  width: 29%;\n  margin:30px;\n}\n.rightfloat[data-v-911e8b86] {\n  float: right;\n}\n\n"],sourceRoot:""}])},724:function(t,e,i){var n=i(722);"string"==typeof n&&(n=[[t.i,n,""]]);i(677)(n,{});n.locals&&(t.exports=n.locals)},727:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("modal",{attrs:{visible:t.visible},on:{close:t.close}},[i("div",{staticClass:"box"},[i("article",{staticClass:"media"},[i("div",{staticClass:"media-content"},[i("button",{staticClass:"btnNoPad rightfloat",on:{click:t.cancel}},[t._v("Cancel")]),t._v(" "),i("div",{staticClass:"content"},[t.editing?i("div",[t.checkAction(t.action,"AddPage")?i("div",[i("article",{staticClass:"tile is-child box"},[i("label",{staticClass:"label"},[t._v("Widget Name")]),t._v(" "),i("div",{staticClass:"field has-addons"},[i("p",{staticClass:"control is-expanded"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.pageTitle,expression:"pageTitle"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter widget short name"},domProps:{value:t.pageTitle},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.validateTitle()},input:function(e){e.target.composing||(t.pageTitle=e.target.value)}}})])]),t._v(" "),i("label",{staticClass:"label"},[t._v("Widget Category")]),t._v(" "),i("div",{staticClass:"field has-addons"},[i("p",{staticClass:"control is-expanded"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.widgetCategory,expression:"widgetCategory"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter widget category"},domProps:{value:t.widgetCategory},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.validateCategory()},input:function(e){e.target.composing||(t.widgetCategory=e.target.value)}}})])]),t._v(" "),i("label",{staticClass:"label"},[t._v("File name "),i("i",[t._v("(must ends with .yml)")])]),t._v(" "),i("div",{staticClass:"field has-addons"},[i("p",{staticClass:"control is-expanded"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.filename,expression:"filename"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter .yml file name here"},domProps:{value:t.filename},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.validateFilename()},input:function(e){e.target.composing||(t.filename=e.target.value)}}})])]),t._v(" "),i("p",{staticClass:"control"},[i("a",{staticClass:"button rightfloat is-primary",attrs:{disabled:t.addPageValidator()},on:{click:function(e){t.createPage()}}},[i("span",[t._v("Create widget")])])])])]):t._e(),t._v(" "),t.checkAction(t.action,"AddFolder")?i("div",[t._v("\n                Adding foler\n              ")]):t._e()]):t._e(),t._v(" "),t.editing?t._e():i("div",[t.isDir(t.object)?i("div",[i("p",[i("strong",[t._v("Selected Directory: "+t._s(t.object.key))]),t._v(" "),i("br"),t._v("Type : "+t._s(t.type)+"\n                "),i("br"),t._v("Select one of the operation below."),i("br")])]):t._e(),t._v(" "),t.isFile(t.object)?i("div",[i("p",[i("strong",[t._v("File "+t._s(t.object.key))]),t._v("\n                Path: "+t._s(t.object.original.Path)+"\n                "),i("br"),t._v("Type is "+t._s(t.type)+"\n              ")])]):t._e()])]),t._v(" "),t.editing?t._e():i("div",{staticClass:"buttons"},[t.isDir(t.object)?i("div",[i("button",{staticClass:"btn",on:{click:t.addPage}},[t._v("Add Widget")]),t._v(" "),i("button",{staticClass:"btn",on:{click:t.addFolder}},[t._v("Add Widget Folder")]),t._v(" "),i("br"),t._v(" "),i("br"),t._v(" "),i("button",{staticClass:"btn",attrs:{title:"Not yet implemented",disabled:""}},[t._v("Delete Widget Folder")])]):t._e(),t._v(" "),t.isFile(t.object)?i("div",[i("button",{staticClass:"btn right",on:{click:function(e){t.edit(t.object)}}},[t._v("Edit")]),t._v(" "),i("br"),t._v(" "),i("br"),t._v(" "),i("button",{staticClass:"btn",attrs:{title:"Not yet implemented",disabled:""}},[t._v("Delete Widget")]),t._v(" "),i("button",{staticClass:"btn",attrs:{title:"Not yet implemented",disabled:""}},[t._v("Copy Widget")])]):t._e()])])])])])},staticRenderFns:[]}},783:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(24),a=i(37),s=i.n(a),o=i(199),r=i(2),l=i(678),c=i.n(l),d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},u=i(718);e.default={components:{Tooltip:n.a,TreeView:s.a,Modal:c.a,Sidebartwo:o.f},data:function(){return{csrf:"",showModal:!1,plaintext:"",testTitle:"",selectedObject:null,type:"Static",selectedPage:null,cipher:"",userTransitKey:"",extra:"?editMode=widget&apiPort=8081&jsPort=8091",editing:!1,chart:[]}},mounted:function(){var t=this;this.$bus.$on("staticHtmlSelected",function(e){t.selectedObject=e,t.showModal=!0}),this.$bus.$on("staticHtmlEdit",function(e){t.selectedPage=window.apiHost+"/widgetedit/"+e.original.Path+t.extra+"&widget="+e.original.Path}),this.refreshData()},computed:d({},i.i(r.mapGetters)({session:"session",github:"github",pkginfo:"pkg",sidebartwo:"sidebartwo",repoState:"repoState"})),events:{incrementTotal:function(){}},methods:{refreshData:function(){var t=this,e=this;if(!this.$store.state.app.isLoaded)return setTimeout(function(){e.refreshData()},1e3);this.$httpApi.get(window.apiUrl+"/widgets").then(function(e){t.$data.chart=e.data,t.$store.commit("TOGGLE_SIDEBAR_TWO",!0),t.$store.commit("TOGGLE_SIDEBAR_TWO_DATA",e.data)}).catch(function(e){t.$onError(e)})},close:function(){this.showModal=!1},createWidget:function(t){for(var e=this,i=t.folder,n=i,a=0;"/"===i[a++];)n=i.substring(1);i=t.filename;var s=i;for(a=0;"/"===i[a++];)s=i.substring(1);var o={filename:s,path:n,type:"widget",headers:t.headers},r=this;this.$httpApi.post(window.apiUrl+"/widgetupload",o,{}).then(function(t){r.refreshData(),r.close(),r.$notify({title:"Success",message:"Creation successful",type:"success"}),e.selectedPage=window.goHostUrl+"/"+o.path+"/"+o.filename+r.extra}).catch(function(t){r.close(),r.$onError(t)})},editObj:function(t){this.selectedPage=window.goHostUrl+"/widgetedit/"+t.original.Path+this.extra,this.showModal=!1},closeModalBasic:function(){this.selectedIndex=-1,this.showModal=!1},AtoggleSidebar:function(t){this.$store.commit("TOGGLE_SIDEBAR_TWO",!0),this.$store.commit("TOGGLE_SIDEBAR_TWO_DATA",this.$data.chart)},incrementTotal:function(){},openWrench:function(){},encryptText:function(){var t=this;this.editing||this.$http.post("/api/transit/encrypt",u.stringify({plaintext:this.plaintext,key:this.userTransitKey}),{headers:{"X-CSRF-Token":this.csrf}}).then(function(e){t.cipher=e.data.result,t.plaintext="",t.$notify({title:"Success",message:"Encryption successful",type:"success"})}).catch(function(e){t.$onError(e)})},decryptText:function(){var t=this;this.editing||this.$http.post("/api/transit/decrypt",u.stringify({cipher:this.cipher,key:this.userTransitKey}),{headers:{"X-CSRF-Token":this.csrf}}).then(function(e){t.plaintext=e.data.result,t.cipher="",t.$notify({title:"Success",message:"Decryption successful",type:"success"})}).catch(function(e){t.$onError(e)})},clearPlaintext:function(){this.plaintext=""},clearCipher:function(){this.cipher=""},isRepoError:function(){return this.repoState.updating>=5},changeKey:function(){this.editing=!0}}}},817:function(t,e,i){e=t.exports=i(676)(),e.push([t.i,".padleft[data-v-d7960548]{position:relative;left:30px;top:30px;height:300px;-ms-flex-positive:0;flex-grow:0;min-height:300px;width:90%}.app-inner-content[data-v-d7960548]{height:100%}.button[data-v-d7960548]{margin:5px 0 0}.fullheight[data-v-d7960548]{height:100%;min-height:100%}.control .button[data-v-d7960548]{margin:inherit}.fa-trash-o[data-v-d7960548]{color:red}.fa-info[data-v-d7960548]{color:#87cefa}","",{version:3,sources:["/data/serverless-cms-admin/client/views/design/Widgets.vue"],names:[],mappings:"AACA,0BACE,kBAAmB,AACnB,UAAU,AACV,SAAS,AACT,aAAa,AACb,oBAAqB,AACjB,YAAa,AACjB,iBAAiB,AACjB,SAAU,CACX,AACD,oCACI,WAAa,CAChB,AACD,yBACE,cAAgB,CACjB,AACD,6BACE,YAAa,AACb,eAAgB,CACjB,AACD,kCACE,cAAgB,CACjB,AACD,6BACE,SAAW,CACZ,AACD,0BACE,aAAoB,CACrB",file:"Widgets.vue",sourcesContent:["\n.padleft[data-v-d7960548] {\n  position: relative;\n  left:30px;\n  top:30px;\n  height:300px;\n  -ms-flex-positive: 0;\n      flex-grow: 0;\n  min-height:300px;\n  width:90%;\n}\n.app-inner-content[data-v-d7960548] {\n    height: 100%;\n}\n.button[data-v-d7960548] {\n  margin: 5px 0 0;\n}\n.fullheight[data-v-d7960548] {\n  height: 100%;\n  min-height:100%;\n}\n.control .button[data-v-d7960548] {\n  margin: inherit;\n}\n.fa-trash-o[data-v-d7960548] {\n  color: red;\n}\n.fa-info[data-v-d7960548] {\n  color: lightskyblue;\n}\n"],sourceRoot:""}])},842:function(t,e,i){var n=i(817);"string"==typeof n&&(n=[[t.i,n,""]]);i(677)(n,{});n.locals&&(t.exports=n.locals)},870:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-inner-content"},[t.isRepoError()?i("div",[t._m(0)]):t._e(),t._v(" "),t.isRepoError()?t._e():i("div",{staticClass:"fullheight"},[i("modal",{attrs:{visible:t.showModal,object:t.selectedObject,type:t.type},on:{close:t.closeModalBasic,createWidget:function(e){t.createWidget(e)},editObj:function(e){t.editObj(e)}}}),t._v(" "),i("sidebartwo",{attrs:{jsonData:t.sidebartwo.json,show:t.sidebartwo.opened&&!t.sidebartwo.hidden}}),t._v(" "),i("div",{staticClass:"tile is-ancestor is-vertical fullheight"},[t.selectedPage?t._e():i("article",{staticClass:"padleft tile is-child box"},[i("label",{staticClass:"label"},[t._v("Select a page to exit from the left menu.")])]),t._v(" "),t.selectedPage?i("iframe",{staticClass:"fullheight",attrs:{src:t.selectedPage}}):t._e()])],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tile is-ancestor is-vertical fullheight"},[i("article",{staticClass:"padleft tile is-child box"},[i("label",{staticClass:"label"},[t._v("Your current repository is in error. "),i("br"),i("br"),t._v("Validate if you have a .git/config file, in your folder or ask for help on our gitter channel.")])])])}]}}});