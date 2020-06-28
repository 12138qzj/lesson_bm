import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import {reqregister} from '../../api/index';
import Mianbg from '../../compontents/mianbg/Mianbg';
import {
    Form,
    Input,
    Checkbox,
    Button,
    message,

} from 'antd';

import  './Register.less';

class Register extends Component {
    state = {};

    onFinish = values => {
        console.log('Received values of form: ', values);
        reqregister(values.username,values.password).then(
            data=>{
                console.log("registerdata",data)
                if(data.data.state==1){
                    message.success('注册成功');
                    this.props.history.replace('/login')
                }else{
                    message.error('注册失败！')
                   // this.props.history.replace('/login')
                }
            }
        )
        
    };
    Pagechange(e){
        e.isPropagationStopped()
        console.log("this.props",this.props,e); 
        this.props.history.go(-1)
    }
    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 8,
              },
            },
          };
        return (
            <Mianbg>
                <div className="register-content">
                    <Form
                        {...formItemLayout}
                        //   form={form}
                        name="register"
                        onFinish={this.onFinish}
                        scrollToFirstError
                    >
                        <Form.Item
                            name="username"
                            label="Username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                                { max: 12, message: "用户名不能大于12位" },
                                //正则表达式验证
                                { pattern: /^[a-zA-Z0-9_]+$/, message: "用户名不和规则" }
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                () => ({
                                    validator(rule, value) {
                                        console.log("object", rule, value);
                                        //!value || getFieldValue('password') === value
    
                                        if (value.length < 4) {
                                            return Promise.reject('密码长度不能小于4位');
                                        } else if (value.length > 12) {
                                            return Promise.reject('密码长度不能大于12位');
                                        } else {
                                            return Promise.resolve();
                                        }
    
                                    },
                                })
                            ]}
                            hasFeedback
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            label="Confirm Password"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject('The two passwords that you entered do not match!');
                                    },
                                }),
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="agreement"
                            valuePropName="checked"
                            rules={[
                                { validator: (_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
                            ]}
                            {...tailFormItemLayout}
                            >

                            <Checkbox>
                                I have read the <a href="">agreement</a>
                            </Checkbox>
                        </Form.Item>
                        <Form.Item 
                        {...tailFormItemLayout}
                        >
                            <Button type="primary" htmlType="submit" className="btn-rehister"> 
                                注册
                            </Button>
                            <a href="#" onClick={this.Pagechange.bind(this)}>已有账号</a>
                        </Form.Item>
                    </Form>
                </div>

            </Mianbg>
        );
    }
}

export default Register;