import axios from 'axios';
import { message } from 'antd';
import './mock.js';

export default function Ajax(url, data = {}, type) {
    return new Promise((resolve, rejet) => {
        let Promise;
        if (type === 'GET') {
            Promise = axios.get(url)
        } else {
            Promise = axios.post(url, {
                params: data
            })
        }
        Promise.then((response) => {
            resolve(response);
        }).catch((error) => {
            message.error("数据请求异常！")
        })
    })

}