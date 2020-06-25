import React, { Component } from 'react';
import { DatePicker, Input, Button, Form } from 'antd';
import moment from 'moment';
import { formateDateSearch } from '../../../../utils/timeUtils/TimeUtils'

import './SearchHeader.less';

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];


class SearchHeader extends Component {
    constructor(porps) {
        super(porps);
        //非绑定组件
        this.starttime = React.createRef();

        this.startpalce = React.createRef();

        this.endpalce = React.createRef();


    }
    state = {
        date: formateDateSearch()
    };

    componentDidMount() {
        console.log("formateDateSearch()", formateDateSearch());
        let endpalce = this.endpalce.current.state.value;
        let starttime = this.starttime.current.props.defaultValue._i;
        let startpalce = this.startpalce.current.state.value;
        // console.log("object",);
        this.props.Change(starttime, startpalce, endpalce);
    }
    Search() {
        let endpalce = this.endpalce.current.state.value;
        let starttime = this.starttime.current.props.defaultValue._i;
        let startpalce = this.startpalce.current.state.value;
        // console.log("object",);
        this.props.Change(starttime, startpalce, endpalce);
        console.log("点击", endpalce, startpalce, starttime);
        console.log("点击this", this.starttime.current);
    }
    DateChange = (value, mode) => {
        console.log("value", value, mode);
        this.setState({
            date: mode,
        })
    }
    render() {
        return (
            <div className="SearchHeader">
                <div className="warp">


                    <Form name="horizontal_login" layout="inline" >
                        <span className="span-style">出发日期：</span>
                        <Form.Item>
                            <DatePicker className="datainput-style" defaultValue={moment(this.state.date, dateFormat)} format={dateFormat}
                            ref={this.starttime} onChange={this.DateChange} />
                        </Form.Item>
                        
                        <span className="span-style">出发地：</span>
                        <Form.Item
                            name="spalce"
                            rules={[{ required: true, message: '请输入起点！' }]}
                        >
                            <Input placeholder="Basic usage" className="input-style"
                                ref={this.startpalce} />
                            {/* <Input  placeholder="Username" /> */}
                        </Form.Item>
                        <span className="span-style">目的地：</span>
                        <Form.Item
                            name="epalce"
                            rules={[{ required: true, message: '请输入终点!'}]}
                        >
                            {/* <Input
                               
                                type="password"
                                placeholder="Password"
                            /> */}
                            
                            <Input placeholder="Basic usage" className="input-style"
                                ref={this.endpalce} />

                        </Form.Item>
                        <Form.Item shouldUpdate={true}>
                            {() => (
                                // <Button
                                //     type="primary"
                                //     htmlType="submit"
                                // // disabled={
                                // //     !form.isFieldsTouched(true) ||
                                // //     form.getFieldsError().filter(({ errors }) => errors.length).length
                                // // }
                                // >
                                //     Log in
                                // </Button>
                                <Button type="primary"
                                htmlType="submit"
                                 onClick={this.Search.bind(this)} className="btn">
                                    Search
                                </Button>
                            )}                           
                        </Form.Item>
                    </Form>



                    {/* formateDateSearch() */}




                </div>

            </div>

        );
    }
}

export default SearchHeader;