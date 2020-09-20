"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserInfo = getUserInfo;

var _axios = _interopRequireDefault(require("./axios.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getUserInfo() {
  return (0, _axios["default"])({
    method: 'get',
    url: '/cat_registration_war_exploded/userInfo/getSignUpInfo',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      /* 'Content-Type': 'application/json', */

      /* "Content-Type": "multipart/form-data" */

    }
  });
}