import React, { Component } from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { fetchCityData } from './store/action.js';


class Common extends Component {
    // constructor(){
    //     super();
    //     const {dispatch}=this.props;
    //     this.cbs=()=>{
    
    //         //将远程仓库store 函数变为本地 赋予一个修改的功能
    //         //赋予该组件调度store仓库的功能函数
    //         return bindActionCreators({
    //             fetchCityData
    //         },dispatch);
    //       }
    // }
    state = {  }
    
    render() { 

            const {dispatch,fetchCityData}=this.props;
        // this.cbs=()=>{
    
        //     //将远程仓库store 函数变为本地 赋予一个修改的功能
        //     //赋予该组件调度store仓库的功能函数
        //     return bindActionCreators({
        //         fetchCityData
        //     },dispatch);
        //   }
        //   const {fetchCityData}={...this.cbs};
        console.log("fetchCityData",fetchCityData);

        console.log("this.props",this.props);


        // fetchCityData()
// 
        return ( 
            <div onClick={()=>{
              console.log("object");
              fetchCityData()(dispatch)
            }} >
                Common
            </div>
         );
    }
}
 
export default connect(function mapStateTopRops(state){
    //返回仓库内容 
    return state;
  },function mapDispatchToProps(dispatch){
      
      // let fetchCityData=fetchCityData()
    return {
      dispatch,
      fetchCityData
    }
  })(Common);