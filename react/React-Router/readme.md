## popstate
window.onpopstate 监听路由发生变化 ：只能对前后发生监测。


- 就需要使用hook重写一下路由监听

```js
//先使用 popstate监听前进后退 的路由 （go,back,forword）
    window.addEventListener('popstate', () => {
            console.log("new url---", window.location.pathname)
        })
        //监听 popstate 不能监听的两种 pushState和replaceState
    let names = ['pushState', 'replaceState'];

    for (let name of names) {
        let original = window.history[name];
        window.history[name] = function(...args) {
            console.log("new url", args[2])
            return original.apply(window.history, args);
        }
    }

```
