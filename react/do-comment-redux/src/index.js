import React from 'react';
import ReactDOM from 'react-dom';


import {createStore } from 'redux';
//Provider 数据开发独立  是一个变量管理的仓库
import {Provider} from 'react-redux';
import CommentApp from './containers/CommentApp';
// import CommentList from './containers/CommentList';
import CommentsReducer from './reducers/comments';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CommentList from './containers/CommentList';

//创建一个仓库
//单一 状态树
const store=createStore(CommentsReducer)


ReactDOM.render(
  <Provider store={store}>
    {/* <CommentList/>, */}
    <CommentApp/>
  </Provider>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
