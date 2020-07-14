import React, { Component } from 'react';
import './addbox.css'
import { withRouter } from 'react-router';
class AddBox extends Component {
    state = {  }
    AddPlanet=()=>{
        console.log(this.props);
        // this.props.history.replace('/tail')
        this.props.history.push('/AddPlanet')

    }
    render() { 
        return ( 
            <div className="wraper" onClick={this.AddPlanet}>
                <div className="addbox">
                    <span>创建星球</span>
                </div>           
            </div>
         );
    }
}
 
export default withRouter(AddBox);