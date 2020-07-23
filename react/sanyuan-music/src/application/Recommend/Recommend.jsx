import React, { useEffect,useState ,memo} from 'react';
// import { getRecommendListRequest } from '../../../api/request/index.js';

import {connect} from 'react-redux';
import * as actionTypes from './store/actionCreators';
// class Recomment extends Component {
//     state = {  }
//     render() { 
//         return ( 
//             <div>
//                 Recomment
//             </div>
//          );
//     }
// }
 
// export default Recomment;
function Recomment(props){
    console.log(props);
    const {recommendList,banners,enterLoading}=props;


    const { getRecommendListDataDispatch, getBannersDataDispatch ,dispatch} = props
    useEffect(()=>{
        if(!recommendList.length){
            getRecommendListDataDispatch()
        }
    },[])
    console.log(banners,enterLoading);
    return(
        <>
            Recomment
            {recommendList}

        </>
    )
}


const mapStateToProps=(state)=>({
    recommendList:state.recommend.recommendList,
    banners:state.recommend.banners,

    enterLoading:state.recommend.enterLoading
})
const mapDispatchToProps=(dispatch)=>{
    return{
        dispatch,
        getRecommendListDataDispatch(){
            console.log("dispatch",dispatch);
            dispatch(actionTypes.getRecommendList())
        },
        getBannersDataDispatch(){
            dispatch(actionTypes.getBanners())
        },
    }

}

export default  connect(mapStateToProps,mapDispatchToProps)(memo(Recomment,[]))