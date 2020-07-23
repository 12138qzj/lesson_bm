import axios from 'axios';


/**
 * axios.defaults.baseURL="http://192.168.1.1:5000";
 */

export const baseUrl = 'http://neteasecloudmusicapi.zhaoboy.com';

const axiosInstance = axios.create({
    baseURL: baseUrl
})

export { axiosInstance }