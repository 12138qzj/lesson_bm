import React, { PureComponent } from 'react';
import {NavLink} from 'react-router-dom';

import { renderRoutes } from 'react-router-config';
import {Top,Tab,TabItem} from './HomeLayout.style.js';

const Home = (props) => {
    const {route}=props;
    return ( 
        <>
        <Top>
            <span className="iconfont menu">
                &#xe65c;
            </span>
            <span className="title">
                云音月
            </span>
            <span className="iconfont search">&#xe62b;</span>
        </Top>

        <Tab>
            <NavLink to="/recommend" activeClassName="selected">
                <TabItem><span>推荐</span></TabItem>
            </NavLink>
            {/*  */}
            <NavLink to="/singers" activeClassName="selected">
                <TabItem><span>歌手</span></TabItem>
            </NavLink>
            <NavLink to="/rank" activeClassName="selected">
                <TabItem><span>排行榜</span></TabItem>
            </NavLink>
        </Tab>
        {/* 为下面的子路由配置好 从父级拿到路由配置的数组 */}
            {renderRoutes(route.routes)}
        </>
    )
}

export default React.memo(Home);