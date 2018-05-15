webpackJsonp([7],{

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(835)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(776),
  /* template */
  __webpack_require__(863),
  /* scopeId */
  "data-v-7170d3b4",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['format', 'name', 'width', 'value'],
  data() {
    return {
      date: this.value,
      hideCal: true,
      activePort: null,
      timeStamp: new Date(),
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      days: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      monthIndex: 0,
      hourIndex: 0,
      minuteIndex: 0,
      year: 2017,
      portsHolder: [],
      minute: '00',
      hour: '01',
      day: 1,
      minuteSelectorVisible: false,
      hourSelectorVisible: false,
      period: 'AM'
    };
  },
  methods: {
    leftMonth() {
      let index = this.months.indexOf(this.month);
      if (index === 0) {
        this.monthIndex = 11;
      } else {
        this.monthIndex = index - 1;
      }
      this.updateCalendar();
    },
    rightMonth() {
      let index = this.months.indexOf(this.month);
      if (index === 11) {
        this.monthIndex = 0;
      } else {
        this.monthIndex = index + 1;
      }
      this.updateCalendar();
    },
    rightYear() {
      this.year++;
      this.updateCalendar();
    },
    leftYear() {
      this.year--;
      this.updateCalendar();
    },
    updateCalendar() {
      let me = this;
      let date = new Date(me.year, me.monthIndex, 1, 0, 0, 0);
      let day = date.getDay();
      let daysInMonth = new Date(me.year, me.monthIndex + 1, 0).getDate();
      let ports = [];
      let portsLenght = 35;
      if (day === 6 || day === 5 && daysInMonth === 31) {
        portsLenght = 42;
      }
      let activeFound = false;
      for (let i = 0; i < portsLenght; i++) {
        let j = i - day;
        let curr = j < 0 || j >= daysInMonth ? '' : j + 1;
        ports.push(curr);
        if (curr === me.day && this.timeStamp.getMonth() === me.monthIndex && this.timeStamp.getFullYear() === me.year) {
          me.activePort = i;
          activeFound = true;
        }
      }
      if (!activeFound) {
        me.activePort = -1;
      }
      this.ports = ports;
    },
    setDay(index, port) {
      if (port !== '') {
        this.activePort = index;
        this.day = port;
        this.timeStamp = new Date(this.year, this.monthIndex, this.day);
      }
    },
    setMinute(index, closeAfterSet) {
      this.minuteIndex = index;
      this.minute = this.minutes[index];
      if (closeAfterSet) {
        this.minuteSelectorVisible = false;
      }
    },
    setHour(index, closeAfterSet) {
      this.hourIndex = index;
      this.hour = this.hours[index];
      if (closeAfterSet) {
        this.hourSelectorVisible = false;
      }
    },
    showHourSelector() {
      this.hourSelectorVisible = true;
      this.minuteSelectorVisible = false;
    },
    showMinuteSelector() {
      this.minuteSelectorVisible = true;
      this.hourSelectorVisible = false;
    },
    keyIsDown(event) {
      let key = event.which || event.keycode;
      if (key === 38) {
        if (this.minuteSelectorVisible && this.minuteIndex > 0) {
          this.setMinute(this.minuteIndex - 1, false);
          this.scrollTopMinute();
        } else if (this.hourSelectorVisible && this.hourIndex > 0) {
          this.setHour(this.hourIndex - 1, false);
          this.scrollTopHour();
        }
      } else if (key === 40) {
        if (this.minuteSelectorVisible && this.minuteIndex < this.minutes.length - 1) {
          this.setMinute(this.minuteIndex + 1, false);
          this.scrollTopMinute();
        } else if (this.hourSelectorVisible && this.hourIndex < this.hours.length - 1) {
          this.setHour(this.hourIndex + 1, false);
          this.scrollTopHour();
        }
      } else if (key === 13) {
        this.minuteSelectorVisible = false;
        this.hourSelectorVisible = false;
      }
      if (this.minuteSelectorVisible || this.hourSelectorVisible) {
        event.preventDefault();
        this.minuteSelectorVisible = false;
        this.hourSelectorVisible = false;
      }
    },
    scrollTopMinute() {
      let mHeight = this.$refs.minuteScroller.scrollHeight;
      let wHeight = this.$refs.minuteScrollerWrapper.clientHeight;
      let top = mHeight * (this.minuteIndex / (this.minutes.length - 1)) - wHeight / 2;
      this.$refs.minuteScroller.scrollTop = top;
    },
    scrollTopHour() {
      let mHeight = this.$refs.hourScroller.scrollHeight;
      let wHeight = this.$refs.hourScrollerWrapper.clientHeight;
      let top = mHeight * (this.hourIndex / (this.hours.length - 1)) - wHeight / 2;
      this.$refs.hourScroller.scrollTop = top;
    },
    changePeriod() {
      this.period = this.period === 'AM' ? 'PM' : 'AM';
    },
    calendarClicked(event) {
      if (event.target.id !== 'j-hour' && event.target.id !== 'j-minute') {
        this.minuteSelectorVisible = false;
        this.hourSelectorVisible = false;
      }
      event.cancelBubble = true;
      if (event.stopPropagation) {
        event.stopPropagation();
      }
    },
    documentClicked(event) {
      if (event.target.id !== 'tj-datetime-input') {
        this.hideCal = true;
      }
    },
    toggleCal() {
      this.hideCal = !this.hideCal;
    },
    setDate() {
      let d = null;
      if (!this.dateFormat) {
        console.error('Invalid date format supplied');
      } else {
        let h = this.hour + '';
        if (h === '12') {
          if (this.period === 'AM') {
            h = '00';
          } else {
            h = '12';
          }
        } else if (this.period === 'PM') {
          h = parseInt(h) + 12;
          h = '' + h;
        }
        d = this.dateFormat;
        d = d.replace('YYYY', this.year);
        d = d.replace('DD', this.day < 10 ? '0' + this.day : this.day);
        let m = this.monthIndex + 1;
        d = d.replace('MM', m < 10 ? '0' + m : m);
        this.minute += '';
        d = d.replace('h', h.length < 2 ? '0' + h : '' + h);
        d = d.replace('i', this.minute.length < 2 ? '0' + this.minute : '' + this.minute);
        d = d.replace('s', '00');
        this.$emit('input', d);
        this.date = d;
        this.hideCal = true;
      }
    }
  },
  created() {
    if (this.value) {
      try {
        this.timeStamp = new Date(this.value);
      } catch (e) {}
    }
    this.year = this.timeStamp.getFullYear();
    this.monthIndex = this.timeStamp.getMonth();
    this.day = this.timeStamp.getDate();
    this.hour = this.timeStamp.getHours();
    this.hour = this.hour < 10 ? '0' + this.hour : '' + this.hour;
    this.minute = this.timeStamp.getMinutes();
    this.minute = this.minute < 10 ? '0' + this.minute : '' + this.minute;
    this.updateCalendar();
    document.addEventListener('keydown', this.keyIsDown);
    document.addEventListener('click', this.documentClicked);
    this.setDate();
  },
  watch: {
    value(newVal, oldVal) {
      if (newVal) {
        this.value = newVal;
        try {
          this.timeStamp = new Date(this.value);
        } catch (e) {}
      }
      this.year = this.timeStamp.getFullYear();
      this.monthIndex = this.timeStamp.getMonth();
      this.day = this.timeStamp.getDate();
      this.hour = this.timeStamp.getHours();
      this.hour = this.hour < 10 ? '0' + this.hour : '' + this.hour;
      this.minute = this.timeStamp.getMinutes();
      this.minute = this.minute < 10 ? '0' + this.minute : '' + this.minute;
      this.updateCalendar();
      this.setDate();
    }
  },
  destroyed: function () {
    document.removeEventListener('keydown', this.keyIsDown);
    document.removeEventListener('click', this.documentClicked);
  },
  computed: {
    ports: {
      get: function () {
        let p = [];
        if (this.portsHolder.length === 0) {
          for (let i = 0; i < 42; i++) {
            p.push('');
          }
        } else {
          p = this.portsHolder;
        }
        return p;
      },
      set: function (newValue) {
        this.portsHolder = newValue;
      }
    },
    month() {
      return this.months[this.monthIndex];
    },
    dateTime() {
      return this.timeStamp.getFullYear() + '-' + (this.timeStamp.getMonth() + 1) + '-' + this.timeStamp.getUTCDay();
    },
    minutes() {
      let arr = [];
      for (let i = 0; i < 60; i++) {
        i < 10 ? arr.push('0' + i) : arr.push('' + i);
      }
      return arr;
    },
    hours() {
      let arr = [];
      for (let i = 1; i <= 12; i++) {
        i < 10 ? arr.push('0' + i) : arr.push('' + i);
      }
      return arr;
    },
    dateFormat() {
      let f = 'YYYY-MM-DD h:i:s';
      let allowedFormats = ['YYYY-MM-DD h:i:s', 'DD-MM-YYYY h:i:s', 'MM-DD-YYYY h:i:s', 'YYYY-MM-DD', 'DD-MM-YYYY', 'MM-DD-YYYY', 'YYYY/MM/DD', 'DD/MM/YYYY', 'MM/DD/YYYY', 'h:i:s', 'YYYY/MM/DD h:i:s', 'DD/MM/YYYY h:i:s', 'MM/DD/YYYY h:i:s'];
      if (this.format) {
        f = this.format;
      }
      if (allowedFormats.indexOf(f) < 0) {
        console.warn('Invalid date format supplied');
        return null;
      } else {
        return f;
      }
    },
    hideTime() {
      return this.dateFormat.indexOf('h:i:s') === -1;
    },
    hideDate() {
      return this.dateFormat === 'h:i:s';
    }
  }
});

/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_bulma_tooltip__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuejs_datetimepicker__ = __webpack_require__(843);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuejs_datetimepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuejs_datetimepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_TreeView__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_TreeView___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_TreeView__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_layout___ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_plekan_plekan_vue__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_plekan_plekan_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_components_plekan_plekan_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_plekan_fileUpload__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_plekan_fileUpload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_components_plekan_fileUpload__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



// import moment from 'moment'





// import Modal from './modals/InfoModalWidget'
// import Vue from 'vue'

// import Modal from './modals/InfoModal'

// const querystring = require('querystring')

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Tooltip: __WEBPACK_IMPORTED_MODULE_0_vue_bulma_tooltip__["a" /* default */],
    datetime: __WEBPACK_IMPORTED_MODULE_1_vuejs_datetimepicker___default.a,
    TreeView: __WEBPACK_IMPORTED_MODULE_2_components_TreeView___default.a,
    // Modal,
    Sidebarblogs: __WEBPACK_IMPORTED_MODULE_3_components_layout___["g" /* Sidebarblogs */],
    plekan: __WEBPACK_IMPORTED_MODULE_5_components_plekan_plekan_vue___default.a,
    fileUpload: __WEBPACK_IMPORTED_MODULE_6_components_plekan_fileUpload___default.a
  },

  data: function data() {
    return {
      csrf: '',
      isSaving: false,
      showModal: false,
      plaintext: '',
      tmpItem: {},
      newTitle: null,
      fileName: null,
      selectedObject: null,
      type: 'Static',
      selectedPage: null,
      actionPending: false,
      cipher: '',
      showRightSideBar: false,
      userTransitKey: '',
      extra: '?editMode=widget&apiPort=8081&jsPort=8091',
      editing: false,
      chart: []
    };
  },

  mounted: function mounted() {
    var self = this;
    this.$store.state.app.topbar.show = true;
    this.$store.commit('deleteAllRows', 0, 1);

    this.$bus.$on('previewWebsite', function (data) {
      if (window.vm.$store.state.app.selectedItem) {
        var item = window.vm.$store.state.app.selectedItem.item;
        if (item) {
          var tmpLink = item.link;
          if (item.link.startsWith('//') || item.link.startsWith('http://') || item.link.startsWith('https://')) {
            tmpLink = item.link.substring(item.link.indexOf('/', 8));
          }
          if (tmpLink.endsWith('/')) {
            tmpLink = tmpLink.substring(0, tmpLink.lastIndexOf('/'));
          }
          var selectedLangItem = self.$store.state.app.languages.languagesHash[self.$store.state.app.languageSelected];
          window.previewWebsiteSent = -1;
          var urlTemp = window.goHostUrl + item.link;
          if (self.$store.state.app.language === selectedLangItem.languagename) {
            // This is default language, do not add the /{langcode} prefix

            // TODO: Find better implementation ...
            if (!self.$store.state.app.website) {
              urlTemp = urlTemp.replace('//localhost:1313', '').replace(':8081/', ':1313/'); // our gohugo link contains the whole url which is bad..
            }
            window.open(urlTemp, '_blank');
          } else {
            // TODO: Find better implementation ...
            urlTemp = window.goHostUrl + '/' + selectedLangItem.id + item.link;
            if (!self.$store.state.app.website) {
              urlTemp = urlTemp.replace('//localhost:1313', '').replace(':8081/', ':1313/'); // our gohugo link contains the whole url which is bad..
            }
            window.open(urlTemp, '_blank');
          }
        }
      }
    });

    this.$bus.$on('TOGGLE_ADVANCED_SETTINGS', function (data) {
      if (self.selectedPost && !self.inPostCreate && !self.postDoesNotExists && self.isPostSelected && !self.postDoesNotExists) {
        self.showRightSideBar = !self.showRightSideBar;
      }
    });

    this.$bus.$on('staticHtmlSelected', function (data) {
      self.selectedObject = data;
      self.showModal = true;
    });

    this.$bus.$on('UNDRAFT', function (data) {
      //  SAVE
      data.draft = false;
      this.$bus.$emit('SAVE_CMD', data);
      // self.selectPost({ vue: this, item: data, retry: 5 })
    });

    this.$bus.$on('staticHtmlEdit', function (data) {
      self.selectedPage = window.apiHost + '/widgetedit/' + data.original.Path + self.extra + '&widget=' + data.original.Path;
    });

    this.$bus.$on('NO_DATA_FOUND', function (data) {});

    this.$bus.$on('SAVE_CMD', function (data) {
      var d = document.getElementsByTagName('iframe')[0].contentWindow.document;
      // TODO: use somehting else than contenteditable ? ie: editor-content ?
      if ($(d).find('[contenteditable=true]').length !== 1) {
        return;
      }
      var markDownValue = window.vm.turndownService.turndown($(d).find('[contenteditable=true]')[0].innerHTML);
      if (!(window.vm.$store.state.app.selectedItem && window.vm.$store.state.app.selectedItem.item)) {
        return;
      }
      var item = window.vm.$store.state.app.selectedItem.item;
      var tmpLink = item.link;
      if (item.link.startsWith('//') || item.link.startsWith('http://') || item.link.startsWith('https://')) {
        tmpLink = item.link.substring(item.link.indexOf('/', 8));
      }
      if (tmpLink.endsWith('/')) {
        tmpLink = tmpLink.substring(0, tmpLink.lastIndexOf('/'));
      }
      var selectedLangItem = self.$store.state.app.languages.languagesHash[window.vm.$store.state.app.languageSelected];
      markDownValue = markDownValue.replace('<br>', '\\n').replace('<br/>', '\\n');
      var dtStringDate = item.pubDate;
      try {
        var arr = item.pubDate.split(/\/|\s|:/); // split string and create array.
        var dt = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]); // decrease month value by 1
        dtStringDate = dt.toISOString();
      } catch (e) {
        this.$notify({
          title: 'Invalid date.',
          message: 'Could not update, date was invalid.',
          type: 'danger'
        });
        return;
      }

      var updateData = {
        type: 'blogs',
        id: tmpLink,
        title: item.title,
        frontMatter: JSON.parse(JSON.stringify(item.frontMatter)),
        draft: item.draft === 'true',
        delete: item.delete === 'true',
        date: dtStringDate,
        lang: selectedLangItem.id,
        content: markDownValue
      };
      delete updateData.frontMatter.title;
      delete updateData.frontMatter.draft;
      delete updateData.frontMatter.date;
      delete updateData.frontMatter.pubDate;

      // TODO: modiy the httpAction to be a .delete instead of a .put if (updateData.delete)
      // better REST API

      var httpApiAction = self.$httpApi.put;
      httpApiAction(window.apiUrl + '/content/update', updateData, {
        // headers: {'TmpHeader': 'tmp'}
      }).then(function (response) {
        // TODO: Find a better way ie: ajax polling.. check for E-Tag change up to X times?
        // well we actually did a force rebuild in hugo
        // setTimeout(function () {

        var basicAuth = self.$store.getters.getBasicAuth;
        self.$httpApi.get(window.apiUrl + '/git?action=pull&loc=nav&ts=1', {
          headers: {
            'Authorization': basicAuth,
            'Token': window.vueAuth.getToken()
          }
        }).then(function (response) {
          self.$store.commit('REPO_STATE_UPATE', 0); // all good
          if (response.data.Extra === 'pending') {
            self.$store.commit('REPO_STATE_PENDING', 1); // all good
          } else {
            self.$store.commit('REPO_STATE_PENDING', 0); // all good
          }
          window.vm.$store.commit('REFRESH_SETTINGS', self.$store.state); // {projectId: state.app.projectId, websiteId: state.app.websiteId})

          setTimeout(function () {
            self.selectPost(window.vm.$store.state.app.selectedItem);
            self.$notify({
              title: 'Saved.',
              message: 'Successfully saved your new awesome content.',
              type: 'success'
            });
          }, 1000);
        }).catch(function (error) {
          setTimeout(function () {
            self.selectPost(window.vm.$store.state.app.selectedItem);
            self.$notify({
              title: 'Saved.',
              message: 'Successfully saved your new awesome content.',
              type: 'success'
            });
          }, 1000);
          console.error(error);
        });

        // }, 1000)
      }).catch(function (error) {
        // self.actionPending = false
        self.$onError(error);
      });
    });

    this.$bus.$on('LANGUAGE_CHANGE_EVENT', function (data) {
      // TODO: Validate no pending changes ?

      // Refresh selected post link ( it will get the proper language item)
      var tmpItem = self.$store.state.app.selectedItem;
      if (tmpItem) {
        var itm = tmpItem.item;

        var link = itm.link;
        var selectedLangItem = self.$store.state.app.languages.languagesHash[self.$store.state.app.languageSelected];
        var langCode = '' + selectedLangItem.id;
        if (self.$store.state.app.language === self.$store.state.app.languageSelected) {
          langCode = ''; // no prefix, this is the default site...
        }

        var type = 'blogs';
        if (link.indexOf('localhost:') >= 0 && link.indexOf('localhost:') <= 8) {
          link = link.replace('localhost:1313/', '');
        } else {
          // link = link // link = window.goHostUrl + langPrefix + link
        }
        while (link.startsWith('//')) {
          link = link.substring(1);
        }
        if (link.startsWith('/' + type + '/')) {
          link = link.substring(('/' + type + '/').length);
        }
        while (link.endsWith('/')) {
          link = link.substring(0, link.length - 1);
        }

        self.$httpApi.post(window.apiUrl + '/frontmatter?blog=1', { type: type, id: link, lang: langCode }, {}).then(function (res) {
          window.vm.$store.state.app.selectedItem.item['frontMatter'] = {};
          for (var p in res.data) {
            if (res.data.hasOwnProperty(p)) {
              if (p === 'title' || p === 'pubDate' || p === 'date' || p === 'draft') {
                if (p === 'date') {
                  window.vm.$store.state.app.selectedItem.item['pubDate'] = res.data[p];
                }
                window.vm.$store.state.app.selectedItem.item[p] = res.data[p];
              } else {
                window.vm.$store.state.app.selectedItem.item['frontMatter'][p] = res.data[p];
              }
            }
          }
          self.selectPost(window.vm.$store.state.app.selectedItem); // window.vm.$store.state.app.selectedItem)
          // self.refreshData() // refresh left sidebar...
        }).catch(function (error) {
          self.$onError(error);
        });
      } else {
        self.refreshData(); // refresh left sidebar...
      }
    });
    this.refreshData();
  },
  destroyed: function destroyed() {
    this.$bus.$off('LANGUAGE_CHANGE_EVENT');
    // this.$bus.$off('SITE_PAGE_CHANGE_EVENT')
    this.$bus.$off('TOGGLE_ADVANCED_SETTINGS');
    this.$bus.$off('NO_DATA_FOUND');
    this.$bus.$off('SAVE_CMD');
    this.$bus.$off('UNDRAFT');

    this.$bus.$off('previewWebsite');
  },
  computed: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_vuex__["mapGetters"])({
    session: 'session',
    github: 'github',
    pkginfo: 'pkg',
    sidebarblogData: 'sidebarblogData',
    sidebartwo: 'sidebartwo',
    repoState: 'repoState',
    selectedPost: 'selectedPost'
  }), {
    isDefaultLang: function isDefaultLang() {
      var self = this;
      if (self.$store.state.app.languageSelected) {
        var selectedLangItem = self.$store.state.app.languages.languagesHash[self.$store.state.app.languageSelected];
        if (self.$store.state.app.language === selectedLangItem.languagename) {
          // This is default language, do not add the /{langcode} prefix
          return true;
        }
        return false;
      }
      return false;
    },
    currentImage: function currentImage() {
      if (this.selectedPost && this.selectedPost.frontMatter && this.selectedPost.frontMatter.image) {
        return window.goHostUrl + '/' + this.selectedPost.frontMatter.image;
      }
      return null;
    },
    shortName: function shortName() {
      var result = (this.newTitle || '').replace(/[^a-zA-Z0-9\-\s]/g, '') // Remove non alphanum except whitespace
      .replace(/--+/, '-').replace(/^\s+|\s+$/, ' ') // Remove leading and trailing whitespace
      .replace(/\s+/g, '-') // Replace (multiple) whitespaces with a dash
      .replace(/-$/, '').replace(/-$/, '').replace(/-$/, '').toLowerCase();
      return result;
    },
    titleFromShortName: function titleFromShortName() {
      var result = this.fileNameValidator().replace(/-/g, ' ');
      return result;
    },

    selectedLanguage: function selectedLanguage() {
      return this.$store.state.app.languageSelected;
    },
    blogPostEnterLang: function blogPostEnterLang() {
      if (this.$store.state.app.languageSelected === 'Francais') {
        return 'Inscrivez les informations pour votre article...';
      } else if (this.$store.state.app.languageSelected === 'English') {
        return 'Please enter your post informations...';
      } else if (this.$store.state.app.languageSelected === 'Deutsch' || this.$store.state.app.languageSelected === 'German') {
        return 'Bitte geben Sie Ihre Post Informationen ein ...';
      }

      // default
      return 'Please enter your blog informations...';
    },
    titlePlaceHolder: function titlePlaceHolder() {
      if (this.$store.state.app.languageSelected === 'Francais') {
        return 'Inscrivez le titre de votre post.';
      } else if (this.$store.state.app.languageSelected === 'English') {
        return 'Enter your post title here.';
      } else if (this.$store.state.app.languageSelected === 'Deutsch' || this.$store.state.app.languageSelected === 'German') {
        return 'Ihr Eintrag Geben Sie hier den Titel der';
      }

      // default
      return 'Enter your post title here.';
    },
    isPostSelected: function isPostSelected() {
      if (this.$store.state.app.selectedItem === null) {
        self.showRightSideBar = null;
      }
      return this.$store.state.app.selectedItem !== null;
    },
    inPostCreate: function inPostCreate() {
      return this.$store.state.app.createItem;
    },
    postDoesNotExists: function postDoesNotExists() {
      return '' + this.$store.state.app.nodata === 'true';
    }
  }),

  events: {
    incrementTotal: function incrementTotal() {}
  },

  methods: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_vuex__["mapActions"])(['selectPost']), {
    deletePost: function deletePost() {},
    deleteAllLangPost: function deleteAllLangPost() {
      var self = this;
      this.isSaving = true;
      this.selectedPost.delete = 'true';
      // this.$store.state.app.topbar.selectedPost.delete = true
      this.$bus.$emit('SAVE_CMD');
      setTimeout(function () {
        this.$bus.$emit('TOGGLE_ADVANCED_SETTINGS'); // hide sidebar ...
        self.isSaving = false;
        self.$store.state.app.selectedItem = null;
        self.refreshData();
      }, 1500);
    },
    updatePage: function updatePage(imgData) {
      var self = this;
      this.isSaving = true;
      this.$bus.$emit('SAVE_CMD');
      setTimeout(function () {
        self.$bus.$emit('TOGGLE_ADVANCED_SETTINGS'); // hide sidebar ...
        self.isSaving = false;
      }, 600);
    },
    fileChange: function fileChange(imgData) {
      this.selectedPost.frontMatter['image'] = imgData.data.RelPath;
    },
    hideRightBar: function hideRightBar() {
      this.$bus.$emit('TOGGLE_ADVANCED_SETTINGS');
    },
    fileNameValidator: function fileNameValidator() {
      try {
        var result = (this.fileName || this.shortName).replace(/[^a-zA-Z0-9\-\s]/g, '') // Remove non alphanum except whitespace
        .replace(/--+/, '-').replace(/^\s+|\s+$/, ' ') // Remove leading and trailing whitespace
        .replace(/\s+/g, '-') // Replace (multiple) whitespaces with a dash
        .toLowerCase();
        this.fileName = result;
        return result;
      } catch (ff) {}
    },
    create: function create(newOrUpdate, type) {
      if (this.actionPending) {
        return;
      }

      var self = this;

      var fileToCreate = null;
      var action = 'new';
      var tmpId = '';
      if (newOrUpdate === 'newLang') {
        action = 'newlang';
        var item = window.vm.$store.state.app.selectedItem.item;
        var tmpLink = item.link;
        if (item.link.startsWith('//') || item.link.startsWith('http://') || item.link.startsWith('https://')) {
          tmpLink = item.link.substring(item.link.indexOf('/', 8));
        }
        if (tmpLink.endsWith('/')) {
          tmpLink = tmpLink.substring(0, tmpLink.lastIndexOf('/'));
        }
        fileToCreate = tmpLink; // includes the /{type}/
        tmpId = fileToCreate;
      } else {
        fileToCreate = this.fileNameValidator();
        tmpId = '/' + type + '/' + fileToCreate;
      }
      var selectedLangItem = this.$store.state.app.languages.languagesHash[window.vm.$store.state.app.languageSelected];
      var postData = {
        type: type,
        title: this.newTitle,
        lang: selectedLangItem.id,
        filename: fileToCreate,
        id: tmpId
      };

      if (!postData.title || postData.title === '') {
        postData.title = this.titleFromShortName;
      }
      self.actionPending = true;
      var httpApiAction = this.$httpApi.post;
      if (newOrUpdate === 'update') {
        httpApiAction = this.$httpApi.put;
      }

      // action = new, or newlang
      httpApiAction(window.apiUrl + '/content/' + action, postData, {
        // headers: {'TmpHeader': 'tmp'}
      }).then(function (response) {
        var newPost = {
          pubDate: 'Now',
          title: postData.title,
          draft: true
        };
        if (action === 'new') {
          newPost['guid'] = '/' + type + '/' + postData.filename;
          newPost['link'] = '/' + type + '/' + postData.filename;
        } else {
          // newlang
          newPost['guid'] = postData.id;
          newPost['link'] = postData.id;
        }

        // Select the post for editing..
        // Lets give 500 milliseconds...
        return setTimeout(function () {
          self.actionPending = false;

          // TODO: Should be better implementation
          // self.refreshData() // refresh left sidebar...

          // TODO: Should be better implementation
          setTimeout(function () {
            // if (action === 'new') {
            // only add the post to the sidebar object if new post not new language
            // refresh latest data..
            var tmpLink = newPost.link;
            if (tmpLink.startsWith('/blogs/')) {
              tmpLink = tmpLink.substring(7);
            }
            self.$httpApi.post(window.apiUrl + '/frontmatter?blog=2', { type: 'blogs', id: tmpLink, lang: newPost.lang }, {}).then(function (res) {
              var curItem = {};

              // curItem['link'] = window.goHostUrl + newPost.link
              curItem['link'] = newPost.link; // ACE Fixed march

              curItem['guid'] = window.goHostUrl + newPost.link;
              // curItem['id'] = window.goHostUrl + tmpLink
              // newPost.link
              // window.goHostUrl
              curItem['frontMatter'] = {};
              for (var p in res.data) {
                if (res.data.hasOwnProperty(p)) {
                  if (p === 'title' || p === 'pubDate' || p === 'date' || p === 'draft') {
                    if (p === 'date') {
                      curItem['pubDate'] = res.data[p];
                    }
                    curItem[p] = res.data[p];
                  } else {
                    curItem['frontMatter'][p] = res.data[p];
                  }
                }
              }
              curItem['pubDate'] = curItem['pubDate'] || curItem['date']; // pubDate required for sidebar...

              var retryCount = 5;
              if (!(newOrUpdate === 'newLang')) {
                // only adding a new language here, do not add another row to the blog list
                retryCount = 0; // no need to retry selecting it, notbe created
                self.$store.state.app.sidebarblogData.json.unshift(curItem);
              }
              self.$notify({
                title: 'Success',
                message: 'Creation successful',
                type: 'success'
              });

              self.selectPost({ vue: self, item: curItem, retry: retryCount });
            }).catch(function (error) {
              self.$onError(error);
            });
            // } else {
            //    self.selectPost({ vue: this, item: newPost, retry: 5 })
            // }
          });
        }, 1000);

        // Returned statement in setTimeout
      }).catch(function (error) {
        self.actionPending = false;
        self.$onError(error);
      });
    },
    refreshData: function refreshData() {
      var _this = this;

      var self = this;
      if (!this.$store.state.app.isLoaded) {
        return setTimeout(function () {
          self.refreshData();
        }, 1000);
      }

      // TOOD: Add an option for the /language prefix?
      this.$httpApi.get(window.goHostUrl + '/blogs/index.xml', {
        responseType: 'document'
      }).then(function (response) {
        if (response.data) {
          var jsObj = JSON.parse(JSON.parse(JSON.stringify(window.xml2json(response.data.childNodes[0].children[0])).replace('undefined', '')));
          _this.$store.commit('TOGGLE_SIDEBAR_BLOGDATA', true);
          _this.$store.commit('TOGGLE_BLOGDATA', jsObj.channel.item);
        } else {
          // no data
          _this.$store.commit('TOGGLE_BLOGDATA', []);
        }
      }).catch(function (error) {
        if (error && error.response) {
          if (error.response.status === 404) {
            // no data
            return _this.$store.commit('TOGGLE_BLOGDATA', []);
          }
        }
        _this.$onError(error);
      });
    },
    close: function close() {
      this.showModal = false;
    },
    createWidget: function createWidget(obj) {
      var _this2 = this;

      var filetmp = obj.folder;
      var filepath = filetmp;
      var ctr = 0;
      while (filetmp[ctr++] === '/') {
        filepath = filetmp.substring(1);
      }

      filetmp = obj.filename;
      var file = filetmp;
      ctr = 0;
      while (filetmp[ctr++] === '/') {
        file = filetmp.substring(1);
      }

      var postData = {
        filename: file,
        path: filepath,
        type: 'widget',
        headers: obj.headers
      };

      var self = this;
      this.$httpApi.post(window.apiUrl + '/widgetupload', postData, {
        // headers: {'TmpHeader': 'tmp'}
      }).then(function (response) {
        self.refreshData();
        self.close();
        self.$notify({
          title: 'Success',
          message: 'Creation successful',
          type: 'success'
        });
        _this2.selectedPage = window.goHostUrl + '/' + postData.path + '/' + postData.filename + self.extra;
      }).catch(function (error) {
        self.close();
        self.$onError(error);
      });
    },
    editObj: function editObj(obj) {},
    closeModalBasic: function closeModalBasic() {
      this.selectedIndex = -1;
      this.showModal = false;
    },

    clearPlaintext: function clearPlaintext() {
      this.plaintext = '';
    },
    clearCipher: function clearCipher() {
      this.cipher = '';
    },
    isRepoError: function isRepoError() {
      return this.repoState.updating >= 5;
    },


    changeKey: function changeKey() {
      this.editing = true;
    }
  })
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),

/***/ 795:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(676)();
// imports


// module
exports.push([module.i, ".year-month-wrapper[data-v-06fe1628]{background-color:#ed4d00}input[data-v-06fe1628]{min-width:226px;width:100%;height:30px;padding:3px;border:1px solid #ddd}.datetime-picker[data-v-06fe1628]{position:relative}.calender-div[data-v-06fe1628]{width:232px;box-shadow:1px 2px 5px #ccc;position:absolute;display:inline-block;left:0;top:40px;color:#444;font-size:14px;padding-bottom:10px}.days[data-v-06fe1628],.port[data-v-06fe1628]{display:inline-block;width:25px;height:20px;padding:3px;margin:1px;text-align:center;vertical-align:top;cursor:pointer}.days[data-v-06fe1628],.port[data-v-06fe1628]:hover{color:#ed4d00;font-weight:700}.activePort[data-v-06fe1628],.activePort[data-v-06fe1628]:hover{background-color:#ed4d00;color:#fff}.month-setter[data-v-06fe1628],.year-setter[data-v-06fe1628]{margin:0 1px;width:48.2%;color:#fff;font-weight:900;display:inline-block}.nav-l[data-v-06fe1628]:hover,.nav-r[data-v-06fe1628]:hover{background-color:#dc3c00}.nav-l[data-v-06fe1628],.nav-r[data-v-06fe1628]{display:inline-block;width:25px;background-color:#ed4d00;color:#fff;font-size:16px;cursor:pointer;border:0;padding:7px;margin:0}.nav-l[data-v-06fe1628]{float:left}.nav-r[data-v-06fe1628]{float:right}.month[data-v-06fe1628],.year[data-v-06fe1628]{width:40px;text-align:right;display:inline-block;color:#fff;padding:7px 0}.hour-selector[data-v-06fe1628],.minute-selector[data-v-06fe1628]{width:30px;display:inline-block;text-align:center;font-weight:700;position:relative;cursor:pointer}.time-separator[data-v-06fe1628]{display:inline-block;font-weight:700}.time-picker[data-v-06fe1628]{margin:10px}.nav-d[data-v-06fe1628],.nav-t[data-v-06fe1628]{font-weight:700;cursor:pointer}.scroll-hider[data-v-06fe1628]{display:none;vertical-align:top;overflow:hidden;border:0;position:absolute;top:-40px;left:0;box-shadow:0 0 3px #333;background-color:#fff}.scroll-hider ul[data-v-06fe1628]{padding:5px;margin:-5px -13px -5px -5px;list-style-type:none;height:100px;overflow:auto;width:55px;color:#999;overflow-x:hidden}.showSelector[data-v-06fe1628]{display:inline-block}li.active[data-v-06fe1628]{background-color:#ed4d00;color:#fff}li[data-v-06fe1628]{padding:4px;font-size:16px;width:100%;cursor:pointer}.time-picker[data-v-06fe1628]{display:inline-block}.noDisplay[data-v-06fe1628]{display:none}.okButton[data-v-06fe1628]{color:#ed4d00;font-size:15px;font-weight:700;padding:0;float:right;border:0;margin-right:10px;margin-top:10px;cursor:pointer;background:transparent}", "", {"version":3,"sources":["/data/node_modules/vuejs-datetimepicker/src/datetime_picker.vue"],"names":[],"mappings":"AACA,qCACE,wBAA0B,CAC3B,AACD,uBACE,gBAAiB,AACjB,WAAW,AACX,YAAa,AACb,YAAa,AACb,qBAAuB,CACxB,AACD,kCACE,iBAAmB,CACpB,AACD,+BACE,YAAa,AACb,4BAA6B,AAC7B,kBAAmB,AACnB,qBAAsB,AACtB,OAAQ,AACR,SAAU,AACV,WAAY,AACZ,eAAgB,AAChB,mBAAqB,CACtB,AACD,8CACE,qBAAsB,AACtB,WAAY,AACZ,YAAa,AACb,YAAa,AACb,WAAY,AACZ,kBAAmB,AACnB,mBAAoB,AACpB,cAAgB,CACjB,AAKD,oDACE,cAAe,AACf,eAAkB,CACnB,AACD,gEACE,yBAA0B,AAC1B,UAAa,CACd,AACD,6DACE,aAAc,AACd,YAAa,AACb,WAAa,AACb,gBAAiB,AACjB,oBAAsB,CACvB,AACD,4DACE,wBAA0B,CAC3B,AACD,gDACE,qBAAsB,AACtB,WAAY,AACZ,yBAA0B,AAC1B,WAAa,AACb,eAAgB,AAChB,eAAgB,AAChB,SAAU,AACV,YAAa,AACb,QAAS,CACV,AACD,wBACE,UAAY,CACb,AACD,wBACE,WAAa,CACd,AACD,+CACE,WAAY,AACZ,iBAAkB,AAClB,qBAAsB,AACtB,WAAa,AACb,aAAe,CAChB,AAGD,kEACE,WAAY,AACZ,qBAAsB,AACtB,kBAAmB,AACnB,gBAAkB,AAClB,kBAAmB,AACnB,cAAgB,CACjB,AACD,iCACE,qBAAsB,AACtB,eAAkB,CACnB,AACD,8BACE,WAAY,CACb,AACD,gDACE,gBAAkB,AAClB,cAAgB,CACjB,AACD,+BACE,aAAc,AACd,mBAAmB,AACnB,gBAAgB,AAChB,SAAS,AACT,kBAAmB,AACnB,UAAW,AACX,OAAQ,AACR,wBAAyB,AACzB,qBAAwB,CACzB,AACD,kCACE,YAAY,AACZ,4BAA4B,AAC5B,qBAAsB,AACtB,aAAc,AACd,cAAe,AACf,WAAW,AACX,WAAY,AACZ,iBAAmB,CACpB,AACD,+BACE,oBAAqB,CACtB,AACD,2BACE,yBAA0B,AAC1B,UAAa,CACd,AACD,oBACE,YAAa,AACb,eAAgB,AAChB,WAAY,AACZ,cAAgB,CACjB,AACD,8BACE,oBAAsB,CACvB,AACD,4BACE,YAAc,CACf,AACD,2BACE,cAAe,AACf,eAAgB,AAChB,gBAAkB,AAClB,UAAW,AACX,YAAa,AACb,SAAU,AACV,kBAAmB,AACnB,gBAAiB,AACjB,eAAgB,AAChB,sBAAwB,CACzB","file":"datetime_picker.vue","sourcesContent":["\n.year-month-wrapper[data-v-06fe1628]{\n  background-color: #ed4d00;\n}\ninput[data-v-06fe1628]{\n  min-width: 226px;\n  width:100%;\n  height: 30px;\n  padding: 3px;\n  border: 1px solid #ddd;\n}\n.datetime-picker[data-v-06fe1628]{\n  position: relative;\n}\n.calender-div[data-v-06fe1628]{\n  width: 232px;\n  box-shadow: 1px 2px 5px #ccc;\n  position: absolute;\n  display: inline-block;\n  left: 0;\n  top: 40px;\n  color: #444;\n  font-size: 14px;\n  padding-bottom: 10px;\n}\n.port[data-v-06fe1628], .days[data-v-06fe1628]{\n  display: inline-block;\n  width: 25px;\n  height: 20px;\n  padding: 3px;\n  margin: 1px;\n  text-align: center;\n  vertical-align: top;\n  cursor: pointer;\n}\n.days[data-v-06fe1628]{\n  color: #ed4d00;\n  font-weight: bold;\n}\n.port[data-v-06fe1628]:hover{\n  color: #ed4d00;\n  font-weight: bold;\n}\n.activePort[data-v-06fe1628], .activePort[data-v-06fe1628]:hover {\n  background-color: #ed4d00;\n  color: white;\n}\n.month-setter[data-v-06fe1628], .year-setter[data-v-06fe1628]{\n  margin: 0 1px;\n  width: 48.2%;\n  color: white;\n  font-weight: 900;\n  display: inline-block;\n}\n.nav-l[data-v-06fe1628]:hover, .nav-r[data-v-06fe1628]:hover {\n  background-color: #dc3c00;\n}\n.nav-l[data-v-06fe1628], .nav-r[data-v-06fe1628] {\n  display: inline-block;\n  width: 25px;\n  background-color: #ed4d00;\n  color: white;\n  font-size: 16px;\n  cursor: pointer;\n  border: 0;\n  padding: 7px;\n  margin:0;\n}\n.nav-l[data-v-06fe1628]{\n  float: left;\n}\n.nav-r[data-v-06fe1628]{\n  float: right;\n}\n.month[data-v-06fe1628], .year[data-v-06fe1628]{\n  width: 40px;\n  text-align: right;\n  display: inline-block;\n  color: white;\n  padding: 7px 0;\n}\n.headers>span[data-v-06fe1628]{\n}\n.hour-selector[data-v-06fe1628], .minute-selector[data-v-06fe1628]{\n  width: 30px;\n  display: inline-block;\n  text-align: center;\n  font-weight: bold;\n  position: relative;\n  cursor: pointer;\n}\n.time-separator[data-v-06fe1628]{\n  display: inline-block;\n  font-weight: bold;\n}\n.time-picker[data-v-06fe1628]{\n  margin: 10px\n}\n.nav-t[data-v-06fe1628], .nav-d[data-v-06fe1628]{\n  font-weight: bold;\n  cursor: pointer;\n}\n.scroll-hider[data-v-06fe1628] {\n  display: none;\n  vertical-align:top;\n  overflow:hidden;\n  border:0;\n  position: absolute;\n  top: -40px;\n  left: 0;\n  box-shadow: 0 0 3px #333;\n  background-color: white;\n}\n.scroll-hider ul[data-v-06fe1628] {\n  padding:5px;\n  margin:-5px -13px -5px -5px;\n  list-style-type: none;\n  height: 100px;\n  overflow: auto;\n  width:55px;\n  color: #999;\n  overflow-x: hidden;\n}\n.showSelector[data-v-06fe1628]{\n  display:inline-block;\n}\nli.active[data-v-06fe1628]{\n  background-color: #ed4d00;\n  color: white;\n}\nli[data-v-06fe1628]{\n  padding: 4px;\n  font-size: 16px;\n  width: 100%;\n  cursor: pointer;\n}\n.time-picker[data-v-06fe1628]{\n  display: inline-block;\n}\n.noDisplay[data-v-06fe1628]{\n  display: none;\n}\n.okButton[data-v-06fe1628]{\n  color: #ed4d00;\n  font-size: 15px;\n  font-weight: bold;\n  padding: 0;\n  float: right;\n  border: 0;\n  margin-right: 10px;\n  margin-top: 10px;\n  cursor: pointer;\n  background: transparent;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 810:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(676)();
// imports


// module
exports.push([module.i, ".padleft[data-v-7170d3b4]{//:relative;left:0;top:0;height:300px;-ms-flex-positive:0;flex-grow:0;min-height:300px;width:90%}.app-inner-content[data-v-7170d3b4]{height:100%;margin-top:13px}.button[data-v-7170d3b4]{margin:5px 0 0}.fullheight[data-v-7170d3b4]{height:100%;min-height:100%}.control .button[data-v-7170d3b4]{margin:inherit}.fa-trash-o[data-v-7170d3b4]{color:red}.fa-info[data-v-7170d3b4]{color:#87cefa}.float-right[data-v-7170d3b4]{float:right}.rightSide[data-v-7170d3b4]{position:fixed;width:50%;height:100%;background-color:#f2f2f2;right:-50%;padding:10px;top:105px;border-left:1px solid #ddd;transition:all .3s;z-index:12;box-shadow:0 3px 78px 0 rgba(0,0,0,.1)}.rightSide.active[data-v-7170d3b4]{right:0;//:2}.animated[data-v-7170d3b4]{animation-duration:.377s}.scrollable[data-v-7170d3b4]{//:scroll}.hideme[data-v-7170d3b4]{display:none}", "", {"version":3,"sources":["/data/serverless-cms-admin/client/views/blogs/index.vue"],"names":[],"mappings":"AACA,0BACE,YAAsB,AACtB,OAAS,AACT,MAAQ,AACR,aAAa,AACb,oBAAqB,AACjB,YAAa,AACjB,iBAAiB,AACjB,SAAU,CACX,AACD,oCACI,YAAa,AACb,eAAiB,CACpB,AACD,yBACE,cAAgB,CACjB,AACD,6BACE,YAAa,AACb,eAAgB,CACjB,AACD,kCACE,cAAgB,CACjB,AACD,6BACE,SAAW,CACZ,AACD,0BACE,aAAoB,CACrB,AACD,8BACE,WAAa,CACd,AACD,4BACI,eAAgB,AAChB,UAAW,AACX,YAAa,AACb,yBAA0B,AAC1B,WAAY,AACZ,aAAc,AACd,UAAW,AACX,2BAA4B,AAC5B,mBAAoB,AACpB,WAAY,AACZ,sCAAgD,CACnD,AACD,mCACE,QAAW,AACX,IAAc,CACf,AACD,2BACI,wBAA0B,CAC7B,AACD,6BACE,SAAsB,CACvB,AACD,yBACE,YAAc,CACf","file":"index.vue","sourcesContent":["\n.padleft[data-v-7170d3b4] {\n  // position: relative;\n  left:0px;\n  top:0px;\n  height:300px;\n  -ms-flex-positive: 0;\n      flex-grow: 0;\n  min-height:300px;\n  width:90%;\n}\n.app-inner-content[data-v-7170d3b4] {\n    height: 100%;\n    margin-top: 13px;\n}\n.button[data-v-7170d3b4] {\n  margin: 5px 0 0;\n}\n.fullheight[data-v-7170d3b4] {\n  height: 100%;\n  min-height:100%;\n}\n.control .button[data-v-7170d3b4] {\n  margin: inherit;\n}\n.fa-trash-o[data-v-7170d3b4] {\n  color: red;\n}\n.fa-info[data-v-7170d3b4] {\n  color: lightskyblue;\n}\n.float-right[data-v-7170d3b4] {\n  float: right;\n}\n.rightSide[data-v-7170d3b4] {\n    position: fixed;\n    width: 50%;\n    height: 100%;\n    background-color: #f2f2f2;\n    right: -50%;\n    padding: 10px;\n    top: 105px;\n    border-left: 1px solid #ddd;\n    transition: all .3s;\n    z-index: 12;\n    box-shadow: 0px 3px 78px 0px rgba(0, 0, 0, 0.1);\n}\n.rightSide.active[data-v-7170d3b4] {\n  right: 0px;\n  // z-index: 2;\n}\n.animated[data-v-7170d3b4] {\n    animation-duration: .377s;\n}\n.scrollable[data-v-7170d3b4] {\n  // overflow-y: scroll;\n}\n.hideme[data-v-7170d3b4] {\n  display: none;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 820:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(795);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(677)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js?sourceMap!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-06fe1628\",\"scoped\":true,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0!./datetime_picker.vue", function() {
			var newContent = require("!!../../css-loader/index.js?sourceMap!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-06fe1628\",\"scoped\":true,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0!./datetime_picker.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 835:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(810);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(677)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7170d3b4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7170d3b4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 843:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(820)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(766),
  /* template */
  __webpack_require__(846),
  /* scopeId */
  "data-v-06fe1628",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 846:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "datetime-picker",
    style: ({
      width: _vm.width
    }),
    on: {
      "click": function($event) {
        _vm.calendarClicked($event)
      }
    }
  }, [_c('div', [_c('input', {
    attrs: {
      "type": "text",
      "id": "tj-datetime-input",
      "name": _vm.name,
      "autocomplete": "off"
    },
    domProps: {
      "value": _vm.date
    },
    on: {
      "click": _vm.toggleCal
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "calender-div",
    class: {
      noDisplay: _vm.hideCal
    }
  }, [_c('div', {
    class: {
      noDisplay: _vm.hideDate
    }
  }, [_c('div', {
    staticClass: "year-month-wrapper"
  }, [_c('div', {
    staticClass: "month-setter"
  }, [_c('button', {
    staticClass: "nav-l",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.leftYear
    }
  }, [_vm._v("<")]), _vm._v(" "), _c('span', {
    staticClass: "year"
  }, [_vm._v(_vm._s(_vm.year))]), _vm._v(" "), _c('button', {
    staticClass: "nav-r",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.rightYear
    }
  }, [_vm._v(">")])]), _vm._v(" "), _c('div', {
    staticClass: "month-setter"
  }, [_c('button', {
    staticClass: "nav-l",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.leftMonth
    }
  }, [_vm._v("<")]), _vm._v(" "), _c('span', {
    staticClass: "month"
  }, [_vm._v(_vm._s(_vm.month))]), _vm._v(" "), _c('button', {
    staticClass: "nav-r",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.rightMonth,
      "mousedown": function($event) {}
    }
  }, [_vm._v(">")])])]), _vm._v(" "), _c('div', {
    staticClass: "headers"
  }, _vm._l((_vm.days), function(port, index) {
    return _c('span', {
      staticClass: "days"
    }, [_vm._v(_vm._s(port))])
  })), _vm._v(" "), _c('div', _vm._l((_vm.ports), function(port, index) {
    return _c('span', {
      staticClass: "port",
      class: {
        activePort: index === _vm.activePort
      },
      on: {
        "click": function($event) {
          _vm.setDay(index, port)
        }
      }
    }, [_vm._v(_vm._s(port))])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "time-picker",
    class: {
      noDisplay: _vm.hideTime
    }
  }, [_c('div', {
    staticClass: "hour-selector"
  }, [_c('div', {
    attrs: {
      "id": "j-hour"
    },
    on: {
      "click": _vm.showHourSelector
    }
  }, [_vm._v(_vm._s(_vm.hour))]), _vm._v(" "), _c('div', {
    ref: "hourScrollerWrapper",
    staticClass: "scroll-hider",
    class: {
      showSelector: _vm.hourSelectorVisible
    }
  }, [_c('ul', {
    ref: "hourScroller"
  }, _vm._l((_vm.hours), function(h, index) {
    return _c('li', {
      class: {
        active: index == _vm.hourIndex
      },
      on: {
        "click": function($event) {
          _vm.setHour(index, true)
        }
      }
    }, [_vm._v(_vm._s(h))])
  }))])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "minute-selector"
  }, [_c('div', {
    attrs: {
      "id": "j-minute"
    },
    on: {
      "click": _vm.showMinuteSelector
    }
  }, [_vm._v(_vm._s(_vm.minute))]), _vm._v(" "), _c('div', {
    ref: "minuteScrollerWrapper",
    staticClass: "scroll-hider",
    class: {
      showSelector: _vm.minuteSelectorVisible
    }
  }, [_c('ul', {
    ref: "minuteScroller"
  }, _vm._l((_vm.minutes), function(m, index) {
    return _c('li', {
      class: {
        active: index == _vm.minuteIndex
      },
      on: {
        "click": function($event) {
          _vm.setMinute(index, true)
        }
      }
    }, [_vm._v(_vm._s(m))])
  }))])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "minute-selector"
  }, [_c('div', {
    on: {
      "click": _vm.changePeriod
    }
  }, [_vm._v(_vm._s(_vm.period))])])]), _vm._v(" "), _c('button', {
    staticClass: "okButton",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.setDate
    }
  }, [_vm._v("OK")])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "time-separator"
  }, [_c('span', [_vm._v(":")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "time-separator"
  }, [_c('span', [_vm._v(":")])])
}]}

/***/ }),

/***/ 863:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app-inner-content"
  }, [_c('div', {
    staticClass: "fullheight"
  }, [_c('sidebarblogs', {
    attrs: {
      "jsonData": _vm.sidebarblogData.json,
      "show": _vm.sidebarblogData.loaded
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "plekan-outerdiv tile is-ancestor is-vertical fullheight"
  }, [_c('article', {
    staticClass: "tile is-child box",
    class: {
      hidden: _vm.isPostSelected
    }
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Select a post post from the left menu, or click on Create new post.")])]), _vm._v(" "), _c('article', {
    staticClass: "tile is-child box",
    class: {
      hideme: !_vm.isPostSelected || _vm.inPostCreate, hidden: ((_vm.isPostSelected && !_vm.postDoesNotExists))
    }
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("This Post doesn't have this language created yet.")]), _vm._v(" "), _c('button', {
    staticClass: "button is-info",
    on: {
      "click": function($event) {
        _vm.create('newLang', 'blogs')
      }
    }
  }, [_vm._v("Create Draft")])]), _vm._v(" "), _c('article', {
    staticClass: "tile is-child box",
    class: {
      hidden: !_vm.inPostCreate
    }
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v(_vm._s(_vm.blogPostEnterLang))]), _vm._v(" "), _c('label', {
    staticClass: "label"
  }, [_vm._v("Current Language: " + _vm._s(_vm.selectedLanguage))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "field has-addons"
  }, [_c('p', {
    staticClass: "control is-expanded"
  }, [_c('span', [_vm._v("File Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.fileName),
      expression: "fileName"
    }],
    attrs: {
      "type": "text",
      "placeholder": _vm.shortName
    },
    domProps: {
      "value": (_vm.fileName)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.fileName = $event.target.value
      }, function($event) {
        _vm.fileNameValidator()
      }]
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _vm._m(0)])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('button', {
    staticClass: "button is-info",
    attrs: {
      "disabled": _vm.actionPending
    },
    on: {
      "click": function($event) {
        _vm.create('new', 'blogs')
      }
    }
  }, [_vm._v("Create Post")])]), _vm._v(" "), _c('div', {
    staticClass: "rightSide",
    class: {
      active: _vm.showRightSideBar
    }
  }, [_c('button', {
    staticClass: "button is-info float-right",
    on: {
      "click": _vm.hideRightBar
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c('article', {
    staticClass: "tile is-child box scrollable"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Title")]), _vm._v(" "), _c('div', {
    staticClass: "field has-addons"
  }, [_c('p', {
    staticClass: "control is-expanded"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.selectedPost.title),
      expression: "selectedPost.title"
    }],
    staticClass: "input",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.selectedPost.title)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.selectedPost.title = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('label', {
    staticClass: "label"
  }, [_vm._v("Description")]), _vm._v(" "), (_vm.selectedPost.frontMatter) ? _c('div', {
    staticClass: "field has-addons"
  }, [_c('p', {
    staticClass: "control is-expanded"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.selectedPost.frontMatter.description),
      expression: "selectedPost.frontMatter.description"
    }],
    staticClass: "input",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": (_vm.selectedPost.frontMatter.description)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.selectedPost.frontMatter.description = $event.target.value
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _c('br'), _vm._v(" "), _c('label', {
    staticClass: "label"
  }, [_vm._v("Post Date")]), _vm._v(" "), (_vm.selectedPost.frontMatter) ? _c('div', {
    staticClass: "field has-addons"
  }, [_c('p', {
    staticClass: "control is-expanded"
  }, [_c('datetime', {
    attrs: {
      "format": "YYYY/MM/DD h:i:s",
      "width": "300px"
    },
    on: {
      "update:date-value": function (val) { return _vm.dob = val; }
    },
    model: {
      value: (_vm.selectedPost.pubDate),
      callback: function($$v) {
        _vm.selectedPost.pubDate = $$v
      },
      expression: "selectedPost.pubDate"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c('br'), _vm._v(" "), _c('label', {
    staticClass: "label"
  }, [_vm._v("Cover Image")]), _vm._v(" "), _c('file-upload', {
    attrs: {
      "clean": true,
      "types": "png|jpg|jpeg|gif",
      "preventDrop": true,
      "origimage": _vm.currentImage,
      "elementItem": _vm.tmpItem,
      "fileChange": _vm.fileChange
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), (_vm.isDefaultLang) ? _c('button', {
    staticClass: "button is-danger float-let",
    attrs: {
      "disabled": _vm.isSaving
    },
    on: {
      "click": function($event) {
        _vm.deleteAllLangPost()
      }
    }
  }, [_vm._v("Delete Post (All Languages)")]) : _vm._e(), _vm._v(" "), (!_vm.isDefaultLang) ? _c('button', {
    staticClass: "button is-danger float-let",
    attrs: {
      "disabled": _vm.isSaving
    },
    on: {
      "click": function($event) {
        _vm.deleteAllLangPost()
      }
    }
  }, [_vm._v("Delete Post (Single Language)")]) : _vm._e(), _vm._v(" "), _c('button', {
    staticClass: "button is-info float-right",
    attrs: {
      "disabled": _vm.isSaving
    },
    on: {
      "click": function($event) {
        _vm.updatePage()
      }
    }
  }, [_vm._v("Update")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('br')], 1)]), _vm._v(" "), _c('plekan', {
    class: {
      hidden: _vm.inPostCreate || !_vm.isPostSelected || _vm.postDoesNotExists
    }
  })], 1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('small', [_vm._v("blogs/{filename}.{lang}.md "), _c('br'), _c('br'), _vm._v("lang.md will be appended to the filename")])
}]}

/***/ })

});
//# sourceMappingURL=7.js.map