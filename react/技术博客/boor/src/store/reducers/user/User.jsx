import { Switch } from "react-router-dom"
import {GET_USER_LIST} from '../../constants';


//homeList 列表数据
// const defaultState=fromJS({
//     homeList:["12"]
// })
const defaultState={
    startplace: "",
    endpalce:"",
  }
//
export default function(state=defaultState,action){
    switch(action.type){
        case GET_USER_LIST:
            //const newHomeList =action.homeList;
            //state.set('homeList',newHomeList)返回一个新的state
            //不改变原先的数据
            //return state.set('homeList',newHomeList)
            return {
                userList:action.userList
                // state.homeList=
            };
        default:
            return defaultState
    }
}