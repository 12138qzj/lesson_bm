import React, { Component } from 'react';
import { Link ,withRouter} from 'react-router-dom';

import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    SolutionOutlined,
  } from '@ant-design/icons';
  
import logo from '../../common/images/logo.png';
import './LeftNav.less';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
/**
 * 知识点：
 * withRouter 包装一个非路由组件，是该组件获得路由组件的this.props的属性
 */
class LeftNav extends Component {
    state = {
        collapsed: false,
      };
    
      onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
    render() {

        const path=this.props.location.pathname;
        console.log(this.props,path);
        return (

            <div>
                <Link to="/Admin/adminhome">
                    <div className="left-top">
                        <img src={logo} alt="" />
                        <h1>系统管理员</h1>
                    </div>
                </Link>
                {/* //defaultSelectedKeys默认选中item */}
                    <Menu theme="dark" defaultSelectedKeys={[path]} mode="inline">
                        <Menu.Item key="/Admin/adminhome" icon={<PieChartOutlined />}>
                            <Link to="/Admin/adminhome">
                                首页
                            </Link>
                        </Menu.Item>
                        {/* <Menu.Item key="2" icon={<DesktopOutlined />}>
                            Option 2
                        </Menu.Item> */}
                        <SubMenu key="sub1" icon={<UserOutlined />} title="用户管理">
                            <Menu.Item key="/Admin/adminuser"  icon={<UserOutlined /> }>
                            <Link to="/Admin/adminuser">
                                用户信息
                            </Link>
                            </Menu.Item>
                            <Menu.Item key="4"  icon={<PieChartOutlined />}>Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<TeamOutlined />} title="车票信息">
                            <Menu.Item key="/Admin/admincar" icon={<SolutionOutlined />} >
                            <Link to="/Admin/admincar">
                                车票查询
                            </Link>
                            </Menu.Item>
                            <Menu.Item key="8">退票详情</Menu.Item>
                        </SubMenu>
                    </Menu>
  
            </div>
        );
    }
}

export default withRouter(LeftNav);