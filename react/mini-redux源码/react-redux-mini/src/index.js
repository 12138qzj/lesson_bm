import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {context,Provider1} from './react-redux'
import {createStore} from 'redux'
import * as serviceWorker from './serviceWorker';

let action1 = {
  type: "INCREMENT"
}
let action2 = {
  type: "DECREMENT"
}


function reducer(state = 1, action) {
  if (action.type === "INCREMENT") {
      return state + 1;
  } else if (action.type === "DECREMENT") {
      return state - 1;
  } else {
      return state;
  }
}

// function createStore(reducer) {
//   let state = undefined;

//   function dispatch(action) {
//       state = reducer(state, action);
//   }
//   //定义的时候已经执行了 dispatch

//   //将state 为reducer中的默认值 初始state的值
//   dispatch({ type: "" })

//   function getState() {
//       return state;
//   }
//   return { dispatch, getState }
// }
let store=createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider1 store={store}>
      <App />
    </Provider1>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
