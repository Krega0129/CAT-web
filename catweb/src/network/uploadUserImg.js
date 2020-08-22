import axios from 'axios'
axios.defaults.baseURL = 'http://121.41.229.2:8080'

export function uploadUserImg(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
          resolve(response.data);
      }, err => {
          reject(err);
      })
      .catch((error) => {
          reject(error)
      })
  })
}