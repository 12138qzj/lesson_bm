import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk'; //中间件 异步修改

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(combineReducers(reducers), composeEnhancers(
    //支持异步操作
    applyMiddleware(thunk)
))