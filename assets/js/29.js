webpackJsonp([29],{696:function(e,t,a){a(826);var s=a(1)(a(773),a(853),"data-v-313972fe",null);e.exports=s.exports},773:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){var s=a(2),n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},l=["configuration"];t.default={components:{},data:function(){return{csrf:"",tabName:"token",store:this.$store,tableData:[],lang:null,selectedLang:null,selectedLangObject:null,allSettings:null,availableLanguages:[],availableLanguagesHash:{},tableColumns:["accessor","display_name","num_uses","orphan","policies","ttl"],showModal:!1,showDeleteModal:!1,selectedIndex:-1,currentPage:1,lastPage:1,tokenCount:0,loading:!1,search:{show:!1,str:"",found:0,searched:0,regex:!1,regexp:null}}},mounted:function(){this.switchTab(0)},computed:{selectedLangItem:function(){return null!==this.lang?this.$store.state.app.settings.languages[this.lang]:null}},filters:{capitalize:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},methods:n({},a.i(s.mapActions)(["saveNewSettings"]),{langToggle:function(){var t=[],a=this,s=this.selectedLangItem.id,n=(this.$store.state.app.settings.disablelanguages||"").split(" ");e.each(n,function(e,a){a===s||t.push(a)}),a.selectedLangItem.enable?(a.$store.state.app.languages.languagesHash[s].disabled=!1,a.$store.state.app.languages.languagesHash[s].enable=!0):(t.push(s),a.$store.state.app.languages.languagesHash[s].disabled=!0,a.$store.state.app.languages.languagesHash[s].enable=!1),this.$store.state.app.settings.disablelanguages=t.join(" "),this.$store.state.app.settings.disablelanguages.startsWith(" ")&&(this.$store.state.app.settings.disablelanguages=this.$store.state.app.settings.disablelanguages.substring(1))},switchTab:function(e){var t=this;this.tabName=l[e];var a=this;if(!this.$store.state.app.isLoaded)return setTimeout(function(){a.switchTab(e)},1e3);this.$httpApi.get(window.apiUrl+"/settings").then(function(e){for(var t=e.data,s=""+t.disablelanguages||"",n={},l=s.split(" "),i=0;i<l.length;i++)n[l[i]]=!0;if(t.hasOwnProperty("languages")){var o=[],c={},r=Object.keys(t.languages);a.$store.state.app.settings=t;for(var g=0;g<r.length;g++){var u=t.languages[r[g]];u.id=r[g],u.value=r[g],c[r[g]]=u,c[t.languages[r[g]].languagename]=u,void 0===a.selectedLang&&(a.selectedLang=r[g].languagename),n.hasOwnProperty(r[g])?t.languages[r[g]].enable=!1:t.languages[r[g]].enable=!0,r[g]===t.defaultcontentlanguage&&(t.languages[r[g]].enable=!0,t.languages[r[g]].locked=!0),o.push(u)}a.availableLanguages=o,a.availableLanguagesHash=c}}).catch(function(e){t.$onError(e)})},loadLanguageDetails:function(e){void 0!==e&&(this.lang=this.availableLanguagesHash[e].id)},openModalBasic:function(e){this.selectedIndex=e,this.showModal=!0},closeModalBasic:function(){},openDeleteModal:function(e){},closeDeleteModal:function(){}})}}.call(t,a(3))},801:function(e,t,a){t=e.exports=a(676)(),t.push([e.i,".button[data-v-313972fe]{margin:5px 0 0}.control .button[data-v-313972fe]{margin:inherit}.fa-trash-o[data-v-313972fe]{color:red}.fa-info[data-v-313972fe]{color:#87cefa}p.field[data-v-313972fe]{float:left;padding-right:30px}","",{version:3,sources:["/data/serverless-cms-admin/client/views/admin/Sites.vue"],names:[],mappings:"AACA,yBACE,cAAgB,CACjB,AACD,kCACE,cAAgB,CACjB,AACD,6BACE,SAAW,CACZ,AACD,0BACE,aAAoB,CACrB,AACD,yBACE,WAAY,AACZ,kBAAoB,CACrB",file:"Sites.vue",sourcesContent:["\n.button[data-v-313972fe] {\n  margin: 5px 0 0;\n}\n.control .button[data-v-313972fe] {\n  margin: inherit;\n}\n.fa-trash-o[data-v-313972fe] {\n  color: red;\n}\n.fa-info[data-v-313972fe] {\n  color: lightskyblue;\n}\np.field[data-v-313972fe] {\n  float: left;\n  padding-right: 30px;\n}\n"],sourceRoot:""}])},826:function(e,t,a){var s=a(801);"string"==typeof s&&(s=[[e.i,s,""]]);a(677)(s,{});s.locals&&(e.exports=s.locals)},853:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"tile is-ancestor"},[a("div",{staticClass:"tile is-parent is-vertical"},[a("article",{staticClass:"tile is-child box"},[a("label",{staticClass:"label"},[e._v("Select Language")]),e._v(" "),a("div",{staticClass:"control has-icons-right"},[a("span",{staticClass:"select"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedLang,expression:"selectedLang"}],on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedLang=t.target.multiple?a:a[0]},function(t){e.loadLanguageDetails(e.selectedLang)}]}},e._l(e.availableLanguages,function(t){return a("option",[e._v("\n              "+e._s(t.languagename)+"\n            ")])}))])]),e._v(" "),e.selectedLangItem?a("div",[a("div",{staticClass:"tabs is-medium is-boxed is-fullwidth"},[a("ul",[a("li",{class:"configuration"===e.tabName?"is-active":"",on:{click:function(t){e.switchTab(0)}}},[a("a",[e._v(e._s(e.selectedLang)+" Configuration")])])])]),e._v(" "),"configuration"===e.tabName?a("div",{staticClass:"tile is-parent table-responsive is-vertical"},[a("div",{staticClass:"field"},[a("p",{staticClass:"field"},[e._v("\n                    Google Analytics Code:\n                  ")]),e._v(" "),a("p",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.store.state.app.settings.googleanalytics,expression:"store.state.app.settings.googleanalytics"}],staticClass:"input",attrs:{type:"input"},domProps:{value:e.store.state.app.settings.googleanalytics},on:{input:function(t){t.target.composing||(e.store.state.app.settings.googleanalytics=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"field"},[a("p",{staticClass:"field"},[e._v("\n                    Enabled:\n                  ")]),e._v(" "),a("p",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedLangItem.enable,expression:"selectedLangItem.enable"}],staticClass:"checkbox",attrs:{disabled:e.selectedLangItem.locked,type:"checkbox"},domProps:{checked:Array.isArray(e.selectedLangItem.enable)?e._i(e.selectedLangItem.enable,null)>-1:e.selectedLangItem.enable},on:{click:e.langToggle,__c:function(t){var a=e.selectedLangItem.enable,s=t.target,n=!!s.checked;if(Array.isArray(a)){var l=e._i(a,null);s.checked?l<0&&(e.selectedLangItem.enable=a.concat(null)):l>-1&&(e.selectedLangItem.enable=a.slice(0,l).concat(a.slice(l+1)))}else e.selectedLangItem.enable=n}}})])]),e._v("\n\n              Title:\n\n              "),a("div",{staticClass:"field"},[a("p",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedLangItem.title,expression:"selectedLangItem.title"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter website title"},domProps:{value:e.selectedLangItem.title},on:{input:function(t){t.target.composing||(e.selectedLangItem.title=t.target.value)}}})])]),e._v(" "),a("p",{staticClass:"control"},[a("a",{staticClass:"button is-success",on:{click:e.saveNewSettings}},[e._v("\n                  Save\n                ")])])]):e._e(),e._v(" "),"metadata"===e.tabName?a("div",{staticClass:"tile is-parent table-responsive is-vertical"},[e._v("\n                In Metadata\n          ")]):e._e()]):e._e()])])])])},staticRenderFns:[]}}});