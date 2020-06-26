import React, { Component } from 'react';
import { Form, Input, InputNumber, Button, TimePicker, Select } from 'antd';

const { Option } = Select;

// import moment from 'moment';
const { RangePicker } = TimePicker;

class CarInfoForm extends Component {
    constructor() {
        super();
        this.layout = {
            labelCol: {
                span: 6,
            },
            wrapperCol: {
                span: 18,
            },
        };
    }
    state = {}
    onFinish(e) {
        console.log("值为",e);
    }
    render() {
        console.log("this.props",this.props);
        return (
            <Form {...this.layout} name="nest-messages" onFinish={this.props.AddCarInfo} >
                <Form.Item
                    name={['car', 'carno']}
                    label="车次"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['car', 'stime']}
                    label="始/终时间"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <RangePicker />
                </Form.Item>
                <Form.Item
                    name={['car', 'splace']}
                    label="出发地"
                    rules={[
                        {
                            required: true,

                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['car', 'eplace']}
                    label="目的地"
                    rules={[
                        {
                            required: true,

                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item name={['car', 'cartype']} label="车型">
                    <Select  style={{ width: 120 }} allowClear>
                        <Option value="高铁">高铁</Option>
                        <Option value="火车">火车</Option>
                        <Option value="汽车">汽车</Option>


                    </Select>
                </Form.Item>
                <Form.Item
                    name={['car', 'ticnum']}
                    label="票数"
                    rules={[
                        {
                            type: 'number',
                            min: 0,
                            max: 99,
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    name={['car', 'paymon']}
                    label="金额"
                    rules={[
                        {
                            type: 'number',
                            min: 0,
                            max: 99,
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item wrapperCol={{ ...this.layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit"> 
                        确认添加
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default CarInfoForm;