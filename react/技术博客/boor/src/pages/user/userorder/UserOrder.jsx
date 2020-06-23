
import React, { Component } from 'react';
import { Table,  Popconfirm, Tag} from 'antd';
import  StorageUtils  from '../../../utils/storageUtis/StorageUtils';
import {reqgetExitTicket,reqalterUserticket} from '../../../api/index';

import  './UserOrder.less';
class Userorder extends Component {
    constructor(props) {
        super(props);
        console.log("props",props)

        this.columns = [
            {
                title: '车次',
                dataIndex: 'carno',
                width: '10%',
                render: (text) => <a>{text}</a>,
                
            },
            {
                title: '日期',
                dataIndex: 'date',
                width: '10%',
               
                
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
                render: (text, record ) =>{

                   return this.state.dataSource.length >= 1 ? (
                        <Popconfirm title="确定退票?" onConfirm={() => this.handleDelete(record.key,record.carno)}>
                            <a className={record.state!=0?"NoclickA":''}>
                                退票
                            </a>
                        </Popconfirm>
                    ) : null;
                }

            },
        ];
        this.state = {
            dataSource: [   
            ],
            count:0,
            loading:true,
        };
    }
    componentDidMount(){
        reqgetExitTicket(StorageUtils.getUser()).then(res=>{
            console.log("data",res);
            if(res.data.state==1){
              let temp= res.data.data.filter(item=>{
                  return item.state==="0"||item.state==="1"
              })
                console.log("temp",temp,temp.length);
                if(temp.length>0){
                    this.setState({
                        dataSource:
                        temp.map(item=>{
                            return {
                                key: item.No,
                                carno: item.carno,
                                date: item.date,
                                line:  item.stime+" "+ item.splace+ " - "+item.etime+" "+item.eplace ,
                                seat:  item.seat,
                                state:  item.state,
                                money: item.ticmon,

                            }
                        }),
                        count:temp.length,
                        loading:false,
                    })
                }
               
            }else if(res.state==0){
                this.setState({
                    dataSource:[],
                    count:0,
                    loading:false,
                })
            }
        })
    }
    handleDelete = (key,carno) => {
        const dataSource = [...this.state.dataSource];
        reqalterUserticket(key,StorageUtils.getUser(),carno,1).then(res=>{
            console.log("key,carno",key,carno,res.data.state);
            if(res.data.state===1){
                this.setState({
                    dataSource: dataSource.map(item => {
                            return item.key===key? {
                                key: item.key,
                                carno: item.carno,
                                date:item.date,
                                line:  item.line ,
                                seat:  item.seat,
                                state:  "1",
                                money: item.money,
        
                            }:item;
                        }
                    ),
                });
            }
        })

    };

    render() {



        const { dataSource } = this.state;
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
                    loading={this.state.loading}
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