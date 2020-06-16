import React from 'react';
import { Provider } from 'mobx-react'
import articleStore from './store/articleStore';
import Home from './Pages/home/index'
import logo from './logo.svg';
import './utils/axios.js';
import './App.css';


const store = {
  articleStore
}
function App() {
  return (
    <Provider {...store} >
      <Home />
    </Provider>
  );
}


export default App;