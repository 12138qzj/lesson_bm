// export
import { GET_HOME_LIST } from '../../constants';
import { fromJS } from 'immutable';
export const getHomeList = (data) => {
    console.log("111111111111111111111s");
    return {
        type: GET_HOME_LIST,
        homeList: data
            // console.log(1111);
    }
}