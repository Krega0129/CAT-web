import axios from './axios.js'

export function getPhoneCode(data) {
    return axios({
        method: 'post',
        url: '/cat-registration/sendCode',
        data: data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            /* 'Content-Type': 'application/json', */
            /* "Content-Type": "multipart/form-data" */
        }
    })
}

export function register(data) {
    return axios({
        method: 'post',
        url: '/cat-registration/insert',
        data: data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
}

export function login(data) {
    return axios({
        method: 'post',
        url: '/cat-registration/user/login',
        data: data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
}

export function judgeExistPhone(data) {
    return axios({
        method: 'post',
        url: '/cat-registration/selectByPhone',
        data: data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
}

export function judgeExistAccount(data) {
    return axios({
        method: 'post',
        url: '/cat-registration/selectByUsername',
        data: data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
}

export function phoneLogin(data) {
    return axios({
        method: 'post',
        url: '/cat-registration/loginByPhone',
        data: data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
}