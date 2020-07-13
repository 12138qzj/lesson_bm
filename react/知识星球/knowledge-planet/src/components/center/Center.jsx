import React, { Component } from 'react';
import Search from './search/search';
import Box from './box/Box';
import'./center.css';
class Center extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="center_content">
                <Search/>
                <Box/>
                center
            </div>
         );
    }
}
 
export default Center;