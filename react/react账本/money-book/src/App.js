import React from 'react';
import {BrowserRouter, Route, Router} from 'react-router-dom';
import Home from './Page/Home/index';
import List from './Page/Home/List';
import Chart from './Page/Home/Chart';

import Create from './Page/Create/index';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    //前端路由
     /*组件加载
    :searchTerm  :动态部分 
    path:路由地址
    exact：将path加入路由 使该组件可以通过path 访问,精准匹配*/
    <BrowserRouter> 
      {/* <Route exact path="/" component={Home}/> */}
      <Home>
        <Route exact path='/List' component={List}/>
        <Route exact path='/Chart' component={Chart}/>
      </Home>
      <Route path="/create" component={Create}/>

    </BrowserRouter>
  );
}

export default App;
