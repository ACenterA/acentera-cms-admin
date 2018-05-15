webpackJsonp([5],{

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(829)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(788),
  /* template */
  __webpack_require__(857),
  /* scopeId */
  "data-v-44f23bd8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(716);
exports.encode = exports.stringify = __webpack_require__(717);


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

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_bulma_switch__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_bulma_switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_bulma_switch__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var querystring = __webpack_require__(718);

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VbSwitch: __WEBPACK_IMPORTED_MODULE_0_vue_bulma_switch___default.a
  },

  data: function data() {
    return {
      csrf: '',
      currentPath: '',
      currentPathCopy: '',
      tableHeaders: [],
      tableData: [],
      tableDataCopy: [],
      newKey: '',
      newValue: '',
      editMode: false
    };
  },


  mounted: function mounted() {
    this.changePath(this.currentPath);
  },

  computed: {
    currentPathType: function currentPathType() {
      if (this.currentPath === '' || this.currentPath === '/') {
        return 'Mount';
      }
      if (this.currentPath.slice(-1) === '/') {
        return 'Path';
      } else {
        return 'Secret';
      }
    },

    // Returns true if the new key already exists in the current secret
    newKeyExists: function newKeyExists() {
      for (var i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].path === this.newKey) {
          return true;
        }
      }
      return false;
    },

    // Returns a constructed payload for writing secrets
    constructedPayload: function constructedPayload() {
      if (this.currentPathType === 'Secret') {
        var data = {};
        for (var i = 0; i < this.tableData.length; i++) {
          data[this.tableData[i].path] = this.tableData[i].desc;
        }
        return data;
      } else {
        return {};
      }
    }
  },

  methods: {
    deleteItem: function deleteItem(index) {
      this.tableData.splice(index, 1);
    },

    // currently deprecated
    getMounts: function getMounts() {
      var _this = this;

      this.$http.get('/api/mounts').then(function (response) {
        _this.tableData = [];
        _this.tableHeaders = ['Mounts', 'Description', ''];
        _this.csrf = response.headers['x-csrf-token'];
        var result = response.data.result;

        var keys = Object.keys(result);
        for (var i = 0; i < keys.length; i++) {
          _this.tableData.push({
            path: keys[i],
            type: result[keys[i]]['type'],
            desc: result[keys[i]]['description'],
            conf: result[keys[i]]['config']
          });
        }
      }).catch(function (error) {
        _this.$onError(error);
      });
    },

    changePath: function changePath(path, entry) {
      var _this2 = this;

      if (entry) {
        if (entry.type === 'Key') {
          return;
        } else {
          path += entry.path;
        }
      }

      this.newKey = '';
      this.newValue = '';
      this.editMode = false;
      this.confirmDelete = false;

      this.$http.get('/api/secrets?path=' + path).then(function (response) {
        _this2.tableData = [];
        _this2.currentPath = response.data.path;
        _this2.csrf = response.headers['x-csrf-token'];
        var result = response.data.result;

        if (_this2.currentPath.slice(-1) === '/') {
          // listing subdirectories
          _this2.tableHeaders = ['Subpaths', 'Description', ''];
          for (var i = 0; i < result.length; i++) {
            _this2.tableData.push({
              path: result[i],
              type: result[i].slice(-1) === '/' ? 'Path' : 'Secret'
            });
          }
        } else {
          // listing key value pairs
          _this2.tableHeaders = ['Key', 'Value', ''];
          var keys = Object.keys(result);
          for (var j = 0; j < keys.length; j++) {
            _this2.tableData.push({
              path: keys[j],
              type: 'Key',
              desc: result[keys[j]]
            });
          }
        }
      }).catch(function (error) {
        _this2.$onError(error);
      });
    },

    changePathUp: function changePathUp() {
      // cut the trailing slash off if it exists
      var noTrailingSlash = this.currentPath;
      if (this.currentPath.slice(-1) === '/') {
        noTrailingSlash = this.currentPath.substring(0, this.currentPath.length - 1);
      }
      // remove up to the last slash if it exists
      this.currentPath = noTrailingSlash.substring(0, noTrailingSlash.lastIndexOf('/')) + '/';
      // fetch data again
      this.changePath(this.currentPath);
    },

    type: function type(index) {
      switch (this.tableData[index].type) {
        case 'Secret':
          return { 'tag': true, 'is-info': true };
        case 'Path':
          return { 'tag': true, 'is-primary': true };
        case 'Key':
          return { 'tag': true, 'is-success': true };
        default:
          return { 'tag': true, 'is-danger': true };
      }
    },

    addKeyValue: function addKeyValue() {
      // only allow insertion if key and value are valid
      if (this.newKey === '' || this.newValue === '') {
        this.$notify({
          title: 'Invalid',
          message: 'key and value must be non-empty',
          type: 'warning'
        });
        return;
      }
      if (this.newKeyExists) {
        this.$notify({
          title: 'Invalid',
          message: 'key already exists',
          type: 'warning'
        });
        return;
      }
      // insert new key value pair to local table (don't write it to server yet)
      this.tableData.push({
        path: this.newKey,
        type: 'Key',
        desc: this.newValue
      });
      // reset so that a new pair can be inserted
      this.newKey = '';
      this.newValue = '';
    },

    startEdit: function startEdit() {
      this.editMode = true;
      this.currentPathCopy = this.currentPath;
      // a deep copy is needed in case the edit is cancelled
      this.tableDataCopy = JSON.parse(JSON.stringify(this.tableData));
    },

    saveEdit: function saveEdit() {
      var _this3 = this;

      // if there is a current new key/value pair, add it in first
      if (!(this.newKey === '' || this.newValue === '') && !this.newKeyExists) {
        this.addKeyValue();
      }
      var body = JSON.stringify(this.constructedPayload);
      this.$http.post('/api/secrets?path=' + this.currentPath, querystring.stringify({
        body: body
      }), {
        headers: { 'X-CSRF-Token': this.csrf }
      }).then(function (response) {
        _this3.$notify({
          title: 'Success!',
          message: '',
          type: 'success'
        });
        _this3.editMode = false;
      }).catch(function (error) {
        _this3.$onError(error);
      });
    },

    cancelEdit: function cancelEdit() {
      this.editMode = false;
      this.tableData = this.tableDataCopy;
      this.currentPath = this.currentPathCopy;
    },

    addSecret: function addSecret() {
      // only allow insertion if key and value are valid
      if (this.newKey === '') {
        this.$notify({
          title: 'Invalid',
          message: 'key and value must be non-empty',
          type: 'warning'
        });
        return;
      }

      // Backup in case edit is cancelled
      this.currentPathCopy = this.currentPath;
      this.tableDataCopy = JSON.parse(JSON.stringify(this.tableData));

      // Display the to-be path of the new secret
      this.currentPath += this.newKey;
      this.newKey = '';

      // Give the user a proper secret editing UI
      this.editMode = true;
      this.tableData = [];

      // Warn the user that this secret is all a draft until saved
      this.$notify({
        title: 'This is a draft!',
        message: 'Click save secret to finalize',
        type: 'warning',
        duration: 10000
      });
    },

    deleteSecret: function deleteSecret(path) {
      var _this4 = this;

      // check if current path is valid
      if (!path.includes('/')) {
        this.$notify({
          title: 'Invalid',
          message: 'Cannot delete a mount',
          type: 'warning'
        });
        return;
      }

      // recursive deletion may come later, but not now
      if (path.endsWith('/')) {
        this.$notify({
          title: 'Invalid',
          message: 'Cannot delete a path',
          type: 'warning'
        });
        return;
      }

      // request deletion of secret
      this.$http.delete('/api/secrets?path=' + path, {
        headers: { 'X-CSRF-Token': this.csrf }
      }).then(function (response) {
        _this4.$notify({
          title: 'Success!',
          message: 'Secret deleted!',
          type: 'success'
        });
        _this4.editMode = false;

        if (_this4.currentPath === path) {
          // if deleting current secret, wipe table data
          _this4.tableData = [];
        } else {
          // if deleting a row, find it and remove it
          for (var i = 0; i < _this4.tableData.length; i++) {
            if (_this4.currentPath + _this4.tableData[i].path === path) {
              _this4.deleteItem(i);
            }
          }
        }
      }).catch(function (error) {
        _this4.$onError(error);
      });
    }

  }
});

/***/ }),

/***/ 804:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(676)();
// imports


// module
exports.push([module.i, ".button[data-v-44f23bd8]{margin:5px 0 0}.control .button[data-v-44f23bd8]{margin:inherit}.fa-times-circle[data-v-44f23bd8],.fa-trash-o[data-v-44f23bd8]{color:red}", "", {"version":3,"sources":["/data/serverless-cms-admin/client/views/secrets/index.vue"],"names":[],"mappings":"AACA,yBACE,cAAgB,CACjB,AACD,kCACE,cAAgB,CACjB,AAID,+DACE,SAAW,CACZ","file":"index.vue","sourcesContent":["\n.button[data-v-44f23bd8] {\n  margin: 5px 0 0;\n}\n.control .button[data-v-44f23bd8] {\n  margin: inherit;\n}\n.fa-trash-o[data-v-44f23bd8] {\n  color: red;\n}\n.fa-times-circle[data-v-44f23bd8] {\n  color: red;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 829:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(804);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(677)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-44f23bd8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-44f23bd8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 857:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('div', {
    staticClass: "box is-clearfix"
  }, [_c('div', {
    staticClass: "columns"
  }, [_c('div', {
    staticClass: "column is-fullwidth"
  }, [_c('div', {
    staticClass: "field has-addons"
  }, [_c('p', {
    staticClass: "control"
  }, [_c('a', {
    staticClass: "button is-medium is-primary is-paddingless is-marginless",
    on: {
      "click": function($event) {
        _vm.changePathUp()
      }
    }
  }, [_vm._m(0)])]), _vm._v(" "), _c('p', {
    staticClass: "control is-expanded"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: (_vm.currentPath),
      expression: "currentPath",
      modifiers: {
        "lazy": true
      }
    }],
    staticClass: "input is-medium is-expanded",
    attrs: {
      "type": "text",
      "placeholder": "Enter the path of a secret or directory"
    },
    domProps: {
      "value": (_vm.currentPath)
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.changePath(_vm.currentPath)
      },
      "change": function($event) {
        _vm.currentPath = $event.target.value
      }
    }
  })])])])]), _vm._v(" "), (_vm.editMode === false && _vm.currentPathType === 'Secret') ? _c('a', {
    staticClass: "button is-success is-small is-marginless",
    on: {
      "click": _vm.startEdit
    }
  }, [_vm._v("\n            Edit Secret\n          ")]) : _vm._e(), _vm._v(" "), (_vm.editMode === false && _vm.currentPathType === 'Secret') ? _c('a', {
    staticClass: "button is-danger is-small is-marginless",
    on: {
      "click": function($event) {
        _vm.deleteSecret(_vm.currentPath)
      }
    }
  }, [_vm._v("\n            Delete Secret\n          ")]) : _vm._e(), _vm._v(" "), (_vm.editMode === true && _vm.currentPathType === 'Secret') ? _c('a', {
    staticClass: "button is-success is-small is-marginless",
    on: {
      "click": _vm.saveEdit
    }
  }, [_vm._v("\n            Save Secret\n          ")]) : _vm._e(), _vm._v(" "), (_vm.editMode === false && _vm.currentPathType === 'Path') ? _c('a', {
    staticClass: "button is-info is-small is-marginless",
    on: {
      "click": _vm.startEdit
    }
  }, [_vm._v("\n            Add Secret\n          ")]) : _vm._e(), _vm._v(" "), (_vm.editMode === true) ? _c('a', {
    staticClass: "button is-warning is-small is-marginless",
    on: {
      "click": _vm.cancelEdit
    }
  }, [_vm._v("\n            Cancel Edit\n          ")]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "tag is-danger is-unselectable is-pulled-right"
  }, [_vm._v("Mount")]), _vm._v(" "), _c('span', {
    staticClass: "tag is-primary is-unselectable is-pulled-right"
  }, [_vm._v("Path")]), _vm._v(" "), _c('span', {
    staticClass: "tag is-info is-unselectable is-pulled-right"
  }, [_vm._v("Secret")]), _vm._v(" "), _c('span', {
    staticClass: "tag is-success is-unselectable is-pulled-right"
  }, [_vm._v("Key")])]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table is-striped is-narrow"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("Type")]), _vm._v(" "), _vm._l((_vm.tableHeaders), function(header) {
    return _c('th', [_vm._v(_vm._s(header))])
  })], 2)]), _vm._v(" "), _c('tbody', [_vm._l((_vm.tableData), function(entry, index) {
    return _c('tr', [_c('td', {
      attrs: {
        "width": "68"
      }
    }, [_c('span', {
      staticClass: "tag is-pulled-left",
      class: _vm.type(index)
    }, [_vm._v("\n                    " + _vm._s(entry.type) + "\n                  ")])]), _vm._v(" "), (_vm.editMode && _vm.currentPathType === 'Secret') ? _c('td', [_c('p', {
      staticClass: "control"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (entry.path),
        expression: "entry.path"
      }],
      staticClass: "input is-small",
      attrs: {
        "type": "text",
        "placeholder": ""
      },
      domProps: {
        "value": (entry.path)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          entry.path = $event.target.value
        }
      }
    })])]) : _c('td', [_c('a', {
      on: {
        "click": function($event) {
          _vm.changePath(_vm.currentPath, entry)
        }
      }
    }, [_vm._v("\n                    " + _vm._s(entry.path) + "\n                  ")])]), _vm._v(" "), (_vm.editMode && _vm.currentPathType === 'Secret') ? _c('td', [_c('p', {
      staticClass: "control"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (entry.desc),
        expression: "entry.desc"
      }],
      staticClass: "input is-small",
      attrs: {
        "type": "text",
        "placeholder": ""
      },
      domProps: {
        "value": (entry.desc)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          entry.desc = $event.target.value
        }
      }
    })])]) : _c('td', [_vm._v("\n                  " + _vm._s(entry.desc) + "\n                ")]), _vm._v(" "), _c('td', {
      attrs: {
        "width": "68"
      }
    }, [(_vm.editMode && _vm.currentPathType === 'Secret') ? _c('a', {
      on: {
        "click": function($event) {
          _vm.deleteItem(index)
        }
      }
    }, [_vm._m(1, true)]) : _vm._e(), _vm._v(" "), (_vm.currentPathType === 'Path' && entry.type === 'Secret') ? _c('a', {
      on: {
        "click": function($event) {
          _vm.deleteSecret(_vm.currentPath + entry.path)
        }
      }
    }, [_vm._m(2, true)]) : _vm._e()])])
  }), _vm._v(" "), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.editMode && _vm.currentPathType === 'Secret'),
      expression: "editMode && currentPathType === 'Secret'"
    }],
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.addKeyValue()
      }
    }
  }, [_c('td', {
    attrs: {
      "width": "68"
    }
  }), _vm._v(" "), _c('td', [_c('p', {
    staticClass: "control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newKey),
      expression: "newKey"
    }],
    staticClass: "input is-small",
    class: [
      _vm.newKey === '' ? '' : 'is-success',
      _vm.newKeyExists ? 'is-danger' : ''
    ],
    attrs: {
      "type": "text",
      "placeholder": "Add a key"
    },
    domProps: {
      "value": (_vm.newKey)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newKey = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('td', [_c('p', {
    staticClass: "control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newValue),
      expression: "newValue"
    }],
    staticClass: "input is-small",
    class: [_vm.newValue === '' ? '' : 'is-success'],
    attrs: {
      "type": "text",
      "placeholder": "Add a value"
    },
    domProps: {
      "value": (_vm.newValue)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newValue = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('tr', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.editMode && _vm.currentPathType === 'Path'),
      expression: "editMode && currentPathType === 'Path'"
    }],
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.addSecret()
      }
    }
  }, [_c('td', {
    attrs: {
      "width": "68"
    }
  }), _vm._v(" "), _c('td', [_c('p', {
    staticClass: "control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newKey),
      expression: "newKey"
    }],
    staticClass: "input is-small",
    class: [
      _vm.newKey === '' ? '' : 'is-success',
      _vm.newKeyExists ? 'is-danger' : ''
    ],
    attrs: {
      "type": "text",
      "placeholder": "Add a new secret"
    },
    domProps: {
      "value": (_vm.newKey)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newKey = $event.target.value
      }
    }
  })])])])], 2), _vm._v(" "), _c('tfoot', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tableData.length > 10),
      expression: "tableData.length > 10"
    }]
  }, [_c('tr', [_c('th', [_vm._v("Type")]), _vm._v(" "), _vm._l((_vm.tableHeaders), function(header) {
    return _c('th', [_vm._v(_vm._s(header))])
  })], 2)])])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "icon is-paddingless is-marginless"
  }, [_c('i', {
    staticClass: "fa fa-angle-up is-paddingless is-marginless"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "fa fa-times-circle"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "fa fa-trash-o"
  })])
}]}

/***/ })

});
//# sourceMappingURL=5.js.map