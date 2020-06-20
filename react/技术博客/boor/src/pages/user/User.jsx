import React, { Component } from 'react';
import { Redirect ,Route,Switch} from 'react-router-dom';
import { Layout } from 'antd';


import StorageUtils from '../../utils/storageUtis/StorageUtils';
import PageHeader from '../../compontents/herder/Header';
import PageLeftNac from '../../compontents/left-nav/LeftNav';
import Userhome from './userhome/Userhome';
import Userorder from './userorder/UserOrder';
import Userinfo from './userinfo/Userinfo';
// import AdminHome from './adminHome/AdminHome';
// import AdminUser from './adminUser/AdminUser';
// import AdminCar from './adminCar/AdminCar';


// import memoryUtils from '../../utils/memoryUtils/MemoryUtils';
import "./User.less"
const { Header, Footer, Sider, Content } = Layout;

/**
 * 后台管理的路由组件
 */
export default class User extends Component {
    state={
        headertitle:'用户首页'
    }
    change(title){
        this.setState({
            headertitle:title
        })
    }
    render() {
        let time=new Date().getFullYear();
        const user = StorageUtils.getUser();
        if (!user) {
            return <Redirect to="/login" />
        }
        return (

            <Layout className="User">
                <Sider >
                    <PageLeftNac type="user"/>
                </Sider>
                <Layout className="weight">
                    <Header className="userheader" >
                        <PageHeader username={user} headertitle={this.state.headertitle}/>
                    </Header>
                    <Content className="content" >
                        <Switch>    
                            <Route path='/user/userhome'  component={Userhome}/>
                            <Route path='/user/ordeing'  component={Userorder}/>
                            <Route path='/user/userinfo'  component={Userinfo}/>
                            <Redirect to='/user/userhome'/>
                        </Switch>

                    </Content>
                    <Footer>
                        <p style={{textAlign:"center"}}>Copyright © 2019-{time}
                            {/* <span >{document.write(new Date().getFullYear())}</span> */}
                             ByteSoft studio. All Rights Reserved. 小杰工作室 版权所有
                        </p>
                    </Footer>
                </Layout>
            </Layout>
        )
    }
};
