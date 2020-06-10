import jsonp from './jsonp';
import { URL, PARAM } from './config';
export function getNewAlbum() {
    //获取排行榜的数据
    const data = Object.assign({}, PARAM, {
        g_tk: 1278911659,
        hostUin: 0,
        platform: "yqq",
        needNewCode: 0,
        data: `{"albumlib":
{"method":"get_album_by_tags","param":
{"area":1,"company":-1,"genre":-1,"type":-1,"year":-1,"sort":2,"get_tags":1,"sin":0,"num":50,"click_albumid":0},
"module":"music.web_album_library"}}`
    });
    const OPTION = {
        param: "callback",
        prefix: 'callback'
    }
    console.log("data", data);
    return jsonp(URL.newalbum, data, OPTION);
}

// export function getNewAlbum() {
//     //可以设置请求url
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { //模拟数据请求的延迟
//                 resolve([{
//                     id: 1,
//                     img: "http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0",
//                     name: "断桥",
//                     singer: "陈小溪",
//                     publicTime: "2018-01-28"
//                 }, {
//                     id: 2,
//                     img: "http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0",
//                     name: "断桥",
//                     singer: "陈小溪",
//                     publicTime: "2018-01-28"
//                 }, {
//                     id: 3,
//                     img: "http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0",
//                     name: "断桥",
//                     singer: "陈小溪",
//                     publicTime: "2018-01-28"
//                 }, {
//                     id: 4,
//                     img: "http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0",
//                     name: "断桥",
//                     singer: "陈小溪",
//                     publicTime: "2018-01-28"
//                 }, {
//                     id: 5,
//                     img: "http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0",
//                     name: "断桥",
//                     singer: "陈小溪",
//                     publicTime: "2018-01-28"
//                 }, {
//                     id: 6,
//                     img: "http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0",
//                     name: "断桥",
//                     singer: "陈小溪",
//                     publicTime: "2018-01-28"
//                 }, {
//                     id: 7,
//                     img: "http://p1.music.126.net/_PsKVKgTAhOvXJmL-r9KlQ==/109951165041015191.jpg?imageView=1&type=webp&thumbnail=370x0",
//                     name: "断桥",
//                     singer: "陈小溪",
//                     publicTime: "2018-01-28"
//                 }])
//             },
//             3000)
//     });
// }