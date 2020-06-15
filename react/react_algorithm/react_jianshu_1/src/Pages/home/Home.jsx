import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {fromJS} from 'immutable';
import { getHomeList } from '../../store/reducers/actions/home';
class Home extends Component {
    state = {}

    componentDidMount() {
      //  console.log("this.propsdddddddddd", this.props)
        // console.log("dddddddddd3333333",this.props.fetchHomeList())

        // this.props.dispatch(getHomeList)
         this.props.fetchHomeList();
    }
    render() {
      //  console.log("this.props", this.props)
        return (
            <div>
                Home
            length:{ this.props.homeList.size}
            </div>);
    }
}
// 获取 数据
// state： 整个 store， home 页面，只要 home模块，过滤一下
// 过滤完结果（return）都会由 connect 传给你组件的 props
const mapStateToProps = (state) => {
  //  console.log("homeList", state)
    //console.log("state.home",state.home.getIn(['home', 'homeList']));
    return {
        homeList: state.getIn(['home', 'homeList'])//state.home.homeList
    }
}
const mapDispatchToProps = (dispatch) => {
    // console.log("getHomeList", getHomeList)
    return {
        fetchHomeList() {
            axios.get('/data/home.json')
                .then(res => {
                    console.log(res);
                    const homeList=res.data;
                    console.log("homeList",homeList);
                    let action= getHomeList(fromJS(homeList))
                    dispatch(action)
                })
            // dispatch(getHomeList)没有拿到action,才会报错
            //dispatch(getHomeList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);