import axios from './axios.js'


let managerToken = localStorage.getItem('managerToken');

export function deleteTime(data) {
    return axios({
        method: 'post',
        url: '/cat_registration_war_exploded/manager/delAppoint',
        data: data,
        headers: {
            'managerToken':managerToken,
            /* "Content-Type": "multipart/form-data" */
            /* 'Content-Type': 'application/json', */
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
}

export function getTime() {
    return axios({
        method: 'get',
        url: '/cat_registration_war_exploded/appointTime/selectTime',
        headers: {
            'Content-Type': 'application/json',
            /* "Content-Type": "multipart/form-data" */
            /* 'Content-Type': 'application/x-www-form-urlencoded', */
        }
    })
}