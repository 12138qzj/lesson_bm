//常量定义
import * as actionTypes from './constants.js';

const defaultState = {
    recommendList: ["afe"]
}


export default (state = defaultState, action) => {
    switch (action.type) {
        default: return state;
    }
}