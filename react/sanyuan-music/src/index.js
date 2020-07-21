import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import routes from './routes/index.js';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';

import stote from './store/index';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={stote}>
    <BrowserRouter> 
      {renderRoutes(routes)}
   </BrowserRouter>
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
