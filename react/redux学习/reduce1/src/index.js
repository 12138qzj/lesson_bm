import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers,applyMiddleware,compose} from 'redux';
import {get } from 'axios';
 

import thunk from 'redux-thunk';

//applyMiddleware 允许使用redux-thunk中间件
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//第一份reduce
const counterReducer=function(state={count:1},action){

  console.log("action ",action);

  switch(action.type){
    case "COUNT_ADD":
      //该位置是实现 count ++的类型操作
      return {
        ...state,
        count:state.count+1
      }
      // break;
    case "COUNT_REDUCE":
      //该位置是实现 count ++的类型操作
      return {
        ...state,
        count:state.count-1
      }
    default:

      return state;
      // break;
  }
  
  return state
}


//第二份reduce
const postReducer=function(state={list:[{title:"你好"}]},action){
  switch(action.type){
    case "LOAD_POSTS":
      return{
        ...state,list: action.payload
      }
    default:
      return state;
  }
}


const rootReducer=combineReducers(
  {
    counter:counterReducer,
    post:postReducer,
  })
const store = createStore(
  rootReducer,
  //整合中间件的方法
  compose(
    applyMiddleware(...[thunk]),
    //这个也是中间件
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  ),
  
  );
console.log(store);
console.log(store.getState());//获取状态值state
//想要改变reducer的值，需要使用dispatch 派发一个action

//action 里面需要两个参数  type:操作类型， payload：

store.dispatch({
  type:'COUNT_ADD',
  payload:{}
})

console.log(store.getState());//获取状态值state

store.dispatch({
  type:'COUNT_REDUCE',
  payload:{}
})



const getPostRequest = () => {
  // return Ajax("/Login_design", { username, password, type }, "POST");
  // Promise = get("https://jsonplaceholder.typicode.com/posts", {});

  return get("https://jsonplaceholder.typicode.com/posts", {});

}

// store.dispatch({
//   type:LOAD_POSTS,

// })

store.dispatch(async function(dispatch){

  const res=await getPostRequest();
  console.log(res);
  dispatch({
    type:"LOAD_POSTS",
    payload:res.data
  })
})






console.log(store.getState());//获取状态值state


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
