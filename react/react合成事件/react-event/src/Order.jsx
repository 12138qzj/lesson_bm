import React, { Component } from 'react';
class Order extends Component {
    state = { 
        count:1
     }
    child=()=>{
        console.log(1111);

    }
    parent=()=>{
        console.log(2222);
    }

    componentWillMount() {
        this.setState({
          count: 2
        })
        console.log(this.state.count);
      
     }
    componentDidMount(){
        console.log("2345", this.state.count);
    }
    render() { 
        return ( 
            <div onClick={this.parent}>
                <div onClick={this.child}>
                    child{this.state.count}
                </div>

            </div>
         );
    }
}
 
export default Order;