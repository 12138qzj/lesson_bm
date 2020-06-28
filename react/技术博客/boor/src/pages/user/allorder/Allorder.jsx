
import React, { Component } from 'react';
import { Table, Popconfirm, Tag,message} from 'antd';
//默认导出  才用花括号
import { reqgetExitTicket,reqDeleteUserTicket } from '../../../api/index';
import  StorageUtils  from '../../../utils/storageUtis/StorageUtils';

// import  './UserOrder.less';
class Allorder extends Component {
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
                dataIndex: 'ticmon',
            },
            {
                title: 'operation',
                dataIndex: 'operation',
                render: (text, record) =>{
                    console.log("state",record.state);
                    let Deletecard="";
                    switch(record.state){
                      case "0":
                        //预定中
                        Deletecard=""
                        break;
                      case "1":
                        Deletecard=""
                        break;
                      case "2":
                        Deletecard="删除订单"
                        break;
                    case "3":
                        Deletecard="删除订单"
                        break;
                    default: 
                        break;
                    }
                    return (
                        <Popconfirm title={Deletecard} onConfirm={() => this.handleDelete(record.key,StorageUtils.getUser(),record.carno)}>
                            <a>{Deletecard}</a>
                        </Popconfirm>
                    );
                }
                    // this.state.dataSource.length >= 1 ? (
                    //     <Popconfirm title="确定删除?" onConfirm={() => this.handleDelete(record.key)}>
                    //         <a>删除订单</a>
                    //     </Popconfirm>
                    // ) : null,
            },
        ];
        this.state = {
            dataSource: [],
            count:0,
            tableLoading:true,
        };
    }


    componentDidMount(){
        //if(getUser()){
         //   console.log("getUser()");
           // console.log("getUser()",getUser());
        //}
        reqgetExitTicket(StorageUtils.getUser()).then(res=>{
            console.log("data",res);
            if(res.data.state==1){
                console.log("data",res.data.data);
                console.log("data",res.data.data.length);

                this.setState({
                    dataSource:res.data.data.map(item=>{
                        return {
                            key:item.No,
                            carno: item.carno,
                            date:item.date,
                            line:  item.stime+" "+ item.splace+ " - "+item.etime+" "+item.eplace ,
                            seat:  item.seat,
                            state:  item.state,
                            ticmon: item.ticmon,

                        }
                    }),
                    count:res.data.data.length,
                    tableLoading:false,
                })
            }else if(res.state==0){
                this.setState({
                    dataSource:[],
                    count:0,
                    tableLoading:false,
                })
            }
        })
    }

    handleDelete = (key,user,carno) => {

        reqDeleteUserTicket(key,user,carno).then(res=>{
            if(res.data.state===1){
                message.success('删除成功');
                const dataSource = [...this.state.dataSource];
                this.setState({
                    dataSource: dataSource.filter(item => item.key !== key),
                });
            }else{
                message.error('删除失败！')
               // this.props.history.replace('/login')
            }
        })
        
    };

    render() {


        console.log("getUser()",StorageUtils.getUser());
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
                    loading={this.state.tableLoading}
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
 
export default Allorder;