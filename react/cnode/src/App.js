import React from 'react';
import  { BrowserRouter,Route } from 'react-router-dom';
import './App.css';
import Collect from './Collect';

function App() {
  return (
    <BrowserRouter>
    head
    <Route path="/login" component={Collect}/>

    </BrowserRouter>
  );
}

export default App;
