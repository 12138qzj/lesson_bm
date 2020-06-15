import { Switch } from "react-router-dom"
import { fromJS } from "immutable"
import {GET_HOME_LIST} from '../../constants';


//homeList 列表数据
// const defaultState=fromJS({
//     homeList:["12"]
// })
const defaultState=fromJS({
    homeList: [1,2]
  })
//
export default function(state=defaultState,action){
    switch(action.type){
        case GET_HOME_LIST:
            const newHomeList =action.homeList;
            //state.set('homeList',newHomeList)返回一个新的state
            //不改变原先的数据
            return state.set('homeList',newHomeList)
            // return {
            //     homeList:action.homeList
            //     // state.homeList=
            // };
        default:
            return defaultState
    }
}