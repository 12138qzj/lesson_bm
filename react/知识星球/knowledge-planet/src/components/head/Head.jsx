import React, { Component } from 'react';
import add from '../../image/add.png';
import './head.css';
class Head extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="head_content">

                    <span>知识星球</span>
                    <img src={add} alt=""/>
                
                
            </div>
         );
    }
}
 
export default Head;