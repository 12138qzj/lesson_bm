import * as actionTypes_constants from './constants.js';

import { getRecommendListRequest, getBannersRequest } from '../../../api/request/index.js';

export const changeRecommendList = (data) => {
    console.log(actionTypes_constants.CHANGE_RECOMMEND_LIST);
    return {
        type: actionTypes_constants.CHANGE_RECOMMEND_LIST,
        data: data,
    }

}

export const changeEnterLoading = (data) => {
    return {
        type: actionTypes_constants.CHANGE_ENTER_LOADING,
        data: data,
    }

}
export const changeBanners = (data) => {
    return {
        type: actionTypes_constants.CHANGE_BANNER,
        data: data,
    }

}

export const getRecommendList = () => {

    return (dispatch) => {

        try {
            getRecommendListRequest().then(data => {
                console.log("object,", data.data, changeRecommendList(data.data));
                console.log("dispatch", dispatch);
                const type = changeRecommendList(data.data)
                console.log("data", type);

                dispatch(type);
                // dispatch(changeEnterLoading(false)); //data--false/true
            }).then((res) => {
                console.log("object成功", res);
            })
        } catch (e) {
            console.log("数据请求报错", e);
        }

    }

}
export const getBanners = () => {

    return (dispatch) => {

        try {

            getBannersRequest().then(data => {

                console.log("getBannersRequest", data);
                // const action = changeBanners(data.data.banners)
                // dispatch(action);
                // dispatch(changeEnterLoading(false)); //data--false/true
            })
        } catch (e) {
            console.log("出错了轮播图数据", e);
        }


    }

}