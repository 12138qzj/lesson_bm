import React, { Component } from 'react';
import  './LinkButtom.less';
export default function LinkBUttom(props) {
    // console.log(props);
    return ( 
        <button {...props} className="btn">
             { props.children }
            {/* 退出 */}
        </button>
    )
}