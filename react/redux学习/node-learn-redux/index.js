// import React from 'react';
// import ReactDom from 'react-dom';
const { createStore, combineReducers } = require('redux')
let isLogin = false; //默认值
// isLogin = true
let posts = [];
// 状态 reducer（纯函数）
// state 上一次的状态
// createStore 经过 reducer 生成 store    ： 状态默认值
// dispatch action 也要 reducer 生成 store： 用户触发
// reducer 兼顾两者：判断 
//
const LOGIN_STATUS = Symbol('login/change-login-status');
const POSTS_STATUS = Symbol('posts/change-posts-status');


//state这个是把上次的状态 拉取下来 //action是我们传过来的参数
//为了避免这个情况 可以给state 赋默认值
function loginReducer(state = isLogin, action) {
    console.log(1)
    switch (action.type) {
        case LOGIN_STATUS:
            // state = !state
            console.log(3333)
            return !state; // 返回 新的state，不是修该原来那个变量
        default: // default 默认值
            return state;
    }
    // return false;
}

//state这个是把上次的状态 拉取下来 //action是我们传过来的参数
//为了避免这个情况 可以给state 赋默认值
function postsReducer(state = posts, action) {
    console.log(2)
    switch (action.type) {
        case POSTS_STATUS:
            return action.newPosts;
        default:
            return state
    }
}
// action：纯对象（{}）, type 字段：区分这个action 干啥的，常量, 整个应用唯一
// 自研状态管理库：单向

const loginAction = {
    type: LOGIN_STATUS,
    a: 1
}
const postAction = {
        type: POSTS_STATUS,
        newPosts: [{ a: 1 }, { a: 2 }]
    }
    // 分了 login posts
    // 接受一个
    // combineReducers 集合
const rootReducer = combineReducers({
        login: loginReducer,
        posts: postsReducer
    })
    // 状态存到 store
    // createStore（需要返回值） 也调用了 reducer
    // createStore 没有指定 任何 action type
console.log("rootReducer", rootReducer);
const store = createStore(rootReducer);
console.log(store);
// mapStateToProps
console.log('now', store.getState());

// action - reducer
// mapDispatchToProps
//dispatch每个都会执行一遍
store.dispatch(loginAction);
store.dispatch(postAction);
console.log('now', store.getState());
// store.dispatch(loginAction);
// 去到  loginReducer 、 postsReducer，该去到哪个
// 
// let store1 = createStore(rootReducer);
// Provider

// class App extends React.Component {
//   handleLogin = () => {
//     store.dispatch(loginAction);
//   }
//   render() {
//     return (
//       <div>
//         isLogin: { store.getState().login ? '1': '0' }
//         posts: { store.getState().posts.length }
//         <button onClick={this.handleLogin}>切换login</button>
//       </div>
//     )
//   }
// }
// // 渲染
// function render() {
//   ReactDom.render(<App />, document.getElementById('root'));
// }
// render();
// // 订阅 store store 通知我回调, store 
// store.subscribe(() => {
//   render();
// })
// // 修改 store 变了，重新渲染