import React,{useContext} from 'react';
import {context,Myconnect} from './react-redux'
import Clock from './useClock'
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

function App(props) {

  let content=useContext(context);
  console.log(props);
  return (
    <div className="App">
     <Clock/>
    </div>
  );
}
const mapDispatchToProps=()=>{
  return{

  }
}
const mapStateToProps=(state)=>{
  return{
    count:state
  }
}



export default Myconnect(mapStateToProps,mapDispatchToProps)(App);


