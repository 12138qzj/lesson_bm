import React from 'react';
import  { BrowserRouter,Route } from 'react-router-dom';
import './App.css';
import Collect from './Collect';
import PrivateRoute from './PrivateRoute';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
    head
    
    {/* <PrivateRoute> */}
      <Route path="/login" component={Login}/>
      <Route path="/collect" component={PrivateRoute}/>

    {/* </PrivateRoute> */}
    </BrowserRouter>
  );
}

export default App;
