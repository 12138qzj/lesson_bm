import React, { Component } from 'react';

import axios from 'axios';
import { Tabs, Table,  Button } from 'antd';
// import {reqall} from '../../../api/index';
import '../../../api/mock';
// import { tuple } from 'antd/lib/_util/type';


const { TabPane } = Tabs;
class Conn extends Component {
    constructor() {
        super()
        this.state = {
            dataSource: [          
            ],
            count: 0,
            fartherkey:1,
            newdataSource:[],
            tabkey:"所有形式"
        }
        this.columns = [
            {
                // title: 'name',
                dataIndex: 'image',
                width: '10%',
                render:(text, record)=>{
                    return(
                        <div><img src={record.image} alt=""/></div>
                    )
                }
                // editable: true,
            },
            {
                // title: 'age',
                dataIndex: 'content',
                width: '30%',
                render:  (text, record, index) => {
                        return (
                            <div className="swarp">
                                <div className="title">
                                    {record.title}
                                </div>
                                <div className="splace">
                                    <span>共{record.all}讲</span>
                                    <span>已学{record.all<=record.already?record.all:record.already}讲</span>
                                    <span>已完{ Math.floor (record.all<=record.already?100: record.already/record.all*100)}%讲</span>
                                </div>
                            </div>
                        );
                    },
                },
            {
                dataIndex: 'type',
            },
            {
                dataIndex: 'operation',
                render: (text, record) =>{
                    return (
                        <Button  onConfirm={() => this.handleDelete(record.key)}  style={{backgroundColor:"#ff7f1a", color:"#FFF"}}>
                            <a>开始学习</a>
                        </Button>
                    )
                }
            },
        ]
        this.newdataSource=[];

    }

    componentWillReceiveProps(nextProps){
        
        console.log("---------------***",this.props,nextProps,"*****");
        if(this.props.fartherkey !== nextProps.fartherkey){
    
            console.log("-----***************",nextProps);
            let key=nextProps.fartherkey;
            if(key==='2'){
                this.setState({
                    newdataSource:this.state.dataSource.filter((item)=>{
                         if(item.study===key){
                             
                             console.log("this.state.tabkey",item.type,this.state.tabkey);
                            return this.state.tabkey==="所有形式"?true:item.type===this.state.tabkey
                        } 
                        return false 

                    }),
                    fartherkey:key
                     
                })
            }else if(key==='3'){
                this.setState({
                    newdataSource:this.state.dataSource.filter((item)=>{
                        if(item.study===key){
                            return this.state.tabkey==="所有形式"?true:item.type===this.state.tabkey
                        }
                        return false 
                    }),
                    fartherkey:key
                })
            }else if(key==='1'){
                console.log("object最后",key);

                this.setState({
                    newdataSource:this.state.dataSource.filter((item)=>{
                        return this.state.tabkey==="所有形式"?true:this.state.tabkey===item.type;
                    }),
                    fartherkey:key 
                })
            }
        }
    }

    componentDidMount(){
        // reqall().then((res)=>{
        //     console.log(res);
        // })
        

        console.log("第一次进来",this.props.fartherkey);
        this.setState({
            fartherkey:this.props.fartherkey
        })
        axios.get("/all/").then((res)=>{
            if (res.data.success) {
                console.log("dfdsfggg", res.data.list);
                this.setState({
                    dataSource: res.data.list.map((item)=>{
                        if(item.all<=item.already){
                            item.study='3';
                        }else{
                            item.study='2';
                        }
                        return item
                    }),
                    count: res.data.list.length,
                    // loading: false,
                })
            } else {
                this.setState({
                    dataSource: [],
                    // loading: false,
                })
            }
            
            this.initData();
            console.log("******componentDidMount结束",this.state.newdataSource,this.state.fartherkey,this.state.tabkey);
        })
    }

    initData(){        
        this.setState({
                 newdataSource:this.state.dataSource
            })        
    }
    callback(key) {      
        this.setState({
            newdataSource:this.state.dataSource.filter((item)=>{

                console.log("第二个newdataSource",item.study,this.state.fartherkey);
                if(this.state.fartherkey==="1"){
                    return key==="所有形式"?true:item.type===key
                }
                if(item.study===this.state.fartherkey){
                    return key==="所有形式"?true:item.type===key
                }
                return false
            }),
            tabkey:key,
        })
        
    }
    render() {
        //
        console.log("************render",this.state.fartherkey,this.state.newdataSource,this.state.dataSource);
        return (
            <div>
                <Tabs onChange={this.callback.bind(this)} type="card" className="tabs">
                    <TabPane tab="所有形式" key="所有形式" className="tab" style={{Color:"red"}}> 
                    {/* Content of Tab Pane 11111 */}

                    </TabPane>
                    <TabPane tab="专栏" key="专栏">
                        {/* Content of Tab Pane 2222222 */}
                    </TabPane>
                    <TabPane tab="微堂" key="微堂">
                        {/* Content of Tab Pane 323333 */}
                    </TabPane>
                    <TabPane tab="视频课" key="视频课">
                        {/* Content of Tab Pane 2222222 */}
                    </TabPane>
                    <TabPane tab="每日一课" key="每日一课">
                        {/* Content of Tab Pane 323333 */}
                    </TabPane>
                    <TabPane tab="其他" key="其他">
                        {/* Content of Tab Pane 323333 */}
                    </TabPane>
                </Tabs>
                <Table
                    // components={components}

                    // bordered
                    dataSource={this.state.newdataSource}
                    columns={this.columns}
                />
            </div>

        );
    }
}

export default Conn;