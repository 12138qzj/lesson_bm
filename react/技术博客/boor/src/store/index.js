// import { combineReducers } from 'redux-immutable';
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
// import thunk from 'redux-thunk';
import UserReducer from './reducers/user/User';
//将数据在reducers/home/index 取出
// console.log("HomeReducer", HomeReducer);
// console.log("HomeReducer", HomeReducer.length);
//combineReducers返回原生redux对象
const rootReducer = combineReducers({
    //数据合并管理
    user: UserReducer
})

export default createStore(rootReducer) //, applyMiddleware(thunk)