
# 滴滴一面
    - 设计模式
        订阅发布者模式 MVVM template compile(setstate的使用)
    - 代理模式 proxy 
        来代替defineProperty
    - js 基础能力
        - es6 
            JS数据类型？
                八种普通数据类型
                    number|boolean|string|null|undefined|object|bigint|symblo|
                bigint是干嘛的？
            arrow function
            let const 
                1. var const let 的区别
                2. var、let 和 const 区别的实现原理是什么
                    解答：https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/133
            箭头函数和普通函数(this) 
            promise (重点)
                1.手写简版promise，基础架子，不用写all、race等api
            async await
            proxy
            Object.defineProperty
            map reduce
        - ajax
            - XHR对象 readyState的值 1,2,3
            - JSONP 跨域
            - axios (原理分析) 
                1.封装个简单版的axios();
                
        - 手写代码

            抄写手写代码+理解冴羽文章
            - Primise实现
            - 实现防抖函数（debounce）
                function debounce(func,wait){
                    let time=null;
                    return function(){
                        if(time){
                            clearTimer(time);
                        }
                        time =setTimeout(()=>{func()}),wait)
                    }
                }
                dom.addEventListener('keyup',debounce(console.log.bind(this,"123"),2000))
            - 实现节流函数（throttle）
                1. 使用定时器节流 不会立马执行
                function throttle(func,wait){
                    let timer=null;
                    if(timer) return;
                    return function(){
                        setTimeout(func(),wait)
                    }
                }
                2. 使用时间差节流 一进来就会执行 立马执行
                function throttle(func,wait){
                    let date=0;
                    return function(){
                        let nowDate=new Date();
                        if(date+wait<nowDate){
                            func()
                            date=nowDate;
                        }
                    }
                }
                - 防抖和节流的实现原理，和使用场景？
                    
            - 实现Event(event emitter)
            - 实现instanceOf
                1. 封装个可以检测所有数据类型的函数(手动实现)
                    ```js
                        let b = []
                        console.log(b instanceof Object) //true
                        console.log(b instanceof Array) //true
                    ```
                    注：instanceOf不能区分数组是 Object还是Array
                    解答：
                    ```js
                        function testType(type){
                            if(typeof type !='object'){
                                return typeof type;
                            }
                            if(type===null) return null;
                            let str =  Object.prototype.toString.call(type);
                            return str.slice(8,str.length-1);
                        }
                        console.log(testType({}));
                    ```
                2. instanceof操作符用过吗？什么作用？
                3. typeof操作符用过吗？什么作用
                    typeof 一个数组什么结果(function)？那怎么判断是否是数组(使用Object.prototype.toString.call(type))？
            - 模拟new
                1. 如何实现一个 new
                    解答：https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/12
            - 实现一个call/apply/bind
             1. 手写call、apply、bind
                ** 解答**
                    1. https://juejin.im/post/6844904146982830093
                    2. https://juejin.im/post/6844904105547137032
             2. call 和 apply 的区别是什么，哪个性能更好一些
                **解答：**
                    解答网站： https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/84
                        1. Function.prototype.apply和Function.prototype.call 的作用是一样的，区别在于传入参数的不同；
                        2. 第一个参数都是，指定函数体内this的指向；
                        3. 第二个参数开始不同，apply是传入带下标的集合，数组或者类数组，apply把它传给函数作为参数，call从第二个开始传入的参数是不固定的，都会传给函数作为参数。
            - 模拟Object.create
                解答：Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
                1. 实现一下object.create() 
                    解答：
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
                            ret.prototype.constructor = ret;
                        return ret;
                        }
                    ```
                2.  说一下原型链？
                    原型链继承的弊端？
                    怎么避免？
                        解答：Object.create(),这样可以复制一个原型链，不影响原本的父链。
            - 解析 URL Params 为对象
                问项目难点？
                    实现fetchWithRetry（url, param, times, delay）到期结束，失败次数达到结束，不然就重试。
                1. 论query和params的使用区别
                    解答：https://juejin.im/post/6844903872545161224
            - 深拷贝浅拷贝
                1. 模拟实现一个深拷贝，并考虑对象相互引用以及 Symbol 拷贝的情况
                    解答:https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/148
    - 源码分析题
        React/Vue/Koa 源码实现
    - 计算机网络
        - http/https 加密
            1. http的缓存机制？ 协商缓存(etag,last-mofify)和强制缓存（cache-control）
            2. http和https区别
            3. https建立的过程
            4. http建立连接过程，为什么不是四次或两次握手
            5. 你知道哪些http头部
            6. 怎么与服务端保持连接
            7. http和tcp协议？
            8. 你都知道哪些http状态码？
                解答：200、301、304、307、403、404、500、50
                - 状态码499了解吗
            9.
                整个 http 的流程
                https 是怎么保证传输数据包的安全
                证书里都有什么
                    序列号
                建立 HTTP 链接时的非对称加密，建立链接后传输数据的对称加密
                数字签名
            10. 讲一下http请求报文
            11.输入一个URL的过程
        -三次握手/四次挥手（重点）
        - Socket
            1. websocket过程，
        - TCP/UDP
            1. 讲讲你对udp的理解？
            2. tcp建立的过程？
                - 解答：
                    讲了三次握手
                    为什么要三次握手呢？
                    两次握手不也可以建立链接嘛？
                    提示：tcp是全双工的通信
            3. TCP，UDP区别，特点
    - 工作流机制
        webpack
    - 浏览器工作原理
        event loop(事件循环)
        url -> 页面渲染(DOM 树 ，css树 )
        - v8引擎
            1. v8引擎是如何提高性能的。


# 滴滴二面
    - 算法
        快速排序
    - 项目介绍
        1. 优化项目的手段有哪些？
            (1) http 缓存
            (2) 负载均衡
            (3) script async defer，async 不保证执行顺序， defer 保证顺序。
            (4) 减少回流和重绘，改变 offsetHeight， offsetWeight 的值会导致回流，那单纯的访问呢，也会~
            (5) 事件委托

# 滴滴三面
    - 如何来学习前端的
    - 未来的规划

1. 深拷贝浅拷贝 
    https://juejin.im/post/6844903584023183368
2. ES6 系列之我们来聊聊 Promise
    https://github.com/mqyqingfeng/Blog/issues/98
3. 22 道高频 JavaScript 手写面试题及答案
    https://juejin.im/post/6844903911686406158#heading-13

你对Promise有什么了解，你能实现一下它吗
