import React, { Component } from 'react';
import { Table, message } from 'antd';
import LinkButton from '../../../../compontents/linkbuttom/LinkButtom';
import {reqgetCarInfo,regaltercarinfo} from '../../../../api/index';
import StorageUtils from '../../../../utils/storageUtis/StorageUtils';
import  './SearchResult.less';
class SearchResult extends Component {
    state = { 
        dataSource:[],
        loading:true,
     }

    //表格初始化
    InitTableData=()=>{
          this.columns = [
            {
              title: '车次',
              dataIndex: 'carno',
              width:"10%",
              key: 'carno',
              render: (text) =>(<a>{text}</a>)
            },
            {
              title: '出发地/时间',
              dataIndex: 'splace_time',
              width:"13%",
              render: (text, record, index) =>{
                    return (
                        <div className="swarp">
                            <div className="stime">
                                {record.stime}
                            </div>
                            <div className="splace">
                            <i className="shi_icon">始</i>

                                {record.splace}
                            </div>
                        </div>
                    );
                }
            },
            {
                title: '车型',
                dataIndex: 'cartype',
                render: (text, record, index) =>{
                      return (
                          <div>
                              {record.cartype}
                          </div>
                      );
                  }
              },
            {
              title: '目的地/时间',
              dataIndex: 'eplace_time',
              width:"13%",
              key: 'eplace_time',
              render: (text, record, index) =>{
                    return (
                        <div>
                               <div className="etime">
                                    {record.etime}
                                </div>
                                <div className="eplace">
                                    <i className="zhong_icon">终</i>

                                    {record.eplace}
                                </div>
                        </div>
                    );
                }
            },
            {
                title: '剩余票量',
                dataIndex: 'ticnum',
                key: 'ticnum',
              },
            {
                title: '操作',
                dataIndex: 'operation',
                render: (text, record, index) =>{
                    return (
                        <LinkButton onClick={()=>{
                            this.Altercarinfo(record.carno)
                        }}>
                            预定
                        </LinkButton>
                    );
                }
                
                    // this.state.dataSource.length >= 1 ? (
                    //     <Popconfirm title="确定删除?" onConfirm={() => this.handleDelete(record.key)}>
                    //         <a>删除订单</a>
                    //     </Popconfirm>
                    // ) : null,
            },
          ];       
    }
    //请求数据
    GetCarInfo=()=>{
        
        reqgetCarInfo().then(
            (res)=>{
                console.log("dfdsf",res.data.state);
                if(res.data.state===1){
                    console.log("dfdsfggg",res.data.data);
                    this.setState({
                        dataSource:res.data.data.map(item=>{
                            return {
                                key: item.CarNo,
                                carno: item.CarNo,
                                splace: item.SPlace,
                                eplace: item.EPlace,
                                cartype:item.CarType,
                                stime:item.STime,
                                etime:item.ETime,
                                ticnum:item.TicNum,
                                paymon:item.PayMon,
                            }
                        }),
                        loading:false,
                    })
                }else{
                    this.setState({
                        dataSource:[],
                        loading:false,
                    })
                }
              
            }
        )
    }

    //预定
    Altercarinfo(carno){
        this.setState({
            loading:true,
        })
        regaltercarinfo(StorageUtils.getUser(),carno).then((res)=>{
            if(res.data.state===1){ 
                this.GetCarInfo()
                message.success("预定成功！");
            }else{
                this.setState({
                    dataSource:this.state.dataSource,
                    loading:false,
                })
            }
        })
        this.setState({
            loading:false,
        })
    }
    componentWillMount(){
        //组件渲染之后执行的生命周期函数
        this.InitTableData()
        this.GetCarInfo();
    }
    render() { 
        const columns = this.columns.map(col => {
            if (!col.editable) {
                return col;
            }
            console.log("col",col);
            return {
                //返回可编辑的内容
                ...col,
                onCell: record => ({
                    record,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    // handleSave: this.handleSave,
                }),
            };
        });
        console.log("colums",columns);
        let searchdata=this.props.searchdata;
        return ( 
            <div>
                <Table
                 columns={columns}
                 dataSource={this.state.dataSource}
                 loading={this.state.loading}
                 bordered={true}
                >
                </Table>
                
            </div>
         );
    }
}
 
export default SearchResult;