
import React, { Component, useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form , Tag, Radio} from 'antd';
import {reqgetuser} from '../../../api/index';

import  './UserOrder.less';






class Userorder extends Component {
    constructor(props) {
        super(props);
        console.log("props",props)

        this.data = [
       
        ];

        this.columns = [
            {
                title: '车次',
                dataIndex: 'carno',
                width: '10%',
                render: (text) => <a>{text}</a>,
                
            },
            {
                title: '路线',
                dataIndex: 'line',
                width: '30%',
                // editable: true,
            },
            {
                title: '座次',
                dataIndex: 'seat',
            },
            {
              title: '状态',
              key: 'state',
              dataIndex: 'state',
              render:(state) => {
                    let color =  'green';
                    let statechar="";
                    switch(state){
                      case "0":
                        //预定中
                        color = 'geekblue';
                        statechar="预定中"
                        break;
                      case "1":
                        color = 'volcano';
                        statechar="退票待审核"
                        break;
                      case "2":
                        color = 'green';
                        statechar="已退票"
                        break;
                      default: 
                        color = 'pink';
                        statechar="已发车"
                        break;
                    }
                    return (
                      <Tag color={color} key={state}>
                        {statechar}
                      </Tag>
                    );
                  }
            },
            {
                title: '金额',
                dataIndex: 'money',
            },
            {
                title: 'operation',
                dataIndex: 'operation',
                render: (text, record) =>
                    this.state.dataSource.length >= 1 ? (
                        <Popconfirm title="确定删除?" onConfirm={() => this.handleDelete(record.key)}>
                            <a>删除用户</a>
                        </Popconfirm>
                    ) : null,
            },
        ];
        this.state = {
            dataSource: [
              {
                key: '1',
                carno: 'K8788',
                line: "07:00 南昌 - 10:00 萍乡",
                seat: '7车厢5F号',
                state: "2",
                money:"43.5",
              },
              {
                key: '2',
                carno: 'K8788',
                line: "07:00 南昌 - 10:00 萍乡",
                seat: '7车厢5F号',
                state: "2",
                money:"43.5",
              },
                 
            ],
            count:2,
        };
    }


    componentDidMount(){
        reqgetuser().then(res=>{
            console.log("data",res);
            if(res.data.state==100){
                console.log("data",res.data.data);
                console.log("data",res.data.data.length);

                this.setState({
                    dataSource:res.data.data,
                    count:res.data.data.length
                })
            }else if(res.state==0){
                this.setState({
                    dataSource:[],
                    count:0
                })
            }
        })
    }

    handleDelete = key => {
        const dataSource = [...this.state.dataSource];
        this.setState({
            dataSource: dataSource.filter(item => item.key !== key),
        });
    };

    render() {



        const { dataSource } = this.state;
        // const components = {
        //     body: {
        //         row: EditableRow,
        //         cell: EditableCell,
        //     },
        // };
        const columns = this.columns.map(col => {
            if (!col.editable) {
                return col;
            }

            return {
                //返回可编辑的内容
                ...col,
                onCell: record => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    // handleSave: this.handleSave,
                }),
            };
        });


        return (
            <div className="user-order" >
                <Table
                    // components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                />
            </div>
        );
    }
}









  
// class Userorder extends Component {
//     state = {  }
//     render() { 
//         return (
//             <div>
//               <Table
//                 columns={columns}
//                 // pagination={{ position: [this.state.top, this.state.bottom] }}
//                 dataSource={data}
//               />
//             </div>
//         );
        
//     }
// }
 
export default Userorder;