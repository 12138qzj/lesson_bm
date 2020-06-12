import axios from 'axios';

export default function Ajax(url, data = {}, type) {
    if (type === 'GET') {
        return axios.get(url, {
            params: data
        })
    } else {
        return axios.post(url, {
            params: data
        })
    }
}