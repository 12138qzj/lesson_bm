//跨域请求 服务于rangking /Recommend.jsx 
import originjsonp from 'jsonp';
//url 请求数据url
//data 发请求的数据
let jsonp =(url , data , option)=>{

    return new Promise((resolve, reject)=>{
        originjsonp(buildUrl(url,data),option,(err,data)=>{
            if (!err) {
                resolve(data);
              } else {
                reject(err);
              }
        })
    })
}
function buildUrl(url, data) {
    let params = [];
    for (var k in data) {
        params.push(`${k}=${data[k]}`);
    }
    let param = params.join("&");
    if (url.indexOf("?") === -1) {
        url += "?" + param;
    } else {
        url += "&" + param;
    }
    return url;
  }
export default jsonp;