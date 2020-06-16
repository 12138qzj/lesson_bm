import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { reqlogin } from '../..//api/index';
import StorageUtils from '../../utils/storageUtis/StorageUtils';
import MemoryUtils from '../../utils/memoryUtils/MemoryUtils';
import Mianbg from '../../compontents/mianbg/Mianbg';

import logo from '../../common/images/logo.png';
import './login.less'
import { Redirect, Link } from 'react-router-dom';
// import './login.styl'
// import './login.css'
/**
 * 登陆的路由组件
 */
export default class Login extends Component {
    state = {
        title: 0
    }
    onFinish = (e, err) => {
        if (!err) {
            console.log(e, "提交了")
        }
        console.log(e, "提交了")
        // try{
        reqlogin(e.username, e.password,this.state.title).then(
            (data) => {
                if (data) {
                    console.log("数据请求成功err,data", err, data.data);
                    if (data.data.state == 1) {
                        StorageUtils.saveUser(data.data.username)
                        message.success('登陆成功')
                        //replace:替换栈中的网页
                        //不能回退到这个界面
                        // MemoryUtils.user = data.data.username;

                        this.props.history.replace('/Admin')
                    } else {
                        message.error('登陆失败，账号密码错误！')
                    }

                } else {
                    console.log("数据请求返回无数据")

                }
                // }
            }
        )
        // }catch(error){
        //     alert("数据请求失败error")
        //     console.log("数据请求失败error",error)
        // }

    }
    ChangeTitle(value) {
        // event.isPropagationStopped()
        // console.log("value",value);
        this.setState({
            title:value
        })
    }
    render() {
        const user = StorageUtils.getUser();
        if (user) {
            return <Redirect to="/Admin" />
        }
        return (

            
            <Mianbg>    
                <section className="login-content">
                    <div className="title">
                        <span>
                            {this.state.title == 0 ? '用户登陆' : '管理员登陆'} 
                        </span>
                        <div>
                            <a href="#" onClick={this.ChangeTitle.bind(this,1)} >管理员登陆</a>
                            <span></span>
                            <a href="#" onClick={this.ChangeTitle.bind(this,0)}>用户登陆</a>
                        </div>
                    </div>
                    {/* <div className="login-form">                      */}
                    <Form
                        name="normal_login"
                        className="login-form"
                        //初始值
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}>
                        <Form.Item

                            name="username"
                            //赋默认值
                            initialValue="Username"

                            rules={[{ required: true, message: 'Please input your Username!' },
                            { min: 4, message: "用户名至少输入4位" },
                            { max: 12, message: "用户名不能大于12位" },
                            //正则表达式验证
                            { pattern: /^[a-zA-Z0-9_]+$/, message: "用户名不和规则" }]}>
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder={
                                this.state.title == 0 ? '请输入用户名' : '管理员账号'
                            } />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' },
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
                            }),]}>
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Form.Item>
                        
                    </Form>
                    <div style={this.state.title == 0 ? {display:"inline-block"} : {display:"none"}}>
                        <Link to="/Register">
                            没有账号？去注册
                        </Link>
         
                        </div>
                    {/* </div> */}
                </section>
            </Mianbg>    
            
          
        )
    }
};
