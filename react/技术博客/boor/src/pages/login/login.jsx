import React,{ Component} from 'react';
import { Form, Input, Button,Checkbox,message } from 'antd';
    import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {reqlogin} from '../..//api/index';
    import logo from './images/logo.png';
import './login.less'
// import './login.styl'
// import './login.css'
/**
 * 登陆的路由组件
 */
export default class Login extends Component {
    onFinish=(e,err)=>{
        if(!err){
            console.log(e,"提交了")
        }
        console.log(e,"提交了")
       // try{
            reqlogin(e.username,e.password).then(
                (data)=>{
                    //Promise 返回reject失败 则不会运行.then函数
                    //if(err){
                  //      console.log("数据请求失败err,data",err,data.data)
                   //      return;
                    //}else{
                        if(data){
                            console.log("数据请求成功err,data",err,data.data);
                            message.success('登陆成功')
                            //replace:替换栈中的网页
                            //不能回退到这个界面
                            this.props.history.replace('/Admin')
                        }else{
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
    render(){
        return(
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登陆</h2>
                    {/* <div className="login-form">                      */}
                        <Form
                            name="normal_login"
                            className="login-form"
                            //初始值
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                            >
                            <Form.Item
                            
                                name="username"
                                //赋默认值
                                initialValue="Username"

                                rules={[{ required: true, message: 'Please input your Username!' },
                                {min:4,message:"用户名至少输入4位"},
                                {max:12,message:"用户名不能大于12位"},
                                //正则表达式验证
                                 {pattern:/^[a-zA-Z0-9_]+$/,message:"用户名不和规则"}]}>
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' },
                                () => ({
                                    validator(rule, value) {
                                    console.log("object",rule,value);
                                    //!value || getFieldValue('password') === value
                                   
                                      if (value.length<4) {
                                        return Promise.reject('密码长度不能小于4位');
                                      }else if(value.length>12){
                                        return Promise.reject('密码长度不能大于12位');
                                      }else{
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
                        
                    {/* </div> */}
                </section>
                {/* Login */}
                {/* login */}
            </div>
        )
    }
};
