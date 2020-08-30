import axios from './axios.js'

export function checkPro() {
    return axios({
        method: 'get',
        url: '/cat-registration/schedulePro/select',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            /* 'Content-Type': 'application/json', */
            /* "Content-Type": "multipart/form-data" */
        }
    })
}