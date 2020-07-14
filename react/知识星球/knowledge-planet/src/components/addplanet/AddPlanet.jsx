import React, { Component } from 'react';
import './addplanet.css'
class AddPlanet extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="AddPlanet-wraper">
                <div className="head">
                    <div className="back">取消</div>
                    <div className="next">
                        <a>下一步</a> 
                        </div>
                </div>
            </div>
         );
    }
}
 
export default AddPlanet;