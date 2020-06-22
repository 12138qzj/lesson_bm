import React, { Component } from 'react';
class SearchResult extends Component {
    state = {  }
    render() { 
        let searchdata=this.props.data;
        return ( 
            <div>
                SearchResult
                {searchdata}
            </div>
         );
    }
}
 
export default SearchResult;