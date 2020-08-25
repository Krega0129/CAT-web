"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jsToFormData = jsToFormData;

function jsToFormData(config) {
  //对象转formdata格式
  var formData = new FormData();
  var obj = config.data;
  var arrayKey = config.arrayKey;

  for (var i in obj) {
    if (isArray(obj[i])) {
      obj[i].map(function (item) {
        if (!arrayKey) {
          formData.append(i, item);
        } else {
          formData.append(i + '[]', item);
        }
      });
    } else if (obj[i] instanceof FileList) {
      //filelist 文件类型的处理
      for (var fileItem = 0; fileItem < obj[i].length; fileItem++) {
        if (!arrayKey) {
          formData.append(i, obj[i].item(fileItem));
        } else {
          formData.append(i + '[]', obj[i].item(fileItem));
        }
      }
    } else {
      formData.append(i, obj[i]);
    }
  }

  return formData;
}