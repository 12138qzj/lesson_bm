import React, { Component } from 'react';
import Search from './search/search';
import Box from './box/Box';
import AddBox from './box/addbox/AddBox';
import'./center.css';
class Center extends Component {
    state = { 
        Boxdata:[{
            planetname:"视界",
            author:"七个"
            
        },{
            planetname:"视界1",
            author:"七个1"
            
        },{
            planetname:"视界2",
            author:"七个2"
            
        }]
     }
    render() { 
        return ( 
            <div className="center_content">
                <Search/>
                <div className="center_warper">
                    { this.state.Boxdata.map((item,index)=>{
                        return(
                            <Box data={item} key={index}/>
                        )
                    })}
                    {/* <Box /> */}
                    <AddBox />
                </div>
               
                center
            </div>
         );
    }
}
 
export default Center;