import React, { Component } from 'react';
import { Link ,withRouter} from 'react-router-dom';

import {  Menu } from 'antd';
import {
    // DesktopOutlined,
    PieChartOutlined,
    // FileOutlined,
    TeamOutlined,
    UserOutlined,
    SolutionOutlined,
  } from '@ant-design/icons';
  import { menuList,usermenuList } from './config/admin';
  
import logo from '../../common/images/logo.png';
import './LeftNav.less';
// const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
/**
 * 知识点：
 * withRouter 包装一个非路由组件，是该组件获得路由组件的this.props的属性
 */
class LeftNav extends Component {
    state = {
        collapsed: false,
      };
    
      componentWillMount () {
        //   console.log(menuList);
        this.menuNodes = this.props.type==="admin"?this.getMenuNodes_map(menuList):
        this.getMenuNodes_map(usermenuList);
      }
      onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
      getMenuNodes_map = (menuList) => {
        return menuList.map(item => {
          if(!item.children) {
              console.log(item.icon);
            return (
              <Menu.Item key={item.key}  
              icon={item.icon==="0"?<PieChartOutlined />:""}
              >
                <Link to={item.key}>
                  
                  <span>{item.title}</span>
                </Link>
              </Menu.Item>
            )
          } else {
            return (
              <SubMenu
                key={item.key}
                icon={<UserOutlined />}
                title={  
                  <span>{item.title}</span>    
                }
              >
                {this.getMenuNodes_map(item.children)}
              </SubMenu>
            )
          }
    
        })
      }
    //   getMenuNodes = (menuList) => {
    //     // 得到当前请求的路由路径
    //     const path = this.props.location.pathname
    
    //     return menuList.reduce((pre, item) => {
    //         console.log(item );
    //       // 如果当前用户有item对应的权限, 才需要显示对应的菜单项
    //       if (this.hasAuth(item)) {
    //         // 向pre添加<Menu.Item>
    //         if(!item.children) {
    //           pre.push((
    //             <Menu.Item key={item.key}>
    //               <Link to={item.key}>
    //                 {/* <Icon type={item.icon}/> */}
    //                 <span>{item.title}</span>
    //               </Link>
    //             </Menu.Item>
    //           ))
    //         } else {
    
    //           // 查找一个与当前请求路径匹配的子Item
    //           const cItem = item.children.find(cItem => path.indexOf(cItem.key)===0)
    //           // 如果存在, 说明当前item的子列表需要打开
    //           if (cItem) {
    //             this.openKey = item.key
    //           }
    
    //           // 向pre添加<SubMenu>
    //           pre.push((
    //             <SubMenu
    //               key={item.key}
    //               title={
    //                 <span>
    //               {/* <Icon type={item.icon}/> */}
    //               <span>{item.title}</span>
    //             </span>
    //               }
    //             >
    //               {this.getMenuNodes(item.children)}
    //             </SubMenu>
    //           ))
    //         }
    //       }
    
    //       return pre
    //     }, [])
    //   }
    render() {

        const path=this.props.location.pathname;
        console.log(this.props,path);
        return (

            <div>
                <Link to="/Admin/adminhome">
                    <div className="left-top">
                        {/* 头像 */}
                        <img src={logo} alt="" />
                        <h1>用户</h1>
                    </div>
                </Link>
                {/* //defaultSelectedKeys默认选中item */}
                    <Menu theme="dark" defaultSelectedKeys={[path]} mode="inline">
                        {
                            this.menuNodes
                        }
                    </Menu>
  
            </div>
        );
    }
}

export default withRouter(LeftNav);