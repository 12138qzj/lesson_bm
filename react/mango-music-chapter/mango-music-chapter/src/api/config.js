const URL = {
    //推荐轮播
    carousel: "",
    //最新专辑
    newalbum: "https://u.y.qq.com/cgi-bin/musicu.fcg",
    //排行榜
    //https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg:数据url
    rankingList: "https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg"
}
const PARAM = {
    format: "jsonp",
    inCharset: "utf-8",
    outCharset: "utf-8",
    notice: 0
}

//腾讯文档要求的数据请求
const OPTION = {
    param: "jsonpCallback",
    prefix: "callback"
}


export { URL, PARAM, OPTION }