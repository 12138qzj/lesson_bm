// console.log("fdsafadfdasghjklkjhg");
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter, Switch,Route}from 'react-router-dom';
// import LoginPage from './page/login/LoginPage';
import {LoginPage} from './page/login/index';
ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact={true} path="/" component={LoginPage}/>
        </Switch>
    </HashRouter>
    ,
    document.getElementById('root')
)
