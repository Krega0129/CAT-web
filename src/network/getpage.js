import axios from './search.js'

let managerToken = localStorage.getItem('managerToken');

export function getPageData(data) {
    return axios({
        method: 'post',
        url: '/cat_registration_war_exploded/manager/selectByStage',
        data: data,
        headers: {
            'managerToken':managerToken,
            /* 'Content-Type': 'application/x-www-form-urlencoded', */
            'Content-Type': 'application/json',
        }
    })
}


export function getStageDirection(data) {
    return axios({
        method: 'post',
        url: '/cat_registration_war_exploded/manager/selectByDirectionWithStage',
        data: data,
        headers: {
            'managerToken':managerToken,
            /* 'Content-Type': 'application/x-www-form-urlencoded', */
            'Content-Type': 'application/json',
        }
    })
}