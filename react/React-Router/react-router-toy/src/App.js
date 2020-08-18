import React , {useState}from 'react';
import Link from './Link'
import Router from './Router'
import {BrowserRouter} from './BrowserRouter';
import logo from './logo.svg';
import './App.css';



 function User() {
  return (
    <div>
      User
    </div>
  )
}

function About() {
  return (
    <div>
      About
    </div>
  )
}

function Home() {
  return (
    <div>
      Home
    </div>
  )
}


function App() {
  const {state,setstate}=useState(false)
  return (
    <div className="App">
      <BrowserRouter state={{state,setstate}}>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
        <Router path="/user" component={User} />
        <Router path="/" component={Home} />
        <Router path="/about" component={About} />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
