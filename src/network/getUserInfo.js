import axios from './axios.js'

export function getUserInfo() {
    return axios({
        method: 'get',
        url: '/cat_registration_war_exploded/userInfo/getSignUpInfo',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            /* 'Content-Type': 'application/json', */
            /* "Content-Type": "multipart/form-data" */
        }
    })
}