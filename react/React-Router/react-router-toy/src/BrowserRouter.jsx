import React, { Component } from 'react';

const context=React.createContext();

class BrowserRouter extends Component {
    state = {
        pathname:'/'
    }

    updata=(pathinfo)=>{
        this.setState(pathinfo)

    }
    componentDidMount(){
        window.addEventListener('popstate',()=>{
            this.setState({
                pathname:window.location.pathname
            })
        })
    }
    render() { 
        return ( 
            <context.Provider value={
                {updata:this.updata,
                pathname:this.state.pathname}
                }>
                {this.props.children}
            </context.Provider>
         );
    }
}
 
export  {
    context,
    BrowserRouter
};