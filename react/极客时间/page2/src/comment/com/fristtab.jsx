import React, { Component } from 'react';
import Conn from './conn/Conn';
import "./fristtab.less"

import { Tabs } from 'antd';

const { TabPane } = Tabs;
class Con extends Component {
    state = {
        key:'1',
        count:0,
    }
    callback(key) {
        this.setState({
            key
        })
        console.log("key",key);
      }
      changecount(count){
          this.setState({
              count:count
          })

      }
    render() {
        return (
            <div className="warp">
                <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)} className="tabs">
                    <TabPane tab={"全部("+this.state.count+")"} key="1" className="tab"/>
                    <TabPane tab="未学完"  key="2"/>
                    <TabPane tab="已学完" key="3"/>    
                </Tabs>
                <Conn fartherkey={this.state.key} funcount={this.changecount.bind(this)}/>
            </div>
        );
    }
}

export default Con;