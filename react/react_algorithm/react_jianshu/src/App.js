import React, { Component } from 'react';
import ImmutableComponent from './common/immutableComponent';
import logo from './logo.svg';
import './App.css';
import Header from './header/Header';

class App extends ImmutableComponent {
  state = {
    title: '123'
  }
  shallowEqual(objA, objB) {
    //判断1
    if (typeof objA !== 'object' ||
    typeof objB !== 'object') {
      return false;
    }
    //获取数据里面的value值
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    //比较长度
    if (keysA.length !== keysB.length) return false;
    // 第一层的比较
    for (let key of keysA) {
      if (objA[key] !== objB[key]) {
        return false;
      }
    }
    return true;
  }


  shouldComponentUpdate(nextProps, nextState) {
    const thisProps = this.props || {};
    const thisState = this.state || {};
    nextProps = nextProps || {};
    nextState = nextState || {};
    if (Object.keys(thisProps).length !== Object.keys(nextProps).length
    || Object.keys(thisState).length !== Object.keys(nextState).length) {
      return true;
    }
    for (let propKey of nextProps) {
      if (!is(thisProps[propKey], nextProps[propKey])) {
        return true;
      }
    }
    for (let stateKey of nextState) {
      if (!is(thisState[stateKey], nextState[stateKey])) {
        return true;
      }
    }
    return false;
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   let isSame = this.shallowEqual(nextProps, this.props) && 
  //   this.shallowEqual(nextState, this.state);
  //   return !isSame;
  // }
  // nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   console.log(nextProps, nextState, nextContext);

  //   return true
  // }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        title: '123'
      })
    }, 3000)
  }
  render(){
    console.log("render渲染");
    return ( 
    <div className="App">
      APP
      <Header title={this.state.title}/>
    </div> 
  );
  }
}
 
export default App;
