import React, { Component } from 'react';
import  SearchHeader from './searchheader/SearchHeader';
import SearchResult from './searchresult/SearchResult';
class SearchInfo extends Component {
    state = { 
        Search:[],
     }
    Change(starttime,startpalce,endplace){
        console.log(startpalce,endplace,this,this.state.Search);
        this.setState({
            Search:[
                starttime,
                startpalce,
                endplace,
            ]
        })
    // setTimeout(()=>{
        console.log("this.state.Search111111",this.state.Search);
    // },3000)
      
       
    }
    render() { 
        return ( 
           
            <div> 
                {/* <SearchHeader Change={this.Change.bind(this)}/> */}
                <SearchHeader Change={this.Change.bind(this)}/> 
                <SearchResult searchdata={this.state.Search}/>
            </div>
         );
    }
}
 
export default SearchInfo;