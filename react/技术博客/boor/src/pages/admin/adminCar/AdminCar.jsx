import React, { Component } from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import {reqgetCarInfo,regaltercarinfo} from '../../../api/index';


class AdminCar extends Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: '车次',
                dataIndex: 'carno',
                width: '30%',
                // editable: true,
            },
            {
                title: '出发地',
                dataIndex: 'age',
            },
            {
                title: 'address',
                dataIndex: 'address',
            },
            {
                title: 'operation',
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
            dataSource: [
                
            ],
            count: 0,
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
                    this.setState({
                        dataSource: res.data.data.map(item => {
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
                        loading: false,
                    })
                } else {
                    this.setState({
                        dataSource: [],
                        loading: false,
                    })
                }

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
        const { count, dataSource } = this.state;
        const newData = {
            key: count,
            name: `Edward King ${count}`,
            age: 32,
            address: `London, Park Lane no. ${count}`,
        };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1,
        });
    };

    handleSave = row => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        this.setState({
            dataSource: newData,
        });
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
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={this.state.dataSource}
                    columns={this.columns}
                />
            </div>
        );
    }
}

export default AdminCar;