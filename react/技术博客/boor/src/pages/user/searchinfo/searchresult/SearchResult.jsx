import React, { Component } from 'react';
import { Table, message } from 'antd';
import { Modal, Button } from 'antd';
import LinkButton from '../../../../compontents/linkbuttom/LinkButtom';
import {reqgetCarInfo,regaltercarinfo} from '../../../../api/index';
import StorageUtils from '../../../../utils/storageUtis/StorageUtils';
import  './SearchResult.less';
import ResultComfrim from './resultconfirm/ResultComfrim';
class SearchResult extends Component {
    state = { 
        dataSource:[],
        loading:true,
        loadingComfrim:false,
        visibleComfrim:false,
        record:{}
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
                            console.log("record.carno",record.carno);
                            this.showModal(record)
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
    Altercarinfo(carno,date){
        this.setState({
            loading:true,
            loadingComfrim:true,
        })
        console.log("carno",carno);
        regaltercarinfo(StorageUtils.getUser(),carno,date).then((res)=>{
            if(res.data.state===1){ 
                
                message.success("预定成功！");
                this.setState({
                    loadingComfrim:false,
                    visibleComfrim:false,
                })
              
            }else{
                message.error("不能重复预定！");
                this.setState({
                    dataSource:this.state.dataSource,
                    loading:false,
                    loadingComfrim:false,
                    visibleComfrim:false,

                })
            }
        })
        this.setState({
            loading:false,
           
        })
        this.GetCarInfo()
    }
    componentWillMount(){
        //组件渲染之后执行的生命周期函数
        this.InitTableData()
        this.GetCarInfo();
    }



    showModal = (record) => {
        this.setState({
            visibleComfrim: true,
            record:record,
        });
    };

    handleOk = (carno,date) => {
        console.log("record",carno);
        this.setState({ loadingComfrim: true });
        this.Altercarinfo(carno,date);
    };

    handleCancel = () => {
        this.setState({ visibleComfrim: false });
    };


    comfitrm=()=>{
        let record=this.state.record;
        return(
            <div>
                   {/* key: item.CarNo,
                                carno: item.CarNo,
                                splace: item.SPlace,
                                eplace: item.EPlace,
                                cartype:item.CarType,
                                stime:item.STime,
                                etime:item.ETime,
                                ticnum:item.TicNum,
                                paymon:item.PayMon, */}
                <div><span>车次：</span><span>{record.carno}次</span></div>
                <div><span>预约日期：</span><span>{this.props.searchdata}</span></div>
                <span>路线：</span><span>{record.stime}{record.splace}到{record.etime}{record.eplace}</span>
                <div><span>金额：</span>{record.paymon}</div>

            </div>
        )
    }

    render() {
        let dataSource;
        const {searchdata}=this.props;
        if(searchdata[1]!=undefined&&searchdata[2]!=undefined){
            dataSource=this.state.dataSource.filter(data=>{
                if(data.splace==searchdata[1]&&data.eplace===searchdata[2]){
                    return data;
                }
            })
        }else{
            dataSource=this.state.dataSource;
        } 
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
        console.log("colums",columns,);
        
        return ( 
            <div>          
                <Table
                 columns={columns}
                 dataSource={dataSource}
                 loading={this.state.loading}
                 bordered={true}
                >
                </Table>
                <Modal
                    visible={this.state.visibleComfrim}
                    title="预定确认"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                            Return
                        </Button>,
                        <Button key="submit" type="primary" loading={this.state.loadingComfrim} onClick={()=>{
                            this.handleOk(this.state.record.carno,searchdata[0])
                        }}>
                            Submit
                        </Button>,
                    ]}
                >
                    {
                         Object.keys(this.state.record).length > 0?
                         <div>
                            { 
                                // Object.keys(this.state.record).map((item,i)=>{
                                //     return (
                                //             <p key={i}>{this.state.record[item]}...</p>                          
                                //     );
                                // })
                                this.comfitrm()
                            }
                         </div>
                         :<p>数据错误！</p>
                    }
                   
                </Modal>
                xioahu
                {
                 searchdata[0]
                    // console.log("this.props.Search",this.props.Search);
                }
            </div>
         );
    }
}
 
export default SearchResult;