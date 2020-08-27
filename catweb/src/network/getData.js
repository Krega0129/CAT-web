import axios from './axios.js'
export function getData() {
    return axios({
        method: 'get',
        url: '/cat-registration/chartDate/selectDate',
        // data: data,
        // headers: {
        //     /* 'Content-Type': 'application/x-www-form-urlencoded', */
        //     'Content-Type': 'application/json',
        // }
    })
}