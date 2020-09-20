import axios from 'axios'
axios.defaults.baseURL = 'http://47.93.19.109:8080'

export function checkPro(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}