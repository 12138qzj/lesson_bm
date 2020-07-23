import { axiosInstance } from './ajax';


const data = {
    data: [{
        id: 1,
        title: "aaa"
    }]
}

export const getRecommendListRequest = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: [{
                    id: 1,
                    title: 'aaaaaa'
                }]
            })
        }, 1000)
    })
}

export const getBannersRequest = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: [{
                    id: 1,
                    title: 'aaaaaa'
                }]
            })
        }, 1000)
    })
}

export const getBanners = () => {
    return axiosInstance.get('/banner')
}