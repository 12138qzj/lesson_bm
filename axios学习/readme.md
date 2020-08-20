## 简单封装 axios
 - 创建一个 axios的实例，默认路径配置：baseURL
                        超时时间配置：defaluts.timeout=2500
### 全局的 axios 默认值
```js
    axios.defaults.baseURL = 'https://api.example.com';
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-url
```
 - 添加一个拦截器 请求和响应
  ### 请求拦截器
    - 
```js
    axios.interceptors.request.use(function (config){
        //在这里可以在发请求之前做一些操作
        return config
    },function(err){
        //错误请求的时候 可以做一些操作
        return Promise.reject(err)
    });
```
  ### 响应拦截器
```js 
axios.interceptors.response.use(function(res){
  //在这里对返回的数据进行处理
  return res;
},function(err){
  //错误响应的时候 处理一下
  if (err.response.status) {            
            switch (err.response.status) {                
                case 401:                    
                //未登录的处理              
                case 403:
                //权限不足的处理 服务器拒接了你的访问                
                    break; 
                case 404:
              // 404请求不存在的处理
                    break;
                // 其他错误，直接抛出错误提示
                default:
                //默认处理
            }
  return Promise.reject(err.response);
})
```

### 多个请求并发
    ```js
    function getUserAccount() {
        return axios.get('/user/12345');
        }

        function getUserPermissions() {
        return axios.get('/user/12345/permissions');
        }
//当数组中所有请求均已完成时，执行then方法
        axios.all([getUserAccount(), getUserPermissions()])
        .then(axios.spread(function (acct, perms) {
            // 两个请求现在都执行完成
        }));
    ```
### 取消请求
```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function(thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
     // 处理错误
  }
});

//第二种
axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// 取消请求（message 参数是可选的）
source.cancel('Operation canceled by the user.');
```
