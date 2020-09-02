import React from 'react';
import ReactDOM from 'react-dom';
import App1 from './post.md';
import Header from './Header.vue';

function App() {
  return (
    <>
    <h2>h2</h2>
    <App1/>
    <Header/>
    </>
    
    
  )
}

ReactDOM.render( < App /> ,
    document.getElementById('root'));