import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk'; //中间件 异步修改

export default createStore(
    combineReducers(reducers), {
        from: '北京',
        to: '上海',
    },
    applyMiddleware(thunk)
)