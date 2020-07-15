import React from 'react';
import {Header} from './components/header/Header';
import Joureney from './components/journey/Journey'
import logo from './logo.svg';

import './App.css';
import { useCallback } from 'react';
import { connect } from 'react-redux';

function App(props) {

  const {from,to}=props;

  console.log(props);
  //缓存函数

  const onBack = useCallback(()=>{
    console.log("object");
    window.history.back();
  },[])

  return (
    <div >
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack}/>
      </div>
      <form action="./query.html" className="from">
        <Joureney from={from} to={to}/>
      </form>
    </div>
  );
}

export default connect(function mapStateTopRops(state){
  return state;
},)(App);
