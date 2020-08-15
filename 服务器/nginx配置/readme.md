- 服务器 测试网是否通了
    1. ping 101.37.116.167  有数据返回则是通的

    2. 在ect/nginx/conf.d /default.conf修改
            error_page  404              /404.html;
            阻止访问 deny ip
            允许访问 allow ip