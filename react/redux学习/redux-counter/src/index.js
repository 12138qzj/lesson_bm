import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './components/Counter';
import counter from './reducer';

import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const store=createStore(counter);


console.log(store)
const render=()=>ReactDOM.render(
  <Counter 
  value={ store.getState()}
  onIncrement={()=>store.dispatch({type:'INCREMENT'})}
  onDecrement={()=>store.dispatch({type:'DECREMENT'})}/>,
  document.getElementById('root')
);

render();
store.subscribe(render);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
