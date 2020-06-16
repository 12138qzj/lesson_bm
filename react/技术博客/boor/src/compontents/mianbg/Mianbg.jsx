import React, { Component } from 'react';
import logo from '../../common/images/logo.png';
import  './Mianbg.less';
class Mianbg extends Component {
    state = {}
    render() {
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo" />
                    <h1>后台管理系统</h1>
                </header> 
                {this.props.children}
            </div>
        );
    }
}

export default Mianbg;