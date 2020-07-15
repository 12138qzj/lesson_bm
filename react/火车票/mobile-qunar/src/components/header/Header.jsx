import React, { Component,PureComponent } from 'react';

//类型检测 
import PropTypes from 'prop-types';
import  './header.css';

// class Header extends PureComponent {
//     state = {  }
//     render() { 
//         return ( 
//             <div>
//                 Header
//             </div>
//          );
//     }
// }
 
// export default Header;

export const Header=(props)=>{
    const {title,onBack}=props;
    console.log("title",title);
    return(
        <div>

       <div className="header">
           <div className="header-back" onClick={onBack}>
               {/* 矢量图 拉升不会变形 */}
               <svg width="42" height="42">
                   <polyline
                    points="25,13 16,21 25,29"
                    stroke="#fff"
                    strokeWidth="2"
                    // fill="none"
                   ></polyline>
               </svg>
           </div>
            <div className="header-title">{title}</div>
       </div>
       <div className="center"></div>
       </div>

    ) 
}
Header.prototype={
    title:PropTypes.string.isRequired,
    onBack:PropTypes.func.isRequired,
}