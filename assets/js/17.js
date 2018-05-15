webpackJsonp([17],{708:function(t,e,s){s(839);var i=s(1)(s(785),s(867),"data-v-bb729b04",null);t.exports=i.exports},785:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(201),a=s.n(i),n=s(2),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i])}return t};e.default={components:{GitHub:a.a},data:function(){return{csrf:"",type:"Token",ID:"",pubKey:"",creating:!1,Password:"",healthData:{},sshValid:!0,sshKeyCreateError:!1,healthLoading:!1}},mounted:function(){this.testFetch()},computed:o({},s.i(n.mapGetters)({session:"session",repoState:"repoState",isWebsite:"isWebsite",websiteIsGit:"websiteIsGit",selectedWebsite:"selectedWebsite",github:"github"}),{healthKeys:function(){return Object.keys(this.healthData)},renewable:function(){return this.session&&this.session.renewable},session:function(){return this.$store.getters.session},logininfo:function(){return null!==this.$store.state.github.logininfo&&null!==this.$store.state.github.logininfo?this.$store.state.github.logininfo:null},username:function(){var t=this;return null!==this.$store.state.github&&null!==this.$store.state.github.user&&(setTimeout(function(){t.testFetch()},100),this.$store.state.github&&this.$store.state.github.user)?this.$store.state.github.user.name||this.$store.state.github.user.login||this.$store.state.github.user.username:null},sessionKeys:function(){return null===this.session||Object.keys(this.session)}}),methods:o({},s.i(n.mapActions)(["toggleRepoState"]),{isSshValid:function(){return!0===this.sshValid},fetchCSRF:function(){var t=this;this.$http.get("/api/login/csrf").then(function(e){t.csrf=e.headers["x-csrf-token"]}).catch(function(e){t.$onError(e)})},isGitHub:function(){var t=this;return!(this.$github&&t.$store&&t.$store.state&&t.$store.state.github&&t.$store.state.github.logininfo&&"BitBucket"===t.$store.state.github.logininfo.type)},getHealth:function(){var t=this;this.healthLoading=!0,this.$http.get("/api/health").then(function(e){t.healthData=JSON.parse(e.data.result),t.healthData.server_time_utc=new Date(1e3*t.healthData.server_time_utc).toUTCString(),t.healthLoading=!1}).catch(function(e){t.$onError(e),t.healthLoading=!1})},login:function(){var t=this;this.$http.post("/api/login",{Type:this.type.toLowerCase(),ID:this.ID,Password:this.Password},{headers:{"X-CSRF-Token":this.csrf}}).then(function(e){t.$notify({title:"Login success!",message:"",type:"success"}),t.clearFormData(),t.session={type:t.type,display_name:e.data.data.display_name,meta:e.data.data.meta,policies:e.data.data.policies,renewable:e.data.data.renewable,token_expiry:0===e.data.data.ttl?"never":new Date(Date.now()+1e3*e.data.data.ttl).toString(),cookie_expiry:new Date(Date.now()+288e5).toString()},window.localStorage.setItem("session",JSON.stringify(t.session)),t.$store.commit("setSession",t.session),"Userpass"!==t.type&&"LDAP"!==t.type||t.$message({message:"Your access token is: "+e.data.data.id+" and this is the only time you will see it. If you wish, you may login with this to avoid creating unnecessary access tokens in the future.",type:"warning",duration:0,showCloseButton:!0})}).catch(function(e){t.$onError(e)})},deleteSSHKeys:function(){var t=this;this.$store.state.app.website||this.$httpApi.get(window.apiUrl+"/sshkeys?action=test&loc=login&i=1").then(function(e){if(e.data.Data.indexOf("SSH Is Valid")>=0){var s=e.data.Extra;if(s&&s.startsWith("ssh-rsa")){var i="/user/keys",a=t.$github;t.$store.state.github&&t.$store.state.github.logininfo&&"BitBucket"===t.$store.state.github.logininfo.type&&(a=t.$bitbucket,i="1.0/users/"+t.$store.state.github.logininfo.username+"/ssh-keys");var n=t.github;window.vueAuth.getToken()?a.setToken(window.vueAuth.getToken()):a.setUserPass(n.logininfo.user,n.logininfo.pass),a.get(i,{},function(e){for(var n=null,o=e.length,r=0;r<o;r++)if(e[r].key===s){n=a===t.$bitbucket?e[r].pk:e[r].id;break}var l=i;null!==n&&(l+="/"+n),a.delete(l,function(e){e.status>=200&&e.status<300&&(t.sshValid=!1,t.$httpApi.post(window.apiUrl+"/sshkeys?action=delete",{Data:s}).then(function(e){204===e.status&&(t.sshValid=!1),t.toggleRepoState(6)}).catch(function(e){t.$onError(e)}))},function(e){t.$onError(e)})},function(e){t.$onError(e)})}}}).catch(function(e){t.$store.state.app.repoState.sshKeyMissing=!0,e&&e.response&&504===e.response.status?(t.$store.commit("REPO_STATE_UPATE",0),t.$store.commit("setInet",!1)):t.sshValid&&(t.sshValid=!1,e&&e.response&&500===e.response.status?t.toggleRepoState(6):t.$onError(e))})},testFetch:function(){var t=this,e=this;this.$store.state.app.website||this.$httpApi.get(window.apiUrl+"/sshkeys?action=test&loc=login&i=2").then(function(t){t.data.Data.indexOf("SSH Is Valid")>=0?(e.sshValid=!0,e.toggleRepoState(0)):e.sshValid=!1}).catch(function(s){e.$store.state.app.repoState.sshKeyMissing=!0,s&&s.response&&504===s.response.status?(e.$store.commit("REPO_STATE_UPATE",0),e.$store.commit("setInet",!1)):e.sshValid&&(e.sshValid=!1,s.response&&500===s.response.status?e.toggleRepoState(6):t.$onError(s))})},createSSHKey:function(){if(this.sshKeyCreateError=!1,!this.creating){this.creating=!0;var t=this,e="user",s="/user/keys",i=this.$github;this.$store.state.github&&this.$store.state.github.logininfo&&"BitBucket"===this.$store.state.github.logininfo.type&&(i=this.$bitbucket,e="1.0/users/"+this.$store.state.github.logininfo.username,s="1.0/users/"+this.$store.state.github.logininfo.username+"/ssh-keys"),window.vueAuth.getToken()?i.setToken(window.vueAuth.getToken()):i.setUserPass(this.logininfo.username,this.logininfo.pass),i.get(e,{},function(e){var a=this;t.$http.get(window.apiUrl+"/sshkeys?action=create").then(function(e){if(void 0!==e.data&&null!==e.data&&(t.pubKey=e.data.Data,void 0!==t.pubKey&&null!==t.pubKey)){var a={key:t.pubKey};"BitBucket"===t.$store.state.github.logininfo.type?(a.accountname=t.$store.state.github.logininfo.username,a.label="ACenterA CMS Generated - "+e.data.Extra):a.title="ACenterA CMS Generated - "+e.data.Extra,i.post(s,a,function(e){201!==e.status&&200!==e.status||setTimeout(function(){t.testFetch(),setTimeout(function(){t.creating=!1},2e3)},2e3)},function(e){console.error(e),t.creating=!1})}t.sshKeyCreateError=!0}).catch(function(t){a.creating=!1,t.response&&500===t.response.status?a.sshKeyCreateError=!0:a.$onError(t)})},this.gitError)}},logout:function(){document.cookie="auth=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;",window.localStorage.removeItem("session"),this.$store.commit("clearSession",this.$store.origState)},clearFormData:function(){this.ID="",this.Password=""},renewLogin:function(){var t=this;this.$http.post("/api/login/renew-self",{},{headers:{"X-CSRF-Token":this.csrf}}).then(function(e){t.$notify({title:"Renew success!",message:"",type:"success"}),t.session.meta=e.data.data.meta,t.session.policies=e.data.data.policies,t.session.token_expiry=0===e.data.data.ttl?"never":new Date(Date.now()+1e3*e.data.data.ttl).toString(),window.localStorage.setItem("session",JSON.stringify(t.session)),t.$store.commit("setSession",t.session)}).catch(function(e){t.$onError(e)})}})}},814:function(t,e,s){e=t.exports=s(676)(),e.push([t.i,".button[data-v-bb729b04]{margin:5px 0 0}.button .leftfloat[data-v-bb729b04]{margin-right:80px!important;float:left}.control .button[data-v-bb729b04]{margin:inherit}","",{version:3,sources:["/data/serverless-cms-admin/client/views/login/index.vue"],names:[],mappings:"AACA,yBACE,cAAgB,CACjB,AACD,oCACE,4BAA4B,AAC5B,UAAY,CACb,AACD,kCACE,cAAgB,CACjB",file:"index.vue",sourcesContent:["\n.button[data-v-bb729b04] {\n  margin: 5px 0 0;\n}\n.button .leftfloat[data-v-bb729b04] {\n  margin-right:80px!important;\n  float :left;\n}\n.control .button[data-v-bb729b04] {\n  margin: inherit;\n}\n"],sourceRoot:""}])},839:function(t,e,s){var i=s(814);"string"==typeof i&&(i=[[t.i,i,""]]);s(677)(i,{});i.locals&&(t.exports=i.locals)},867:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tile is-ancestor box is-vertical"},[s("div",{staticClass:"tile"},[t.selectedWebsite&&!t.websiteIsGit?s("div",{staticClass:"tile"},[s("h2",[t._v("You are not using a GIT account.")]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("br")]):s("div",{staticClass:"tile"},[s("div",{staticClass:"column is-6"},[s("article",{staticClass:"tile is-parent is-5 is-vertical"},[s("article",{staticClass:"tile is-child is-marginless is-paddingless"},[s("GitHub",{attrs:{showGitButtons:"false"}})],1)])]),t._v(" "),s("div",{staticClass:"column is-6"},[t.isWebsite?s("div",[null===t.username?s("div",{staticClass:"field"},[t._m(0)]):t._e(),t._v(" "),null!==t.username?s("div",[t._m(1)]):t._e()]):t._e(),t._v(" "),t.isWebsite?t._e():s("div",[null===t.username?s("div",{staticClass:"field"},[t._m(2)]):t._e(),t._v(" "),null!==t.username?s("div",[s("article",{staticClass:"tile is-child box"},[s("strong",[t._v("SSHKeys")]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),t.isGitHub()?s("article",{staticClass:"tile is-child"},[t.isSshValid()?t._e():s("p",{staticClass:"control"},[s("a",{staticClass:"button rightfloat is-primary",attrs:{disabled:t.creating},on:{click:function(e){t.createSSHKey()}}},[s("span",[t._v("Create SSH Key")])])]),t._v(" "),t.isSshValid()?s("div",[s("span",[t._v("Your SSH Key is valid")]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("p",{staticClass:"control"},[s("a",{staticClass:"button leftfloat is-primary",attrs:{title:"Test your ssh key"},on:{click:function(e){t.testFetch()}}},[s("span",[t._v("Test SSH Key")])]),t._v(" "),s("a",{staticClass:"button rightfloat is-primary",attrs:{title:"Delete the ssh key created"},on:{click:function(e){t.deleteSSHKeys()}}},[s("span",[t._v("Delete SSH Key")])])])]):t._e()]):t._e(),t._v(" "),t.isGitHub()?t._e():s("article",{staticClass:"tile is-child"},[t.isSshValid()?s("div",[s("span",[t._v("Your SSH Key is valid")]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("p",{staticClass:"control"},[s("a",{staticClass:"button leftfloat is-primary",attrs:{title:"Test your ssh key"},on:{click:function(e){t.testFetch()}}},[s("span",[t._v("Test SSH Key")])])])]):t._e(),t._v(" "),t.isSshValid()?t._e():s("div",[t._v("\n                    Bitbucket doesn't allow anymore to create API Key using their Rest API."),s("br"),t._v("\n                    Create a .ssh/id_rsa inside your application forlder, and add the ssh key to your account in your BitBucket settings.\n                  ")])])])]):t._e()])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"message is-warning"},[s("div",{staticClass:"message-body"},[s("strong",[t._v("You must be logged in to edit your website.")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"message is-success"},[s("div",{staticClass:"message-body"},[s("strong",[t._v("You can edit and save your website..")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"message is-warning"},[s("div",{staticClass:"message-body"},[s("strong",[t._v("You must be logged in to manage SSH Keys")])])])}]}}});