import React,{ Component} from 'react';
import { Form, Input, Button,Checkbox } from 'antd';
    import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logo from './images/logo.png';
import './login.less'
// import './login.styl'
// import './login.css'
/**
 * 登陆的路由组件
 */
export default class Login extends Component {
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
                            initialValues={{ remember: true }}
                            onFinish="">
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your Username!' }]}>
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}>
                                <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
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
