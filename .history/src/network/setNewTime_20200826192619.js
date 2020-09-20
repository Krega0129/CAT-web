import axios from './search.js'
const token = sessionStorage.getItem('token')
export function setNewTime(data) {
    return axios({
        header: { Authorization: token }
        method: 'post',
        url: '/cat-registration/manager/setAppoint',
        data: data,
        headers: {
            /* "Content-Type": "multipart/form-data" */
            'Content-Type': 'application/json',
            /* 'Content-Type': 'application/x-www-form-urlencoded', */
        }
    })
}