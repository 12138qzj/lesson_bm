import React, { Component } from 'react';
import { Table, Input, Button, Popconfirm, Form, Modal, message } from 'antd';
import { reqgetCarInfo, reqAddCarInfo } from '../../../api/index';
import CarInfoForm from './addcarinfoform/AddCarInfoForm';


class AdminCar extends Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: '车次',
                dataIndex: 'carno',
                width: '10%',
                // editable: true,
            },
            {
                title: '出发地/时间',
                dataIndex: 'splace_time',
                width: "13%",
                render: (text, record, index) => {
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
                render: (text, record, index) => {
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
                width: "13%",
                key: 'eplace_time',
                render: (text, record, index) => {
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
                render: (text, record) =>
                    this.state.dataSource.length >= 1 ? (
                        <Popconfirm title="车次删除?" onConfirm={() => this.handleDelete(record.key)}>
                            <a>删除车次</a>
                        </Popconfirm>
                    ) : null,
            },
        ];
        this.state = {
            dataSource: [],
            count: 0,
            visibleComfrim: false,
            loading:false,
        };
    }


    //表格初始化
    InitTableData = () => {
        this.columns = [
            {
                title: '车次',
                dataIndex: 'carno',
                width: "10%",
                key: 'carno',
                render: (text) => (<a>{text}</a>)
            },
            {
                title: '出发地/时间',
                dataIndex: 'splace_time',
                width: "13%",
                render: (text, record, index) => {
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
                render: (text, record, index) => {
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
                width: "13%",
                key: 'eplace_time',
                render: (text, record, index) => {
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

                render: (text, record) =>
                    this.state.dataSource.length >= 1 ? (
                        <Popconfirm title="车次删除?" onConfirm={() => this.handleDelete(record.key)}>
                            <a>删除车次</a>
                        </Popconfirm>
                    ) : null,


                // this.state.dataSource.length >= 1 ? (
                //     <Popconfirm title="确定删除?" onConfirm={() => this.handleDelete(record.key)}>
                //         <a>删除订单</a>
                //     </Popconfirm>
                // ) : null,
            },
        ];
    }


    //请求数据
    GetCarInfo = () => {

        reqgetCarInfo().then(
            (res) => {
                console.log("dfdsf", res.data.state);
                if (res.data.state === 1) {
                    console.log("dfdsfggg", res.data.data);
                    let count=0;
                    this.setState({
                        dataSource: res.data.data.map(item => {
                            count++;
                            return {
                                key: item.CarNo,
                                carno: item.CarNo,
                                splace: item.SPlace,
                                eplace: item.EPlace,
                                cartype: item.CarType,
                                stime: item.STime,
                                etime: item.ETime,
                                ticnum: item.TicNum,
                                paymon: item.PayMon,
                            }
                        }),
                        count: count,
                        loading: false,
                    })
                } else {
                    this.setState({
                        dataSource: [],
                        loading: false,
                    })
                }
                console.log("Count",this.state.count);
            }
        )
    }

    handleDelete = key => {
        const dataSource = [...this.state.dataSource];
        this.setState({
            dataSource: dataSource.filter(item => item.key !== key),
        });
    };

    handleAdd = () => {
        // const { count, dataSource } = this.state;
        // const newData = {
        //     key: count,
        //     name: `Edward King ${count}`,
        //     age: 32,
        //     address: `London, Park Lane no. ${count}`,
        // };
        this.setState({
            // dataSource: [...dataSource, newData],
            // count: count + 1,
            visibleComfrim: true,
        });
    };
    handleAddCarInfo=(event)=>{
        console.log("添加值为：",event);
        let e=event.car;

        let data={};
        data.key=e.carno;
        data.carno=e.carno;
        data.splace=e.splace;
        data.eplace=e.eplace;
        data.cartype=e.cartype;
        data.stime=e.stime[0]._d.toTimeString().substring(0,5);
        data.etime=e.stime[1]._d.toTimeString().substring(0,5);
        data.ticnum=e.ticnum;
        data.paymon=e.paymon;
        this.handleSave(data);

        this.setState({
            // dataSource: [...dataSource, newData],
            // count: count + 1,
            
        });
    }
    componentDidMount(){
        this.GetCarInfo()
    }
    handleCancel=()=> {
        this.setState({
            visibleComfrim: false,
        })
    }
    handleSave = (event) => {
        reqAddCarInfo(event).then(res=>{
            if (res.data.state === 1) {
                console.log("dfdsfggg", res.data.data);
                message.success("添加成功!")
                this.setState({
                    dataSource: [...this.state.dataSource,event],
                    count:this.state.count+1,
                    visibleComfrim: false,
                })
            } else {
                message.error("添加失败!")

                this.setState({
                    dataSource: [...this.state.dataSource],
                    visibleComfrim: false,
                })
            }
        })
    };

    render() {
        return (
            <div>
                <Button
                    onClick={this.handleAdd}
                    type="primary"
                    style={{
                        marginBottom: 16,
                    }}
                >
                    添加车次
                </Button>
                <Table
                    // components={components}
                    loading={this.state.loading}

                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={this.state.dataSource}
                    columns={this.columns}
                />
                <Modal
                    visible={this.state.visibleComfrim}
                    title="车次信息添加"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                            返回
                        </Button>,
                    ]}
                >
                    <CarInfoForm AddCarInfo={this.handleAddCarInfo}>

                    </CarInfoForm>

                </Modal>
            </div>




        );
    }
}

export default AdminCar;