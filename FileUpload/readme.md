

大文件      上传        8M
切片
1. js 在es6 文件对象file node file stream 有所增强。
    任何文件都是二进制 分割bolb
    strat size offset
    http请求可并发 n个切片并发上传 速度更快，改善了体验。
    
    前端的切片

2. 知识点 
    (Object.prototype.toString.call("需要检测的变量")); 检测变量的具体类型
    
    新版本的XMLHttpRequest对象，针对老版本的缺点，做出了大幅改进。
   　　* 可以设置HTTP请求的时限。
   　　* 可以使用FormData对象管理表单数据。
   　　* 可以上传文件。
   　　* 可以请求不同域名下的数据（跨域请求）。
   　　* 可以获取服务器端的二进制数据。
   　　* 可以获得数据传输的进度信息

   新版本的XMLHttpRequest对象，可以向不同域名的服务器发出HTTP请求。这叫做"跨域资源共享"（Cross-origin resource sharing，简称CORS）。
 - 服务器端
    如何键这些切片，合并成一个，并且能显示原来的图片
    stream 流