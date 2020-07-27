import React from 'react';
// import {HashRouter} from 'react-router-dom';
// import {renderRoutes} from 'react-router-config';

// import routes from './routes/index.js';

import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes/index';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

import stote from './store/index';
import { GlobaStyle } from './style.js';
import { IconStyle } from './assets/iconfont/iconfont/iconfont.js';


import logo from './logo.svg';
import './App.css';

function App() {
    return ( <Provider store = { stote } >
        <IconStyle />
        <GlobaStyle />
        <BrowserRouter > { renderRoutes(routes) } 
        </BrowserRouter> 
        </Provider>
    );
}

export default App;