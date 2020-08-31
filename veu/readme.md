vue create project-name

    使用vue2.0 vue init webpack project-name

    PWA 渐进式网页应用
    - Router Vuex 全家桶
    - css Pre-processors stylus vw autoprefixer
        编译 sass/stylus 插件 autoprefixer 前缀
        px-vw- 尺寸的统一 cssnext
        
    - linter 代码风格确保文件 ; "" '' tab ESlint 代码风格 保证代码风格是一样的
        不用的变量不要定义
        代码对齐
        "" '' 要统一
        js 的结尾不加;
    - unit Testing E2E 测试

    vue-router的使用

    安装 yarn add router  //
npm install vue-router --save-dev

使用定义文件
```js
import Vue from 'vue' //引入Vue
import Router from 'vue-router' //引入vue-router
import Hello from '@/components/Hello' //引入根目录下的Hello.vue组件
import Hi from '@/components/Hi'

Vue.use(Router) //Vue全局使用Router

export default new Router({
    routes: [ //配置路由，这里是个数组
        { //每一个链接都是一个对象
            path: '/', //链接路径
            name: 'Hello', //路由名称，
            component: Hello //对应的组件模板
        },
        {
            path: '/hi',
            name: 'Hi',
            component: Hi
        }
    ]
})
```
注册使用
```js
import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),

}).$mount('#app')
```
主文件中