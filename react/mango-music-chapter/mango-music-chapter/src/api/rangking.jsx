
//模块化 ，排行榜的所有接口 一个文件做一件事情
import jsonp from './jsonp';
import {URL, PARAM ,OPTION} from './config';
export function getRangkingList(){
    //获取排行榜的数据
    const data=Object.assign({},PARAM,{
        g_tk: 5381,
        uin: 0,
        platform: "h5",
        needNewCode: 1,
        _: new Date().getTime()
    });
    console.log(data);
    return jsonp(URL.rankingList, data, OPTION);
}

export function getRankingInfo(){

}

// export default {
//     getRankingList,
//     getRankingInfo
// }