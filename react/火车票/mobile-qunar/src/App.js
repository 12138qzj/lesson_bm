import React from 'react';
import {Header} from './components/header/Header';
import Joureney from './components/journey/Journey'
import { exchangeFromto } from './store/actions.js';

import { bindActionCreators} from 'redux';
import './App.css';
import { connect } from 'react-redux';
import { useMemo,useCallback } from 'react';

function App(props) {

  const {from,to,dispatch}=props;



  console.log(props);
  //缓存函数 没有返回值
  const onBack = useCallback(()=>{
    console.log("object");
    window.history.back();
  },[])

  //这个缓存函数有返回值 return
  const cbs=useMemo(()=>{
    
    //将远程仓库store 函数变为本地 赋予一个修改的功能
    return bindActionCreators({
      exchangeFromto
    },dispatch);
  },[/* 依赖 */])
  return (
    <div >
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack}/>
      </div>
      <form action="./query.html" className="from">
        <Joureney from={from} to={to} {...cbs}/>
      </form>
    </div>
  );
}



export default connect(function mapStateTopRops(state){
  //返回仓库内容 
  return state;
},function mapDispatchToProps(dispatch){
  return {dispatch}
})(App);
