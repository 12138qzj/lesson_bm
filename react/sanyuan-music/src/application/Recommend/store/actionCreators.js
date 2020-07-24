import * as actionTypes from './constants';

import { getRecommendListRequest, getBannersRequest } from '../../../api/request/index.js';

export const changeRecommendList = (data) => {
    return {
        type: actionTypes.CHANGE_RECOMMEND_LIST,
        data: data,
    }

}

export const changeEnterLoading = (data) => {
    return {
        type: actionTypes.CHANGE_ENTER_LOADING,
        data: data,
    }

}
export const changeBanners = (data) => {
    return {
        type: actionTypes.CHANGE_BANNER,
        data,
    }

}

export const getRecommendList = () => {

    return (dispatch) => {

        getRecommendListRequest().then(data => {
            console.log("object,", data.data);
            console.log("object,data", data);

            console.log("dispatch", dispatch);
            const type = changeRecommendList(data.data)
            console.log("data", type);

            dispatch(changeRecommendList(data.data));
            // dispatch(changeEnterLoading(false)); //data--false/true
        }).catch(() => {
            console.log("数据请求报错");
        })

    }

}
export const getBanners = () => {

    return (dispatch) => {

        try {

            getBannersRequest().then(data => {

                console.log("getBannersRequest", data);
                const action = changeBanners(data.data.banners)
                dispatch(action);
                // dispatch(changeEnterLoading(false)); //data--false/true
            })
        } catch (e) {
            console.log("出错了轮播图数据", e);
        }


    }

}