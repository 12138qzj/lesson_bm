//常量定义
import * as actionTypes from './constants.js';

const defaultState = {
    recommendList: [],
    banners: [],
    enterLoading: true,
}


export default (state = defaultState, action) => {
    console.log("data", action);
    switch (action.type) {
        case actionTypes.CHANGE_BANNER:
            return {...state, banners: action.data };
        case actionTypes.CHANGE_RECOMMEND_LIST:
            console.log("actionaction", action);
            return {...state, recommendList: action.data };
        case actionTypes.CHANGE_ENTER_LOADING:
            return {...state, enterLoading: action.data };
        default:
            return state;
    }
}