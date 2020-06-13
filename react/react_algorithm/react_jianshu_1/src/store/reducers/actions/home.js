// export
import { GET_HOME_LIST } from '../../constants';
export const getHomeList = () => {
    console.log("111111111111111111111s");
    return {
        type: GET_HOME_LIST,
        homeList: [1, 2, 4]
            // console.log(1111);
    }
}