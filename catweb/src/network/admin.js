import axios from './axios.js'

let managerToken = localStorage.getItem('managerToken');

export function getSearch(data) {
    return axios({
        method: 'post',
        url: '/cat_registration_war_exploded/manager/selectUser', //根据学号或名字
        data: data,
        headers: {
            'managerToken':managerToken,
            'Content-Type': 'application/x-www-form-urlencoded',
            //'Content-Type': 'application/json',
        }
    })
}

export class StuDetail {
    constructor(data) {
        this.adoptChecked = data.adoptChecked
        this.appointTime = data.appointTime
        this.clazz = data.clazz
        this.collage = data.collage
        this.dirSummary = data.dirSummary
        this.direction = data.direction
        this.head = data.head
        this.introduce = data.introduce
        this.isObey = data.isObey
        this.major = data.major
        this.name = data.name
        this.stage = data.stage
        this.stuNumber = data.stuNumber
    }
}