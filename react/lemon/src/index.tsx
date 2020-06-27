// document.write('Hello from index.ts!');
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HelloComponent } from './hello'; 
import { App } from './App';
import 'antd/dist/antd.css'



ReactDOM.render(

  // <HelloComponent/>, //
  <App/>,
  document.getElementById('root') //应用挂载点
);