webpackJsonp([9],{

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(834)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(780),
  /* template */
  __webpack_require__(862),
  /* scopeId */
  "data-v-6cdf1b8a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    disabled: Boolean,
    isFullwidth: Boolean,
    type: String,
    size: String,
    checked: Boolean,
    name: String
  },

  data() {
    return {
      value: null
    };
  },

  beforeMount() {
    this.value = this.checked;
  },

  mounted() {
    this.$emit('input', this.value = !!this.checked);
  },

  computed: {
    classObject() {
      const { type, size, value } = this;
      return {
        [`is-${type}`]: type,
        [`is-${size}`]: size,
        checked: value
      };
    }
  },

  watch: {
    value(val) {
      this.$emit('input', val);
    }
  }
});

/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(676)();
// imports


// module
exports.push([module.i, ".switch{--height:22px;-webkit-appearance:none;-moz-appearance:none;appearance:none;position:relative;outline:0;border-radius:calc(.8 * var(--height));width:calc(1.625 * var(--height));height:var(--height);background-color:#dbdbdb;border:1px solid #dbdbdb;box-sizing:border-box;-webkit-tap-highlight-color:transparent}.switch,.switch input{cursor:pointer;display:inline-block}.switch input{opacity:0;width:100%;height:100%;position:absolute;z-index:1}.switch:after,.switch:before{content:\" \";position:absolute;top:0;left:0;height:calc(var(--height) - 2px);border-radius:calc((var(--height) - 2px) / 2);transition:.233s}.switch:before{width:calc(1.625 * var(--height) - 2px);background-color:#dbdbdb}.switch:after{width:calc(var(--height) - 2px);background-color:#fff;box-shadow:0 2px 3px hsla(0,0%,7%,.1)}.switch.checked{border-color:#4a4a4a;background-color:#4a4a4a}.switch.checked:before{-ms-transform:scale(0);transform:scale(0)}.switch.checked:after{-ms-transform:translateX(calc(.625 * var(--height)));transform:translateX(calc(.625 * var(--height)))}.switch.is-white.checked{border-color:#fff;background-color:#fff}.switch.is-black.checked{border-color:#0a0a0a;background-color:#0a0a0a}.switch.is-light.checked{border-color:#f5f5f5;background-color:#f5f5f5}.switch.is-dark.checked{border-color:#363636;background-color:#363636}.switch.is-primary.checked{border-color:#00d1b2;background-color:#00d1b2}.switch.is-info.checked{border-color:#3273dc;background-color:#3273dc}.switch.is-success.checked{border-color:#23d160;background-color:#23d160}.switch.is-warning.checked{border-color:#ffdd57;background-color:#ffdd57}.switch.is-danger.checked{border-color:#ff3860;background-color:#ff3860}.switch.is-small{--height:12px}.switch.is-medium{--height:28px}.switch.is-large{--height:32px}", "", {"version":3,"sources":["/data/node_modules/vue-bulma-switch/src/Switch.vue"],"names":[],"mappings":"AACA,QAAQ,cAAc,wBAAwB,qBAAqB,gBAAgB,kBAAkB,UAAU,uCAAwC,kCAAkC,qBAAqB,yBAAyB,yBAAyB,AAAe,sBAAsB,AAAqB,uCAAuC,CAChW,AACD,sBAFgQ,eAAe,AAAsB,oBAAqB,CAGzT,AADD,cAAc,UAAU,AAAqB,WAAW,YAAY,kBAAkB,SAAU,CAC/F,AACD,6BAA6B,YAAY,kBAAkB,MAAM,OAAO,iCAAiC,8CAA8C,gBAAgB,CACtK,AACD,eAAe,wCAAwC,wBAAwB,CAC9E,AACD,cAAc,gCAAgC,sBAAsB,qCAAuC,CAC1G,AACD,gBAAgB,qBAAqB,wBAAwB,CAC5D,AACD,uBAAuB,uBAAuB,kBAAkB,CAC/D,AACD,sBAAsB,qDAAsD,gDAAiD,CAC5H,AACD,yBAAyB,kBAAkB,qBAAqB,CAC/D,AACD,yBAAyB,qBAAqB,wBAAwB,CACrE,AACD,yBAAyB,qBAAqB,wBAAwB,CACrE,AACD,wBAAwB,qBAAqB,wBAAwB,CACpE,AACD,2BAA2B,qBAAqB,wBAAwB,CACvE,AACD,wBAAwB,qBAAqB,wBAAwB,CACpE,AACD,2BAA2B,qBAAqB,wBAAwB,CACvE,AACD,2BAA2B,qBAAqB,wBAAwB,CACvE,AACD,0BAA0B,qBAAqB,wBAAwB,CACtE,AACD,iBAAiB,aAAa,CAC7B,AACD,kBAAkB,aAAa,CAC9B,AACD,iBAAiB,aAAa,CAC7B","file":"Switch.vue","sourcesContent":["\n.switch{--height:22px;-webkit-appearance:none;-moz-appearance:none;appearance:none;position:relative;outline:0;border-radius:calc(0.8 * var(--height));width:calc(1.625 * var(--height));height:var(--height);background-color:#dbdbdb;border:1px solid #dbdbdb;cursor:pointer;box-sizing:border-box;display:inline-block;-webkit-tap-highlight-color:transparent\n}\n.switch input{opacity:0;display:inline-block;width:100%;height:100%;position:absolute;z-index:1;cursor:pointer\n}\n.switch:before,.switch:after{content:\" \";position:absolute;top:0;left:0;height:calc(var(--height) - 2px);border-radius:calc((var(--height) - 2px) / 2);transition:.233s\n}\n.switch:before{width:calc(1.625 * var(--height) - 2px);background-color:#dbdbdb\n}\n.switch:after{width:calc(var(--height) - 2px);background-color:#FFF;box-shadow:0 2px 3px rgba(17,17,17,0.1)\n}\n.switch.checked{border-color:#4a4a4a;background-color:#4a4a4a\n}\n.switch.checked:before{-ms-transform:scale(0);transform:scale(0)\n}\n.switch.checked:after{-ms-transform:translateX(calc(0.625 * var(--height)));transform:translateX(calc(0.625 * var(--height)))\n}\n.switch.is-white.checked{border-color:#fff;background-color:#fff\n}\n.switch.is-black.checked{border-color:#0a0a0a;background-color:#0a0a0a\n}\n.switch.is-light.checked{border-color:#f5f5f5;background-color:#f5f5f5\n}\n.switch.is-dark.checked{border-color:#363636;background-color:#363636\n}\n.switch.is-primary.checked{border-color:#00d1b2;background-color:#00d1b2\n}\n.switch.is-info.checked{border-color:#3273dc;background-color:#3273dc\n}\n.switch.is-success.checked{border-color:#23d160;background-color:#23d160\n}\n.switch.is-warning.checked{border-color:#ffdd57;background-color:#ffdd57\n}\n.switch.is-danger.checked{border-color:#ff3860;background-color:#ff3860\n}\n.switch.is-small{--height:12px\n}\n.switch.is-medium{--height:28px\n}\n.switch.is-large{--height:32px\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(721);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(677)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js?sourceMap!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-573839d4\",\"scoped\":false,\"hasInlineConfig\":true}!../../sass-loader/lib/loader.js?sourceMap!../../vue-loader/lib/selector.js?type=styles&index=0!./Switch.vue", function() {
			var newContent = require("!!../../css-loader/index.js?sourceMap!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-573839d4\",\"scoped\":false,\"hasInlineConfig\":true}!../../sass-loader/lib/loader.js?sourceMap!../../vue-loader/lib/selector.js?type=styles&index=0!./Switch.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(723)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(719),
  /* template */
  __webpack_require__(726),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "switch",
    class: _vm.classObject
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.value),
      expression: "value"
    }],
    attrs: {
      "type": "checkbox",
      "name": _vm.name,
      "disabled": _vm.disabled
    },
    domProps: {
      "checked": Array.isArray(_vm.value) ? _vm._i(_vm.value, null) > -1 : (_vm.value)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.value,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.value = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.value = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.value = $$c
        }
      }
    }
  })])
},staticRenderFns: []}

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_bulma_switch__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_bulma_switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_bulma_switch__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VbSwitch: __WEBPACK_IMPORTED_MODULE_0_vue_bulma_switch___default.a
  },

  data: function data() {
    return {
      csrf: '',
      bRenewable: true,
      bNoParent: false,
      bPeriodic: false,
      bRole: false,
      bWrapped: false,
      bMetadata: false,
      ID: '',
      displayName: '',
      ttl: '',
      max_ttl: '',
      wrap_ttl: '',
      metadata: '',
      availablePolicies: ['default'],
      selectedPolicies: ['default'],
      policyFilter: '',
      num_uses: 0,
      period_ttl: '',
      createdToken: null,
      availableRoles: [],
      selectedRole: '',
      selectedRoleDetails: '',
      selectedRoleLoading: false
    };
  },


  computed: {
    // returns all policies in availablePolicies that contain the policyFilter substring
    filteredPolicies: function filteredPolicies() {
      var filter = this.policyFilter;
      return this.availablePolicies.filter(function (policy) {
        return policy.includes(filter);
      });
    },

    filteredRolePolicies: function filteredRolePolicies() {
      var filter = this.policyFilter;
      if (this.selectedRoleDetails) {
        return this.selectedRoleDetails['allowed_policies'].filter(function (policy) {
          return policy.includes(filter);
        });
      }
    },

    // returns valid JSON if metadata is set. Otherwise return null
    metadataJSON: function metadataJSON() {
      try {
        var json = JSON.parse(this.metadata);
        return (typeof json === 'undefined' ? 'undefined' : _typeof(json)) === 'object' && json != null ? json : null;
      } catch (e) {
        return null;
      }
    },

    // constructs the JSON payload that needs to be sent to the server
    payloadJSON: function payloadJSON() {
      var payload = {
        'id': this.ID,
        'display_name': this.displayName,
        'ttl': this.stringToSeconds(this.ttl).toString() + 's',
        'explicit_max_ttl': this.stringToSeconds(this.max_ttl).toString() + 's',
        'renewable': !!this.bRenewable,
        'no_parent': !!this.bNoParent,
        'period': this.bPeriodic ? this.period_ttl : '',
        'no_default_policy': this.selectedPolicies.indexOf('default') === -1,
        'policies': this.selectedPolicies
      };
      if (this.bMetadata) {
        payload['meta'] = this.metadataJSON || 'INVALID JSON';
      }
      return payload;
    },

    wrapParam: function wrapParam() {
      if (this.bWrapped) {
        return '&wrap-ttl=' + this.stringToSeconds(this.wrap_ttl).toString() + 's';
      }
      return '';
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.$http.get('/api/users/csrf').then(function (response) {
      _this.csrf = response.headers['x-csrf-token'];
    }).catch(function (error) {
      _this.$onError(error);
    });

    // fetch available policies
    try {
      var session = JSON.parse(window.localStorage.getItem('session'));
      if (Date.now() > Date.parse(session['cookie_expiry'])) {
        throw session;
      } else {
        this.availablePolicies = session.policies;
      }
    } catch (e) {
      this.$notify({
        title: 'Session not found',
        message: 'Please login',
        type: 'danger'
      });
      return;
    }

    // check if roles are available to logged in user
    this.$http.get('/api/users/listroles').then(function (response) {
      if (response.data.result !== null) {
        _this.availableRoles = response.data.result;
      }
    }).catch(function (error) {
      // if user simply doesn't have list capability on roles
      var msg = error.response.data.error || '';
      if (msg === 'User lacks capability to list roles') {
        _this.availableRoles = null;
      } else {
        // handle other errors the generic way
        _this.$onError(error);
      }
    });

    // if root policy, fetch all available policies from server
    if (this.availablePolicies.indexOf('root') > -1) {
      this.$http.get('/api/policy').then(function (response) {
        _this.availablePolicies = response.data.result;
        // default policy is always an option, and the first item in list
        var i = _this.availablePolicies.indexOf('default');
        if (i < 0) {
          _this.availablePolicies.splice(0, 0, 'default');
        } else if (i > 0) {
          var temp = _this.availablePolicies[i];
          _this.availablePolicies[i] = _this.availablePolicies[0];
          _this.availablePolicies[0] = temp;
        }
      }).catch(function (error) {
        _this.$onError(error);
      });
    }
  },

  methods: {
    stringToSeconds: function stringToSeconds(str) {
      if (str.includes('-')) {
        return -1;
      }
      var totalSeconds = 0;
      var days = str.match(/(\d+)\s*d/);
      var hours = str.match(/(\d+)\s*h/);
      var minutes = str.match(/(\d+)\s*m/);
      var seconds = str.match(/(\d+)$/) || str.match(/(\d+)\s*s/);
      if (days) {
        totalSeconds += parseInt(days[1]) * 86400;
      }
      if (hours) {
        totalSeconds += parseInt(hours[1]) * 3600;
      }
      if (minutes) {
        totalSeconds += parseInt(minutes[1]) * 60;
      }
      if (seconds) {
        totalSeconds += parseInt(seconds[1]);
      }
      return totalSeconds;
    },

    isValidJSON: function isValidJSON(str) {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }
      return true;
    },

    toggle: function toggle(policy) {
      // if already selected, unselect the policy
      if (this.selectedPolicies.indexOf(policy) > -1) {
        this.selectedPolicies.splice(this.selectedPolicies.indexOf(policy), 1);
      } else {
        this.selectedPolicies.push(policy);
      }
    },

    createToken: function createToken() {
      var _this2 = this;

      // short circuit to failure if metadata is invalid
      if (this.payloadJSON.metadata === 'INVALID JSON') {
        return;
      }

      this.createdToken = null;
      this.$http.post('/api/users/create?type=token' + this.wrapParam, this.payloadJSON, {
        headers: { 'X-CSRF-Token': this.csrf }
      }).then(function (response) {
        _this2.$notify({
          title: 'Token created!',
          message: 'Details will be only shown once!',
          type: 'success'
        });
        _this2.createdToken = response.data.result.auth || response.data.result.wrap_info;
      }).catch(function (error) {
        _this2.$onError(error);
      });
    },

    loadRoleDetails: function loadRoleDetails(rolename) {
      var _this3 = this;

      this.selectedRoleLoading = true;
      this.selectedRoleDetails = '';
      this.$http.get('/api/users/role?rolename=' + rolename).then(function (response) {
        _this3.selectedRoleDetails = response.data.result;
        _this3.selectedRoleLoading = false;
      }).catch(function (error) {
        _this3.$onError(error);
        _this3.selectedRoleLoading = false;
      });
    }

  }
});

/***/ }),

/***/ 809:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(676)();
// imports


// module
exports.push([module.i, ".button[data-v-6cdf1b8a]{margin:5px 0 0}.control .button[data-v-6cdf1b8a]{margin:inherit}.fa-trash-o[data-v-6cdf1b8a]{color:red}.fa-info[data-v-6cdf1b8a]{color:#87cefa}.switch[data-v-6cdf1b8a]{top:7px}", "", {"version":3,"sources":["/data/serverless-cms-admin/client/views/design/CreateToken.vue"],"names":[],"mappings":"AACA,yBACE,cAAgB,CACjB,AACD,kCACE,cAAgB,CACjB,AACD,6BACE,SAAW,CACZ,AACD,0BACE,aAAoB,CACrB,AACD,yBACE,OAAS,CACV","file":"CreateToken.vue","sourcesContent":["\n.button[data-v-6cdf1b8a] {\n  margin: 5px 0 0;\n}\n.control .button[data-v-6cdf1b8a] {\n  margin: inherit;\n}\n.fa-trash-o[data-v-6cdf1b8a] {\n  color: red;\n}\n.fa-info[data-v-6cdf1b8a] {\n  color: lightskyblue;\n}\n.switch[data-v-6cdf1b8a] {\n  top: 7px;\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 834:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(809);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(677)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6cdf1b8a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CreateToken.vue", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6cdf1b8a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CreateToken.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 862:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('div', {
    staticClass: "columns"
  }, [_c('div', {
    staticClass: "column is-6"
  }, [(_vm.availableRoles && _vm.availableRoles.length > 0) ? _c('div', {
    staticClass: "field"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Load preset from role")]), _vm._v(" "), _c('div', {
    staticClass: "control has-icons-right"
  }, [_c('span', {
    staticClass: "select"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.selectedRole),
      expression: "selectedRole"
    }],
    on: {
      "change": [function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.selectedRole = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }, function($event) {
        _vm.loadRoleDetails(_vm.selectedRole)
      }]
    }
  }, _vm._l((_vm.availableRoles), function(role) {
    return _c('option', [_vm._v("\n                  " + _vm._s(role) + "\n                ")])
  }))])])]) : _vm._e(), _vm._v(" "), (_vm.availablePolicies.indexOf('root') > -1) ? _c('div', {
    staticClass: "field"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("ID")]), _vm._v(" "), _c('div', {
    staticClass: "control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.ID),
      expression: "ID"
    }],
    staticClass: "input is-info",
    attrs: {
      "type": "text",
      "placeholder": "Default will be a UUID"
    },
    domProps: {
      "value": (_vm.ID)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.ID = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "help is-info"
  }, [_vm._v("\n            Root privilege\n          ")])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Display Name")]), _vm._v(" "), _c('div', {
    staticClass: "control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.displayName),
      expression: "displayName"
    }],
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "Default will be 'token'"
    },
    domProps: {
      "value": (_vm.displayName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.displayName = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.displayName !== '') ? _c('p', {
    staticClass: "help is-info"
  }, [_vm._v("\n              Display name will be 'token-" + _vm._s(_vm.displayName) + "'\n            ")]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("TTL")]), _vm._v(" "), _c('div', {
    staticClass: "control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.ttl),
      expression: "ttl"
    }],
    staticClass: "input",
    class: _vm.stringToSeconds(this.ttl) < 0 ? 'is-danger' : '',
    attrs: {
      "type": "text",
      "placeholder": "e.g. '2d 12h' or '10h 30m 20s'"
    },
    domProps: {
      "value": (_vm.ttl)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.ttl = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.stringToSeconds(this.ttl) < 0) ? _c('p', {
    staticClass: "help is-danger"
  }, [_vm._v("\n              TTL cannot be negative\n            ")]) : _vm._e(), _vm._v(" "), (_vm.stringToSeconds(this.ttl) > 0) ? _c('p', {
    staticClass: "help is-info"
  }, [_vm._v("\n              " + _vm._s(_vm.stringToSeconds(this.ttl)) + " seconds\n            ")]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Explicit Max TTL")]), _vm._v(" "), _c('div', {
    staticClass: "control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.max_ttl),
      expression: "max_ttl"
    }],
    staticClass: "input",
    class: _vm.stringToSeconds(this.max_ttl) < 0 ? 'is-danger' : '',
    attrs: {
      "type": "text",
      "placeholder": "e.g. '2d 12h' or '10h 30m 20s'"
    },
    domProps: {
      "value": (_vm.max_ttl)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.max_ttl = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.stringToSeconds(this.max_ttl) < 0) ? _c('p', {
    staticClass: "help is-danger"
  }, [_vm._v("\n              TTL cannot be negative\n            ")]) : _vm._e(), _vm._v(" "), (_vm.stringToSeconds(this.max_ttl) > 0) ? _c('p', {
    staticClass: "help is-info"
  }, [_vm._v("\n              " + _vm._s(_vm.stringToSeconds(this.max_ttl)) + " seconds\n            ")]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "field is-horizontal"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "field-body"
  }, [_c('div', {
    staticClass: "field"
  }, [_c('div', {
    staticClass: "control"
  }, [_c('vb-switch', {
    attrs: {
      "type": "info",
      "checked": _vm.bRenewable
    },
    model: {
      value: (_vm.bRenewable),
      callback: function($$v) {
        _vm.bRenewable = $$v
      },
      expression: "bRenewable"
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "field is-horizontal"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "field-body"
  }, [_c('div', {
    staticClass: "field is-grouped"
  }, [_c('div', {
    staticClass: "control"
  }, [_c('vb-switch', {
    attrs: {
      "type": "info",
      "checked": _vm.bWrapped
    },
    model: {
      value: (_vm.bWrapped),
      callback: function($$v) {
        _vm.bWrapped = $$v
      },
      expression: "bWrapped"
    }
  })], 1)]), _vm._v(" "), (_vm.bWrapped) ? _c('div', {
    staticClass: "field"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.wrap_ttl),
      expression: "wrap_ttl"
    }],
    staticClass: "input",
    class: _vm.stringToSeconds(this.wrap_ttl) < 0 ? 'is-danger' : '',
    attrs: {
      "type": "text",
      "placeholder": "Wrap-ttl e.g. '5m'"
    },
    domProps: {
      "value": (_vm.wrap_ttl)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.wrap_ttl = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.stringToSeconds(this.wrap_ttl) < 0) ? _c('p', {
    staticClass: "help is-danger"
  }, [_vm._v("\n                TTL cannot be negative\n              ")]) : _vm._e(), _vm._v(" "), (_vm.stringToSeconds(this.wrap_ttl) > 0) ? _c('p', {
    staticClass: "help is-info"
  }, [_vm._v("\n                " + _vm._s(_vm.stringToSeconds(this.wrap_ttl)) + " seconds\n              ")]) : _vm._e()]) : _vm._e()])]), _vm._v(" "), (_vm.availablePolicies.indexOf('root') > -1) ? _c('div', {
    staticClass: "field is-horizontal"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "field-body"
  }, [_c('div', {
    staticClass: "field"
  }, [_c('div', {
    staticClass: "control"
  }, [_c('vb-switch', {
    attrs: {
      "type": "danger",
      "checked": _vm.bNoParent
    },
    model: {
      value: (_vm.bNoParent),
      callback: function($$v) {
        _vm.bNoParent = $$v
      },
      expression: "bNoParent"
    }
  })], 1)])])]) : _vm._e(), _vm._v(" "), (_vm.availablePolicies.indexOf('root') > -1) ? _c('div', {
    staticClass: "field is-horizontal"
  }, [_vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "field-body"
  }, [_c('div', {
    staticClass: "field"
  }, [_c('div', {
    staticClass: "control"
  }, [_c('vb-switch', {
    attrs: {
      "type": "danger",
      "checked": _vm.bPeriodic
    },
    model: {
      value: (_vm.bPeriodic),
      callback: function($$v) {
        _vm.bPeriodic = $$v
      },
      expression: "bPeriodic"
    }
  })], 1)])])]) : _vm._e(), _vm._v(" "), (_vm.availablePolicies.indexOf('root') > -1 && this.bPeriodic) ? _c('div', {
    staticClass: "field"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Period TTL")]), _vm._v(" "), _c('div', {
    staticClass: "control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.period_ttl),
      expression: "period_ttl"
    }],
    staticClass: "input is-danger",
    class: _vm.stringToSeconds(this.period_ttl) < 0 ? 'is-danger' : '',
    attrs: {
      "type": "text",
      "placeholder": "e.g. '2d 12h' or '10h 30m 20s'"
    },
    domProps: {
      "value": (_vm.period_ttl)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.period_ttl = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.stringToSeconds(this.period_ttl) < 0) ? _c('p', {
    staticClass: "help is-danger"
  }, [_vm._v("\n              TTL cannot be negative\n            ")]) : _vm._e(), _vm._v(" "), (_vm.stringToSeconds(this.period_ttl) > 0) ? _c('p', {
    staticClass: "help is-info"
  }, [_vm._v("\n              " + _vm._s(_vm.stringToSeconds(this.period_ttl)) + " seconds\n            ")]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "field is-horizontal"
  }, [_vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "field-body"
  }, [_c('div', {
    staticClass: "field"
  }, [_c('div', {
    staticClass: "control"
  }, [_c('vb-switch', {
    attrs: {
      "type": "info",
      "checked": _vm.bMetadata
    },
    model: {
      value: (_vm.bMetadata),
      callback: function($$v) {
        _vm.bMetadata = $$v
      },
      expression: "bMetadata"
    }
  })], 1)])])]), _vm._v(" "), (_vm.bMetadata) ? _c('div', {
    staticClass: "field"
  }, [_c('p', {
    staticClass: "control"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.metadata),
      expression: "metadata"
    }],
    staticClass: "textarea",
    attrs: {
      "placeholder": "Paste valid JSON here"
    },
    domProps: {
      "value": (_vm.metadata)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.metadata = $event.target.value
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('div', {
    staticClass: "control"
  }, [_c('nav', {
    staticClass: "panel"
  }, [_c('p', {
    staticClass: "panel-heading"
  }, [_vm._v("Available Policies")]), _vm._v(" "), _c('div', {
    staticClass: "panel-block"
  }, [_c('p', {
    staticClass: "control has-icons-left"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.policyFilter),
      expression: "policyFilter"
    }],
    staticClass: "input is-small",
    attrs: {
      "type": "text",
      "placeholder": "Search"
    },
    domProps: {
      "value": (_vm.policyFilter)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.policyFilter = $event.target.value
      }
    }
  }), _vm._v(" "), _vm._m(5)])]), _vm._v(" "), _vm._l((_vm.filteredPolicies), function(policy) {
    return _c('label', {
      staticClass: "panel-block"
    }, [_c('input', {
      attrs: {
        "type": "checkbox"
      },
      domProps: {
        "checked": _vm.selectedPolicies.indexOf(policy) > -1
      },
      on: {
        "click": function($event) {
          _vm.toggle(policy)
        }
      }
    }), _vm._v(" " + _vm._s(policy) + " ")])
  }), _vm._v(" "), (_vm.selectedRoleDetails) ? _c('p', {
    staticClass: "panel-heading"
  }, [_vm._v("Role Allowed Policies")]) : _vm._e(), _vm._v(" "), _vm._l((_vm.filteredRolePolicies), function(policy) {
    return _c('label', {
      staticClass: "panel-block"
    }, [_c('input', {
      attrs: {
        "type": "checkbox"
      },
      domProps: {
        "checked": _vm.selectedPolicies.indexOf(policy) > -1
      },
      on: {
        "click": function($event) {
          _vm.toggle(policy)
        }
      }
    }), _vm._v(" " + _vm._s(policy) + " ")])
  }), _vm._v(" "), _c('div', {
    staticClass: "panel-block"
  }, [_c('button', {
    staticClass: "button is-danger is-outlined is-fullwidth",
    on: {
      "click": function($event) {
        _vm.selectedPolicies = []
      }
    }
  }, [_vm._v("\n                  Reset selected policies\n                ")])])], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('div', {
    staticClass: "control"
  }, [(_vm.selectedPolicies.indexOf('root') > -1) ? _c('button', {
    staticClass: "button is-danger",
    attrs: {
      "disabled": this.payloadJSON.metadata === 'INVALID JSON'
    },
    on: {
      "click": function($event) {
        _vm.createToken()
      }
    }
  }, [_vm._v("\n              Create Root Token\n            ")]) : _c('button', {
    staticClass: "button is-primary",
    attrs: {
      "disabled": _vm.selectedPolicies.length === 0 ||
        this.payloadJSON.metadata === 'INVALID JSON'
    },
    on: {
      "click": function($event) {
        _vm.createToken()
      }
    }
  }, [_vm._v("\n              Create Token\n            ")]), _vm._v(" "), (_vm.selectedPolicies.length === 0) ? _c('p', {
    staticClass: "help is-danger"
  }, [_vm._v("WARNING: No policies selected")]) : _vm._e(), _vm._v(" "), (_vm.selectedPolicies.indexOf('root') > -1) ? _c('p', {
    staticClass: "help is-danger"
  }, [_vm._v("WARNING: Root policy is selected")]) : _vm._e()])])]), _vm._v(" "), _c('div', {
    staticClass: "column is-6"
  }, [(_vm.availableRoles === null) ? _c('div', {
    staticClass: "field"
  }, [_vm._m(6)]) : _vm._e(), _vm._v(" "), (_vm.selectedRole) ? _c('div', {
    staticClass: "field"
  }, [_vm._m(7)]) : _vm._e(), _vm._v(" "), (this.max_ttl != '' && (_vm.stringToSeconds(this.ttl) > _vm.stringToSeconds(this.max_ttl))) ? _c('div', {
    staticClass: "field"
  }, [_vm._m(8)]) : _vm._e(), _vm._v(" "), (_vm.selectedRole && _vm.selectedRoleDetails) ? _c('div', {
    staticClass: "field"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Selected role: " + _vm._s(_vm.selectedRole))]), _vm._v(" "), _c('article', {
    staticClass: "message is-info"
  }, [_c('div', {
    staticClass: "message-body",
    staticStyle: {
      "white-space": "pre"
    }
  }, [_vm._v(_vm._s(JSON.stringify(_vm.selectedRoleDetails, null, '\t')))])])]) : _vm._e(), _vm._v(" "), (_vm.createdToken) ? _c('div', {
    staticClass: "field"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Created token:")]), _vm._v(" "), _c('article', {
    staticClass: "message is-success"
  }, [_c('pre', {
    directives: [{
      name: "highlightjs",
      rawName: "v-highlightjs",
      value: (JSON.stringify(_vm.createdToken, null, '    ')),
      expression: "JSON.stringify(createdToken, null, '    ')"
    }]
  }, [_c('code', {
    staticClass: "javascript"
  })])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Payload preview:")]), _vm._v(" "), _c('article', {
    staticClass: "message is-primary"
  }, [_c('pre', {
    directives: [{
      name: "highlightjs",
      rawName: "v-highlightjs",
      value: (JSON.stringify(_vm.payloadJSON, null, '    ')),
      expression: "JSON.stringify(payloadJSON, null, '    ')"
    }]
  }, [_c('code', {
    staticClass: "javascript"
  })])])])])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "field-label is-normal"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Renewable?")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "field-label is-normal"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Wrapped?")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "field-label is-normal"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("\n              No parent?\n            ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "field-label is-normal"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("\n              Periodic?\n            ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "field-label is-normal"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("\n              Metadata?\n            ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "icon is-small is-left"
  }, [_c('i', {
    staticClass: "fa fa-search"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('article', {
    staticClass: "message is-warning"
  }, [_c('div', {
    staticClass: "message-body"
  }, [_c('strong', [_vm._v("Warning: Logged in user is not authorized to list roles")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('article', {
    staticClass: "message is-warning"
  }, [_c('div', {
    staticClass: "message-body"
  }, [_c('strong', [_vm._v("Warning: Some options may be overridden by role details")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('article', {
    staticClass: "message is-warning"
  }, [_c('div', {
    staticClass: "message-body"
  }, [_c('strong', [_vm._v("Warning: ttl is longer than max_ttl")])])])
}]}

/***/ })

});
//# sourceMappingURL=9.js.map