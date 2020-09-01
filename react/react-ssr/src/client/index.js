import React from 'react';
import ReactDom from 'react-dom'
import Header from '../common/Header/Header.jsx'
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config'
import route from '../router'

function App() {
    return (
        <BrowserRouter>
            <Header/>
            {renderRoutes(route)}
        </BrowserRouter>
    )
}

// root结点下面已经有东西了
// 客户端不需要在构造 DOM结点了 ，只需要完成服务端没有完成的功能， 

// js的事件绑定
ReactDom.hydrate(<App/>,document.getElementById("root"))
