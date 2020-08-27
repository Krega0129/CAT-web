"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = axios;

var _axios = _interopRequireDefault(require("axios"));

var _qs = _interopRequireDefault(require("qs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function axios(option) {
  return new Promise(function (resolve, reject) {
    // 1.创建axios的实例
    var instance = _axios["default"].create({
      withCredentials: true,
      baseURL: 'http://47.93.19.109:8080',
      timeout: 5000
    }); // 配置请求和响应拦截


    instance.interceptors.request.use(function (config) {
      // console.log('来到了request拦截success中');
      // 1.当发送网络请求时, 在页面中添加一个loading组件, 作为动画
      // 2.某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面
      // 3.对请求的参数进行序列化(看服务器是否需要序列化)
      if (_typeof(config.data) == 'object' && JSON.stringify(config.data).indexOf('{') == 0) {
        //判断变量m是不是json对象
        config.data = _qs["default"].stringify(config.data);
      }
      /* console.log(config.data); */
      // 4.等等


      return config;
    }, function (err) {
      // console.log('来到了request拦截failure中');
      return err;
    });
    instance.interceptors.response.use(function (response) {
      // console.log('来到了response拦截success中');
      return response.data;
    }, function (err) {
      console.log('来到了response拦截failure中');
      console.log(err);

      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            err.message = '请求错误';
            break;

          case 401:
            err.message = '未授权的访问';
            break;
        }
      }

      return err;
    }); // 2.传入对象进行网络请求

    instance(option).then(function (res) {
      resolve(res);
    })["catch"](function (err) {
      reject(err);
    });
  });
}