GET  POST 使用场景
在浏览器中 使用标签 img script link 参数只能放url中 使用GET方法

XMLHttprequest http 自定义请求方式

- 语义不一样
    - GET 资源可以缓存的 POST一般不缓存
    - GET url长度有限制(浏览器限制的) POST req body (不受限制)
    - POST相对于GET安全一些 http(明文传输)
    - https加密传输协议