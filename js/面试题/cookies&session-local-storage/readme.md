## cookies
 - 内容：
    1. name
    2. value
    3. Domain:cookie 生效域名 baidu.com
    4. path : 生效路径
    5. expires:过期时间 默认是当前session失效(//关闭网页失效)
    6. httpOnly:cookie 只在http传输， js 无法操作的（cookie可以由后端 set-cookie响应头设置 ，也可以由前端 js document.cookie=" " 设置）
    7. secure:只在https的环境下面生效
    cookie只要符合domain+path 的生效范围 就会随着 http 请求发送CSRF
        CSRF攻击 :拿到cookie去做操作
        xss攻击 : 注入html、css、js代码 拿到本存储信息

            
        解决：
        1. token 
            用户登陆完 服务端会给你一个token
            前端存起来
            之后 请求 都要携带这个token
            这样的对于 qzj.com  发出请求是没有这个 token 
        2. 浏览器会给这个请求带 reffer字段 表明这个请求来源
            服务器端可以检测这个字段 来判断身份
         
    8. sameSite:
        lax: localhost 的某些get请求在qzj.com发出也能带cookie
        strit:localhost的请求 只有在localhost发出才会带cookie
        none: localhost的get请求不管在什么域发出都会携带cookie
