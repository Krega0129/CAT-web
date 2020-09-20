import axios from './search.js'

let managerToken = localStorage.getItem('managerToken');

export function passOrOut(data) {
    return axios({
        method: 'post',
        url: '/cat_registration_war_exploded/manager/updateAdoptChecked',
        data: data,
        headers: {
            'managerToken':managerToken,
            /* 'Content-Type': 'application/x-www-form-urlencoded', */
            'Content-Type': 'application/json',
        }
    })
}

export function sendInfo(data) {
    return axios({
        method: 'post',
        url: '/cat_registration_war_exploded/manager/updateContent',
        data: data,
        headers: {
            'managerToken':managerToken,
            /* 'Content-Type': 'application/x-www-form-urlencoded', */
            'Content-Type': 'application/json',
        }
    })
}