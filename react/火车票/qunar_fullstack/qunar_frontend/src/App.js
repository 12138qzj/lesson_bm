import React from 'react';
import logo from './logo.svg';
import './App.css';
import Common from './common';
import store from './store/store';
import { Provider} from 'react-redux';

function App() {

  // fetch('http://localhost:80/rest/cities')
  // .then(data=>{
  //   // console.log("data",data.json());

  //   return data.json();
  // })
  // .then(data=>{
  //   console.log(data);
  // })
  return (
    <div className="App">
       <Provider store={store}>
        <Common/>


       </Provider>
    </div>
  );
}

export default App;
