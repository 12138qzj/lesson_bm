import React, { Component } from 'react';
class Header extends Component {
    state = {  }
    render() {    
        return (  
            <div>
                Header{this.props.title}
            </div>
        );
    }
}
 
export default Header;