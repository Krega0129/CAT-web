import axios from './axios.js'

export function getUserInfo() {
    return axios({
        method: 'get',
        url: '/cat-registration/userInfo/getSignUpInfo',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            /* 'Content-Type': 'application/json', */
            /* "Content-Type": "multipart/form-data" */
        }
    })
}