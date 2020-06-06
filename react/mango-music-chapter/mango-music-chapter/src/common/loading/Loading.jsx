import React, { Component } from "react";
import Loadinggif from '../image/loading.gif'
import  './Loading.styl';

class Loading extends Component{

    render(){
    const {show, title}=this.props;
    let displayStyle =show===true ? {display:""}:{display:"none"}
        return(
            <div className="loading-container" style={ displayStyle}>
                <div className="loading-wrapper">
                    <img src={Loadinggif} alt="Loading" width="18px" height="18px"/>
                </div>
                <div className="loading-title">{title}</div>
            </div>
        )
    }
} 
export default Loading;
