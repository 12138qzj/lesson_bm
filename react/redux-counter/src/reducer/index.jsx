
//给state（状态）赋默认值
// export default ( state=0,action)=>{

//     switch(action.type){
//         case 'INCREMENT':
//             return state+1
//         case 'DECREMENT':
//             return state -1;
//         default :
//             return state;
//     }
// }
// 商品，  购物车商品， 购物车
import{ combineReducers } from "redux"
import cart from './cart'
import products from './products'


export default combineReducers({
  cart,
  products
})