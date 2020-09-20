import axios from './axios.js'

export function getCheckStuNum(data) {
    return axios({

        method: 'post',
        url: '/cat_registration_war_exploded/userInfo/selectInfoByNumber', //根据学号
        data: data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            // 'Content-Type': 'application/json',
        }
    })
}

export function getSubmit(data) {
    return axios({
        method: 'post',
        url: '/cat_registration_war_exploded/userInfo/signUp',
        data: data,
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            // 'Content-Type': 'application/json',
        }
    })
}

export function headSubmit(upload) {
    return axios({
        method: 'post',
        url: '/cat_registration_war_exploded/userInfo/uploadPhoto',
        data: upload,
        headers: {
            'Content-Type': 'multipart/form-data',
            // 'Content-Type': 'application/json',
        }
    })
}

// let https = {
//     get(url, params) {
//         return new Promise((resolve, reject) => {
//             axios.get(url, {
//                 params: params
//             }).then(res => {
//                 resolve(res.data);
//             }).catch(err => {
//                 reject(err.data)
//             })
//         })
//     },
//     post(url, params, json) {
//         let headers = {},
//             data;
//         headers['Content-type'] = 'application/json';
//         data = json ? params : qs.stringify(params);
//         return new Promise((resolve, reject) => {
//             axios.post(url, data, { headers: headers })
//                 .then(res => {
//                     resolve(res.data);
//                 })
//                 .catch(err => {
//                     reject(err.data)
//                 })
//         })
//     }
// }
// export default https;

export class StuDetail {
    constructor(data) {
        this.adoptChecked = data.adoptChecked
        this.appointTime = data.appointTime
        this.clazz = data.clazz
        this.collage = data.collage
        this.dirSummary = data.dirSummary
        this.direction = data.direction
        this.head = data.head
        this.introduce = data.introduce
        this.isObey = data.isObey
        this.major = data.major
        this.name = data.name
        this.stage = data.stage
        this.stuNumber = data.stuNumber
    }
}