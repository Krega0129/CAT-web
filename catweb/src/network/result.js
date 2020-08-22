import axios from './search.js'

export function passOrOut(data) {
    return axios({
        method: 'post',
        url: '/cat-registration/manager/updateAdoptChecked',
        data: data,
        headers: {
            /* 'Content-Type': 'application/x-www-form-urlencoded', */
            'Content-Type': 'application/json',
        }
    })
}

export function sendInfo(data) {
    return axios({
        method: 'post',
        url: '/cat-registration/manager/updateContent',
        data: data,
        headers: {
            /* 'Content-Type': 'application/x-www-form-urlencoded', */
            'Content-Type': 'application/json',
        }
    })
}