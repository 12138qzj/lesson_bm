import { combineReducers } from 'redux';
import { reducer as recommendReducer } from '../application/Recommend/store/index';



// const Recommend = (state = "", action) => {
//     return state;
// }


export default combineReducers({
    recommend: recommendReducer
})