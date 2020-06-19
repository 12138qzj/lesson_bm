import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
//按需加载包  不需要导入css文件
// import 'antd/dist/antd.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import StorageUtils from './utils/storageUtis/StorageUtils';
// import { MemoryRouter } from 'react-router-dom';
import MemoryUtils from './utils/memoryUtils/MemoryUtils';

const user = StorageUtils.getUser();
if (!user) {
    MemoryUtils.user = user;

}


ReactDOM.render(

    <
    App / > ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();