import axios from './search.js'

export function setNewTime(data) {
    return axios({
        method: 'post',
        url: '/cat_registration_war_exploded/manager/setAppoint',
        data: data,
        headers: {
            /* "Content-Type": "multipart/form-data" */
            'Content-Type': 'application/json',
            /* 'Content-Type': 'application/x-www-form-urlencoded', */
        }
    })
}