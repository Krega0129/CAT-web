import axios from './search.js'
export function adminLogin(data) {
    return axios({
        method: 'post',
        url: '/cat_registration_war_exploded/manager/login',
        data: data,
        headers: {
            /* 'Content-Type': 'application/x-www-form-urlencoded', */
            'Content-Type': 'application/json',
        }
    })
}