// import combineReducers from 'redux-immutable';
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import HomeReducer from './reducers/home/index';
//将数据在reducers/home/index 取出
console.log("HomeReducer", HomeReducer);
console.log("HomeReducer", HomeReducer.length);
const rootReducer = combineReducers({
    //数据合并管理
    home: HomeReducer
})

export default createStore(rootReducer) //, applyMiddleware(thunk)