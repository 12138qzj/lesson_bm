import React from 'react';
import logo from './logo.svg';
import { Spin,Tabs } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
const { TabPane} =Tabs;

function App() {
  return (
    <div className="App">
      <Spin spinning="true"/>
    </div>
  );
}

export default App;
