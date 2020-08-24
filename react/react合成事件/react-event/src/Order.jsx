import React, { Component } from 'react';
class Order extends Component {
    state = {  }
    child=()=>{
        console.log(1111);

    }
    parent=()=>{
        console.log(2222);
    }
    render() { 
        return ( 
            <div onClick={this.parent}>
                <div onClick={this.child}>
                    child
                </div>

            </div>
         );
    }
}
 
export default Order;