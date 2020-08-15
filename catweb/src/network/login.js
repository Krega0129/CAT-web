import axios from 'axios'
/* axios.defaults.baseURL = 'http://127.0.0.1:8000/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; */

export function loginPost(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
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