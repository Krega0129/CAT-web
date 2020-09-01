export function jsToFormData(config) { //对象转formdata格式
    let formData = new FormData();
    let obj = config.data;
    let arrayKey = config.arrayKey;
    for (var i in obj) {
        if (isArray(obj[i])) {
            obj[i].map(item => {
                if (!arrayKey) {
                    formData.append(i, item)
                } else {
                    formData.append(i + '[]', item)
                }
            })
        } else if (obj[i] instanceof FileList) {
            //filelist 文件类型的处理
            for (var fileItem = 0; fileItem < obj[i].length; fileItem++) {
                if (!arrayKey) {
                    formData.append(i, obj[i].item(fileItem))
                } else {
                    formData.append(i + '[]', obj[i].item(fileItem))
                }
            }
        } else {
            formData.append(i, obj[i])
        }
    }
    return formData;
}