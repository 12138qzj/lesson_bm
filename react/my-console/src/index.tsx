import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// type originConsole=(...args:any[])=>void;

// let originConsole=console.log;
// console.log=function(...args:[]){
//   // alert('called');
//   originConsole(window.console,args)
// }
// console.log(1);


// type mypush=(...args:any[])=>void;

// let mypush=Array.prototype.push;
// Array.prototype.push=function(...args:any[]){
//   console.log("push了");
//   // mypush 这个push 会返回一个更新数组之后 的长度
//   return mypush.apply(this,args);
// }
// let a=[1,2,3];

// a.push(4);
// console.log("-------",a,Array.prototype.push);

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
