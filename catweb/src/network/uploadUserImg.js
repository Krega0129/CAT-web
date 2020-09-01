import axios from './axios.js'

export function uploadUserHead(data) {
    return axios({
        method: 'post',
        url: '/cat_registration_war_exploded/userInfo/uploadPhoto',
        data: data,
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded',
            /* 'Content-Type': 'application/json', */
            "Content-Type": "multipart/form-data"
        }
    })
}