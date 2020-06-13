import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import ImmutableComponent from './common/immutableComponent';
import store from './store/index';
import { fromJS } from 'immutable';

import logo from './logo.svg';
import './App.css';
import Header_demo from './Pages/header/Header_demo';
import Header from './Pages/header/Header';
import Home from './Pages/home/Home';
import Detail from './Pages/detail/Detail';
import { Provider } from 'react-redux';

class App extends ImmutableComponent {
 
  // state={
  //   title:fromJS('123s')
  // }
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       title: fromJS('123ss')
  //     })
  //   }, 3000)
  // }


  //   render(){
  //     console.log("render渲染");
  //     return ( 
  //     <div className="App">
  //       APP
  //       <Header title={this.state.title}/>
  //     </div> 
  //   );
  // }
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
          <Header/>
          <Route path="/home" component={Home} exact/>
          <Route path="/detail" component={Detail} />
          {/* </Header> */}
      
        </BrowserRouter>
      </Provider>
     
    );
  }
}
 
export default App;
