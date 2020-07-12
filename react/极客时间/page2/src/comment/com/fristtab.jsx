import React, { Component } from 'react';
import Conn from './conn/Conn';
// import "./Con.css"

import { Tabs } from 'antd';

const { TabPane } = Tabs;
class Con extends Component {
    state = {
        key:'1'
    }
    callback(key) {
        this.setState({
            key
        })
        console.log("key",key);
      }
    render() {
        return (
            <div className="warp">
                <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)} className="tabs">
                    <TabPane tab="全部" key="1" className="tab"/>
                    <TabPane tab="未学完"  key="2"/>
                    <TabPane tab="已学完" key="3"/>    
                </Tabs>
                <Conn fartherkey={this.state.key}/>
            </div>
        );
    }
}

export default Con;