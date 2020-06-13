import { Switch } from "react-router-dom"
import { fromJS } from "immutable"
import {GET_HOME_LIST} from '../../constants';


//homeList 列表数据
// const defaultState=fromJS({
//     homeList:["12"]
// })
const defaultState={
    homeList: []
  }
//
export default function(state=defaultState,action){
    switch(action.type){
        case GET_HOME_LIST:
            return {
                homeList:action.homeList
                // state.homeList=
            };
        default:
            return defaultState
    }
}