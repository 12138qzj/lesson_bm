import React, { Component } from 'react';
import { Redirect ,Route,Switch} from 'react-router-dom';
import { Layout } from 'antd';


import StorageUtils from '../../utils/storageUtis/StorageUtils';
import PageHeader from '../../compontents/herder/Header';
import PageLeftNac from '../../compontents/left-nav/LeftNav';
import AdminHome from './adminHome/AdminHome';
import AdminUser from './adminUser/AdminUser';
import AdminCar from './adminCar/AdminCar';


// import memoryUtils from '../../utils/memoryUtils/MemoryUtils';
import "./admin.less"
const { Header, Footer, Sider, Content } = Layout;

/**
 * 后台管理的路由组件
 */
export default class Admin extends Component {
    state={
        headertitle:'首页'
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

            <Layout className="admin">
                <Sider >
                    <PageLeftNac/>
                </Sider>
                <Layout className="weight">
                    <Header className="adminheader" >
                        <PageHeader username={user} headertitle={this.state.headertitle}/>
                    </Header>
                    <Content className="content" >
                        <Switch>
                            <Route exact path='/Admin/adminhome' component={AdminHome}/>
                            <Route path='/Admin/adminuser' component={AdminUser}/>
                            <Route path='/Admin/admincar'  component={AdminCar}/>
                            <Redirect to='/Admin/adminhome'/>
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
