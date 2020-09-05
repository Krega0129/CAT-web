import axios from './axios.js'

/* export function setNewTime(data) {
    return axios({
        method: 'post',
        url: '/cat-registration/manager/setAppoint',
        data: data,
        headers: {
            
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
} */
export function deleteTime(data) {
    return axios({
        method: 'post',
        url: '/cat_registration_war_exploded/manager/delAppoint',
        data: data,
        headers: {
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