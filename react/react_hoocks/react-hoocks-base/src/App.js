import React from 'react';
import logo from './logo.svg';
import './App.css';
import UseEffect from './components/UseEffect';
// import UseContext from './components/UseContext';
import Counter from './components/UseReducer';


function App() {
  return (
    <div className="App">
      {/* <UseEffect/> */}
      {/* <UseContext /> */}
      <Counter/>
    </div>
  );
}

export default App;
