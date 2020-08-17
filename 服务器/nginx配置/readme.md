- 服务器 测试网是否通了
    1. ping 101.37.116.167  有数据返回则是通的

    2. 在ect/nginx/conf.d /default.conf修改
            error_page  404              /404.html;
            阻止访问 deny ip
            允许访问 allow ip
    3. nginx配置文件
        在conf目录下nginx.conf文件配置
    4. 本地域名配置(DNS)
        在C:\Windows\System32\drivers\etc\hosts下修改本地域名绑定ip地址 ：127.0.0.1       qzj.com
    
    5. 服务器启动进行（对进程守护）pm2
        官网：  https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/

        配置json文件E:\lesson_bm\node\file-upload
```json
        {
            "apps": {
                "name": "file-upload",
                "script": "./index.js"
            }
        }

```
        - 启动 pm2 start pm2.json
        - 停止 pm2 stop 进程序号
