"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _elementUi = _interopRequireDefault(require("element-ui"));

require("element-ui/lib/theme-chalk/index.css");

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

require("@/assets/css/base.css");

var _bus = _interopRequireDefault(require("./assets/js/bus"));

require("./assets/iconfont/iconfont.js");

require("./assets/iconfont/icon.css");

var _axios = _interopRequireDefault(require("axios"));

var _echarts = _interopRequireDefault(require("echarts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].prototype.$echarts = _echarts["default"];
_vue["default"].prototype.$bus = _bus["default"];
_vue["default"].prototype.$axios = _axios["default"];
_vue["default"].prototype.$store = _store["default"];
_vue["default"].config.productionTip = false;

_vue["default"].use(_elementUi["default"]);

new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');
window.addEventListener('resize', function () {
  document.body.style.width = 100 + 'vw';
  document.body.style.height = 100 + 'vh';
}, false);