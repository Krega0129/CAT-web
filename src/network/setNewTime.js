import axios from './search.js'

let managerToken = localStorage.getItem('managerToken');

export function setNewTime(data) {
    return axios({
        method: 'post',
        url: '/cat_registration_war_exploded/manager/setAppoint',
        data: data,
        headers: {
            'managerToken':managerToken,
            /* "Content-Type": "multipart/form-data" */
            'Content-Type': 'application/json',
            /* 'Content-Type': 'application/x-www-form-urlencoded', */
        }
    })
}