import React from 'react';
import Head from './components/head/Head';
import Center from './components/center/Center';
import Bottom from './components/bottom/Bottom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Head/>
      <Center/>
      <Bottom/>
    </div>
  );
}

export default App;
