import axios from './search.js'
export function getPageData(data) {
    return axios({
        method: 'post',
        url: '/cat_registration_war_exploded/manager/selectByStage',
        data: data,
        headers: {
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
            /* 'Content-Type': 'application/x-www-form-urlencoded', */
            'Content-Type': 'application/json',
        }
    })
}