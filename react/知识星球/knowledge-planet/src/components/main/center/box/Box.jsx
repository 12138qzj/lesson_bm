import React, { Component } from 'react';
import P4 from '../../../../image/4.png';
import  './box.css';
class Box extends Component {
    state = {  }
    render() { 
        const {data}=this.props;
        return ( 
            <div className="wraper">
                <div className="box">
                    <div className="img">
                        <img src={P4} alt="" width="100%"/>
                    </div>
                    <div className="box-content">
                        <p>{data.planetname}</p>
                        <span></span>
                        <p>{data.author}</p>
                    </div>
                </div>           
            </div>
            
         );
    }
}
 
export default Box;