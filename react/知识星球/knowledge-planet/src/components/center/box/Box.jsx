import React, { Component } from 'react';
import  './box.css';
class Box extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="box">
                <div className="img">
                    <img src="" alt=""/>
                </div>
                <div className="box-content">
                    <p>视界</p>
                    <p></p>
                    <p>七个</p>
                </div>
            </div>
         );
    }
}
 
export default Box;