import React from 'react';
import {Route,Redirect} from 'react-router-dom';

function PrivateRoute(props){

    const isLogin=authStore.isLogin;
    const {path,component}=props;

    if(!isLogin){
        return <Redirect to="/login"/>
    }
    return(
        <Route path={path} component={component}></Route>
    )

}
export default PrivateRoute;