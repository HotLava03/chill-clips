import config from '../../config.json'

export class Requester {
  run(endpoint, headers = {}) {
    headers.auth = window.localStorage.getItem('token')
    return fetch(`${config.url}/api/${endpoint}`, { headers: headers })
  }
}

export const requester = new Requester()
