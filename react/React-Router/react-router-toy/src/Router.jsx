import React ,{useContext}from 'react'
import {context} from './BrowserRouter';

export default function Router(props) {
    const {path, component:Component}=props;
    const {pathname}=useContext(context)
    console.log("window.location",window.location,path,props);
    return (pathname===path?<Component/> :null)

}
