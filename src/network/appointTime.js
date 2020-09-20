import axios from './axios.js'

export function seeAppointTime(data) {
    return axios({
        method: 'post',
        url: '/cat_registration_war_exploded/appointTime/selectTime',
        data: data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            //'Content-Type': 'application/json',
        }
    })
}

export function appointTime(data) {
    return axios({
        method: 'post',
        url: '/cat_registration_war_exploded/appointTime/appointTime',
        data: data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            //'Content-Type': 'application/json',
        }
    })
}

export function cancelAppointTime(data) {
    return axios({
        method: 'post',
        url: '/cat_registration_war_exploded/appointTime/cancelAppoint',
        data: data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            //'Content-Type': 'application/json',
        }
    })
}

export function hadAppointTime(data) {
    return axios({
        method: 'post',
        url: '/cat_registration_war_exploded/appointTime/selectAppointedTime',
        data: data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            //'Content-Type': 'application/json',
        }
    })
}



// export function seeAppointTime(url, params) {
//   return new Promise((resolve, reject) => {
//     axios.get(url, params)
//       .then(response => {
//           resolve(response.data);
//       }, err => {
//           reject(err);
//       })
//       .catch((error) => {
//           reject(error)
//       })
//   })
// }

// export function appointTime(url, params) {
//   return new Promise((resolve, reject) => {
//     axios.post(url, params)
//       .then(response => {
//           resolve(response.data);
//       }, err => {
//           reject(err);
//       })
//       .catch((error) => {
//           reject(error)
//       })
//   })
// }

// export function cancelAppointTime(url, params) {
//   return new Promise((resolve, reject) => {
//     axios.post(url, params)
//       .then(response => {
//           resolve(response.data);
//       }, err => {
//           reject(err);
//       })
//       .catch((error) => {
//           reject(error)
//       })
//   })
// }