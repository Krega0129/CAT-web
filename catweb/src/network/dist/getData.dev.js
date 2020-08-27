"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = getData;

var _axios = _interopRequireDefault(require("./axios.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getData() {
  return (0, _axios["default"])({
    method: 'get',
    url: '/cat-registration/chartDate/selectDate' // data: data,
    // headers: {
    //     /* 'Content-Type': 'application/x-www-form-urlencoded', */
    //     'Content-Type': 'application/json',
    // }

  });
}