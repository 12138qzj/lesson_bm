//常量定义
import * as actionTypes_constants from './constants.js';

const defaultState = {
    recommendList: [],
    banners: [],
    enterLoading: true,
}


export default (state = defaultState, action) => {
    console.log("data", action);
    switch (action.type) {
        case actionTypes_constants.CHANGE_BANNER:
            return {...state, banners: action.data };
        case actionTypes_constants.CHANGE_RECOMMEND_LIST:
            return {...state, recommendList: action.data };
        case actionTypes_constants.CHANGE_ENTER_LOADING:
            return {...state, recommendList: action.data };
        default:
            return state;
    }
}