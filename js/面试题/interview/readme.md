##  js 基本数据类型

1. undefined , null ,number , string ,boolean

## js 引用类型

  Object,Array,Function,

## js深拷贝方法



 ###  JSON.parse

1. 对象有循环引用,会报错
2. 他无法实现对函数 、RegExp等特殊对象的克隆
3. 会抛弃对象的constructor,所有的构造函数会指向Object

### 数组深拷贝

```js
		let map = new Map();
        function deepClone(obj) {
            let t = {}
                //使用Map结构  存入缓存  
            if (map.get(obj)) return map.get(obj);
            map.set(obj, t);
            Object.keys(obj).forEach(element => {
                if (typeof obj[element] === "object") {
                    t[element] = deepClone(obj[element])
                } else {
                    t[element] = obj[element]
                }
            });
            return t;
        }
```

## 谈谈你对Promise的了解

- Promise存在三个状态：pending（等待态）、fulfilled（成功态）、rejected（失败态）
- pending为初始态，并可以转化为fulfilled和rejected
- 成功时，不可转为其他状态，且必须有一个不可改变的值（value）
- 失败时，不可转为其他状态，且必须有一个不可改变的原因（reason）



## 滴滴一面

- 设计模式

​    订阅发布者模式 MVVM template compile(setstate的使用)

- 代理模式 proxy 

​    来代替defineProperty

### js 基础能力

- es6 

- JS数据类型？

      1. 八种普通数据类型

​          	number|boolean|string|null|undefined|object|bigint|symblo|

      2. bigint是干嘛的？
           1. bigint 是一种内置对象，它提供一种方法来存储大于Number存储的数值，它在数据后面加一个n，并且可以表示任意大的整数
      3. symblo
           1. 每次使用Symbol()出来的值都是不一样的
          2. symbol作为属性值的时候，他它不可被枚举,所以不能使用for...in ... 来循环这个数据的属性
          3. 可以用来创建匿名对象属性。

   - arrow function

   - let const 

     1. var const let 的区别	

        - var是函数作用域，let是块级作用域   for来判别比如

          ​	比如在for循环中，使用var定义初始变量，则在for的外层也可以使用这个变量

          ​	使用let定义初始变量，则只能在for产生的块级作用域中使用这个变量。

        - var可以在定义之前访问这个变量，这个值是underfined,let，const不可以，这个变量在暂存死区中

          const赋值必须初始化

        - var可以被重新定义，let不可以（强行定义则报错：变量已经被定义）

        - const 声明的变量如果是基础类型，不能被修改。如果是引用类型，则可以修改引用类型的属性

     2. var、let 和 const 区别的实现原理是什么

        - 

        

     ​          解答：https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/133

   - 箭头函数和普通函数(this) 

     1. 箭头函数定义普通函数定义更简洁，清晰
     2. 箭头函数没有原型对象（prototype）所以本身没有this
     3. 箭头函数不会创建自己的this,当中的this是**定义的时候(不是调用)**外层第一个普通函数的this.
     4. **call/apply/bind**无法改变箭头函数的this指向
     5. 箭头函数不能作为构造函数来使用
        1. 没有自身的this,不能被new(报错)
     6. 箭头函数没有自己的arguments对象，这个对象时外层的局部变量，使用...arg来获取参数列表
     7. 箭头函数不能用作Generator函数，不能使用yield关键字

   - promise (重点)

​        1.手写简版promise，基础架子，不用写all、race等api

- async await

- proxy

  - get（target(目标值)，key(目标的key，它等于对象的属性)）

  - set （target，key，value，receiver）方法用于拦截属性的赋值操作，并且可以接受四个参数 

    1. target：目标值。

    2. key：目标的Key值。 
    3. value：要更改的值。 
    4. receiver：更改前的原始值

  总结：proxy相对于Object.defineProperty的优势

     1. 支持数组的劫持

     2. 针对对象

     3. 嵌套支持

        解释：对于对象套对象的数据，需要逐层遍历来解决

  可应用表单验证的操作

- Object.defineProperty

  **解释：**在一个对象上定义一个新属性，或者修改一个对象的属性，并返回此对象

   1. 有两套规则定义值的：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

      1. configurable：是否可以改变/**默认为 `false`**。不可被改变

         2. enumerable：是否可被枚举/**默认为 `false`**。--不枚举
            3. 使用configurable+enumerable+（数据描述符）【value+wriable】----对值的直接修改和控制
               4. 使用configurable+enumerable+（存取描述符--方法）【get+set】--可对值的修改和监听

         - 使用这个方法来修改对象原来的set和get方法，可对这个过程加一写操作

      ```js
      //原生的赋值和取值的操作
      var obj = {
              _a: null,
              get a() {
      
                  return this._a;
              },
              set a(val) {
                  this._a = val;
              }
          }
          console.log(obj.a);
          obj.a = 456
      ```

      

      ```js
        //使用es5的方法来对数据劫持 
      var res = Object.defineProperty({}, "name", {
              _val: null,
              get: function() {
                  console.log("要获取数据")
                  return this._val;
              },
              set: function(x) {
                  console.log("要修改数据")
                  this._val = x;
              }
          })
      data.name = 'xiaohong'//要修改数据
      console.log(data.name) //要获取数据  再输出 xiaohong
          
      ```

      

- 重绘和重排（回流）

  - **重排（回流）**

    1. 当我们的操作引发了DOM几何尺寸的变化（比如修改元素的高，和宽或隐藏元素的时候），需要重新计算元素的几何属性，并且其他元素的几何属性也会发生改变，这个计算绘制的过程就是重排（回流） 

       ![5ec33a220001194709720208](G:\html_css\typora_v0.9.86\笔记\5ec33a220001194709720208.png)

  - **重绘：**

    1. 当我们对 DOM 的修改导致了样式的变化、却并未影响其几何属性（比如修改了颜色或背景色）时，浏览器不需重新计算元素的几何属性、直接为该元素绘制新的样式（跳过了上图所示的回流环节）。这个过程叫做重绘。

       ![5ec33a2b0001f37109800226](G:\html_css\typora_v0.9.86\笔记\5ec33a2b0001f37109800226.png)

- **map reduce**

- **ajax**

         1. XHR对象 readyState的值 1,2,3
         2. axios (原理分析) 
         3. 封装个简单版的axios(); 

### 跨域

         1.  **JSONP 跨域**
         2. **原生http解决跨域**

```js
const http = require('http');
http.createServer((req, res) => {
    //  'Access-Control-Allow-Headers': 'content-type'
    //当前端需要发数据过来的时候就要设置这个头部
    res.writeHead(200, {
            'Content-Type': 'application/json',//文本传输类型
            //'Access-Control-Expose-Headers': 'Access-Control-Allow-Origin',
            'Access-Control-Allow-Origin': 'http://localhost:8080', //允许跨域的URL
        	//'Access-Control-Allow-Origin': '*', //允许所有的URL来访问
            'Access-Control-Allow-Methods': 'GET,POST',
            // 'Access-Control-Allow-Methods': '*', //允许所有请求方法访问
            'Access-Control-Max-Age': -1, //预检请求结果缓存时间，默认是为5s----'application/json'这个数据才会预检
            'Access-Control-Allow-Headers': 'content-type,X-Requested-With',
            //'Access-Control-Allow-Methods': '*', //允许所有访问
            'Access-Control-Allow-Credentials': true //凭证 cookie ,允许前端请求携带 cookie


        })
        //cookie:随着http请求头自动发生 随着http自动发送给后端
    let posts = ['js', 'php']
    res.end(JSON.stringify(posts));
}).listen(9090, () => {
    console.log("正在监听9090端口。。。")
})
```

         1. **koa跨域（CORS）**
                  1. 使用中间件修改头部

```js
const cors = require('koa2-cors');//引入资源
const app = new Koa();
app.use(
    cors({
        origin: function(ctx) { //设置允许来自指定域名请求
            // if (ctx.url === '/test') {
            return '*'; // 允许来自所有域名请求
            // }
            // return 'http://localhost:3000'; //只允许http://localhost:8080这个域名的请求
        },
        maxAge: 5, //指定本次预检请求的有效期，单位为秒。
        credentials: true, //是否允许发送Cookie
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
        allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
    })
)
```



  

### 手写代码

​      抄写手写代码+理解冴羽文章

- Primise实现
- 实现防抖函数（debounce）

  1. 函数节流和函数防抖的原理，怎么实现？

  2. 手写防抖和节流，区别在什么地方

  3. 防抖和节流 

  4. 前端性能优化，前端性能优化聊一聊？

  5. 你说到防抖和节流，有哪些应用?这俩区别是什么？

  6. 下防抖和截流，并口述一下防抖模拟的大致流程
- 实现节流函数（throttle）
- 防抖和节流的实现原理，和使用场景？
- 实现Event(event emitter)
- 实现instanceOf
  1. 封装个可以检测所有数据类型的函数(手动实现)

``` js
let b = []

console.log(b instanceof Object) //true
console.log(b instanceof Array) //true
```

​          **注：instanceOf不能区分数组是 Object还是Array**

​          解答：

```js
function myinstanceof(left,right){
    left=left.__proto__;
    right=right.protoype;
    right=right.getprototypeof();
    while(true){
        if(left===right)return true;
        if(left===null) return false;
        left=left.__proto__;
    }
}
```



```js
   //**手动实现类型检测函数**/   
function testType(type){
              if(typeof type !='object'){
                return typeof type;
              }
              if(type===null) return null;
              let str = Object.prototype.toString.call(type);
              return str.slice(8,str.length-1);
            }
       console.log(testType({}));
```

2. instanceof操作符用过吗？什么作用？

   答：用过，instanceOf是用来判断数据类型的，但是它不能够判断数组类型是Object还是Array.

   ​	**判断原理：**是检测构造函数的prototype是否出现在被检测对象的原型链上

   ​		

3. typeof操作符用过吗？什么作用

​          typeof 一个数组什么结果(function)？那怎么判断是否是数组(使用Object.prototype.toString.call(type))？

- 模拟new

​        1. 如何实现一个 new

​          解答：https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/12

- 实现一个call/apply/bind

​       1. 手写call、apply、bind

​        **解答 **

​          1. https://juejin.im/post/6844904146982830093

​          2. https://juejin.im/post/6844904105547137032

​       2. call 和 apply 的区别是什么，哪个性能更好一些

​        **解答：**

​          解答网站： https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/84

​            1. Function.prototype.apply和Function.prototype.call 的作用是一样的，区别在于传入参数的不同；

​            2. 第一个参数都是，指定函数体内this的指向；

​            3. 第二个参数开始不同，apply是传入带下标的集合，数组或者类数组，apply把它传给函数作为参数，call从第二个开始传入的参数是不固定的，都会传给函数作为参数。

- 模拟Object.create

  - Cat.prototype=Object.create(a)；

    Object.create(a)方法创建一个新对象，产生的新对象的__proto__会指向a对象

    **返回值：**一个新对象，带着指定的原型对象和属性

​        解答：Object.create(a)方法创建一个新对象，是这个对象的__proto__指向a对象的实例

- Object.setPrototypeOf()

  ```Object.setPrototypeOf(Cat.prototype, ParentConstructor.prototype)```

  1. 将Cat.prototype对象的__proto__指向 ParentConstructor.prototype

  

使用现有的对象来提供新创建的对象的__proto__。

​        1. 实现一下object.create() 

​          解答：

```js
 实现（注释里头提供了一种备选的方式）：

            function inherit(Fn,obj) {
              function ret (name) {
                Fn.call(this, name);
              }
              // function F () {}
              // F.prototype = Fn.prototype;
              // var prototype = new F(); //创建对象
              // Object.assign(prototype, obj);
              // prototype.constructor = ret; //增强对象
              // ret.prototype = prototype; //指定对象
              ret.prototype = Object.create(Fn.prototype);
              Object.assign(ret.prototype, obj);
             ret.prototype.constructor = ret
           return ret
           


       2. 说一下原型链
         原型链继承的弊端？


```

   2. 说一下原型链   

      原型链继承的弊端？

怎么避免？

​            解答：Object.create(),这样可以复制一个原型链，不影响原本的父链。

- 解析 URL Params 为对象

​        问项目难点？

​          实现fetchWithRetry（url, param, times, delay）到期结束，失败次数达到结束，不然就重试。

​        1. 论query和params的使用区别

​          解答：https://juejin.im/post/6844903872545161224

- 深拷贝浅拷贝

​        1. 模拟实现一个深拷贝，并考虑对象相互引用以及 Symbol 拷贝的情况

​          解答:https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/148

  ### 源码分析题

- React/Vue/Koa 源码实现

### 计算机网络

- http/https 加密

      1. http的缓存机制？ 协商缓存(etag,last-mofify)和强制缓存（cache-control）
      
      2. http和https区别
      
      3. https建立的过程
      
      4. http建立连接过程，为什么不是四次或两次握手
      
      5. 你知道哪些http头部
      
      6. 怎么与服务端保持连接
      
      7. http和tcp协议？
      
      8. 你都知道哪些http状态码？

​        解答：200、301：永久重定向 ；302：临时重定向、304、307、403：服务器拒接、404、500服务器内部错误,503服务太忙了状态码499了解吗

9. HTTPs	

   1. 整个 http 的流程

   2. https 是怎么保证传输数据包的安全

      3.证书里都有什么

   ​	j解答：**序列号，颁发者，有效期，主体(拥有者信息)，公钥信息，秘钥/证书用法，扩展、**

   ​				**前面的七个通过认证机构签名生成数字签名**

​        建立 HTTP 链接时的非对称加密，建立链接后传输数据的对称加密

​        数字签名

​      10. 讲一下http请求报文

​      11.输入一个URL的过程

解答：

​	**浏览器输入地址=>在（浏览器自身DNS /操作系统DNS /本地hosts文件 找到为止）DNS服务器上查找域名ip=>返回给浏览器ip的情况=>然后通过TCP/IP（三次握手）连接服务器=>然后数据传输=>四次挥手断开连接**

**连接到服务器：**获取服务器的资源==>浏览器==>前端界面渲染

这个部分是渲染引擎处理，**处理过程：**

![浏览器渲染过程图](E:\lesson_bm\node\http-bowser-process\浏览器渲染过程图.png)

1. HTML解析

   解析成DOM树

2. CSS解析

   解析成CSSOM树

3. 样式与结构合并--产生**渲染树（render树）**

   将DOM树和CSSDOM树结合生成最终的render树

   （:after :before 这样的伪元素会在这个环节被构建到 DOM 树中）

4.  布局阶段---产生**盒模型**

   页面中所有的元素的相对位置、大小信息在这个阶段计算

5. 页面绘制---产生**目标界面**

   在这个阶段浏览器将前面的吹处理结果，把每一个页面图层转换为像素，将所有的媒体文件进行解码。

**浏览器中的线程：**1.GUI 渲染线程、2.JavaScript引擎线、3.定时触发器线程、4.事件触发线程、5.异步http请求线程

**注意：**从HTTP/1.1开始才默认支持持久化连接，即通信一次以后连接不中断，HTTP/1.0需要手动设置：keep-alive。

#### 三次握手/四次挥手（重点）

##### 三次握手（连接）

![img](G:\html_css\typora_v0.9.86\笔记\面试\1)

```text
第一次握手:SYN=1，ACK=0，seq=x;
第二次握手:SYN=1，ACK=1，ack=x+1,seq=y;
第三次握手:SYN=0，ACK=1，,ack=y+1,seq=x+1

第一次握手：B只可以确认自己可以接受A发送的报文段、：SYN=1的报文段不能携带数据，但消耗一个序号
第二次握手：A可以确认 B收到了自己发送的报文段，并且可以确认 自己可以接受B发送的报文段、：二次握手时分配服务器端的资源
第三次握手：B可以确认A收到了自己发送的报文段：ACK报文段可以携带数据，不携带数据则不消耗序号。三次握手时分配客户端的资源

TCP协议建立连接的三次握手过程中，带有SYN标志的过程包是不可以携带数据的，只有第三次握手允许携带数据。

第一次握手：主机A发送位码为syn＝1，随机产生seq number=1234567的数据包到服务器，主机B由SYN=1知道，A要求建立联机；

第二次握手：主机B收到请求后要确认联机信息，向A发送ack number=(主机A的seq+1)，syn=1，ack=1，随机产生seq=7654321的包；

第三次握手：主机A收到后检查ack number是否正确，即第一次发送的seq number+1，以及位码ack是否为1，若正确，主机A会再发送ack number=(主机B的seq+1)，ack=1，主机B收到后确认seq值与ack=1则连接建立成功。

```

##### 四次挥手

https://juejin.im/post/6844904190582456333

​    \- Socket

​      1. websocket过程，

​    \- TCP/UDP

​      1. 讲讲你对udp的理解？

​      2. tcp建立的过程？

- 解答：

​          讲了三次握手

​          为什么要三次握手呢？

​          两次握手不也可以建立链接嘛？

​          提示：tcp是全双工的通信

3. TCP，UDP区别，特点

  ### 工作流机制

- webpack

#### 浏览器工作原理

- sessionStorage/localStorage

  - **相同点：**

    1. 存储大小一般为5mb
    2. 都有同源策略限制，跨域无法访问
    3. 都是key-value的存储方式

  - **不同点：**

    1. 存储时间不同sessionStorage会话存储，关闭浏览器就没有了

       localStorage只要不删除就一直存在

    2. 作用域范围不一样

       1. sessionStorage只有同一浏览器、同一窗口的同源文档才能共享数据(同浏览器限制、同源限制、同标签页限制)
       2. localStorage:有同一浏览器、同源文档就可以访问共享

- Cookies

  1. 前/后端都可以操作，存在于头部中

​    event loop(事件循环)

​    url -> 页面渲染(DOM 树 ，css树 )

- v8引擎

​      1. v8引擎是如何提高性能的。





**# 滴滴二面**

  \- 算法

​    快速排序

  \- 项目介绍

​    \1. 优化项目的手段有哪些？

​      (1) http 缓存

​      (2) 负载均衡

​      (3) script async defer，async 不保证执行顺序， defer 保证顺序。

​      (4) 减少回流和重绘，改变 offsetHeight， offsetWeight 的值会导致回流，那单纯的访问呢，也会~

​      (5) 事件委托



**# 滴滴三面**

  \- 如何来学习前端的

  \- 未来的规划



\1. 深拷贝浅拷贝 

  https://juejin.im/post/6844903584023183368

\2. ES6 系列之我们来聊聊 Promise

  https://github.com/mqyqingfeng/Blog/issues/98

\3. 22 道高频 JavaScript 手写面试题及答案

  https://juejin.im/post/6844903911686406158#heading-13



你对Promise有什么了解，你能实现一下它吗

