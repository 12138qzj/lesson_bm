import React, { Component } from 'react';
import Search from './search/search';
import Box from './box/Box';
import AddBox from './box/addbox/AddBox';
import StorageUtils from '../../../Utils/Storage';
import'./center.css';
class Center extends Component {
    state = { 
        Boxdata:[
        ]

     }

     componentWillMount(){
       this.init();
     }

     init(){
        let boxdata=[]; 
        const data=StorageUtils.getUser().split(';');
        for (let key in data){
            var obj=eval("("+data[key]+")");
            boxdata.push(obj);
        }
        if(boxdata.length){
            this.setState({
                Boxdata:boxdata,
            })
        }
       
     }
    render() { 
        console.log("fadsfa",this.state.Boxdata)
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
               
            </div>
         );
    }
}
 
export default Center;