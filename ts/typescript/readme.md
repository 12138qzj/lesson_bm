
calss -> hooks过渡

- devDependencies dependencies
env development  test(docker) production

babel 6  -> 7
webpack  4 -> 5

多入口文件打包



打包入口 entry

每个 打包对应的JSON的item 对应一个文件

entry: {
    
       app: './index.tsx',
       appStyles: './css/site.css',
       vendor: [
           'react',
           'react-dom',
       ],
       vendorStyles: [
           '../node_modules/bootstrap/dist/css/bootstrap.css',
       ],
   },

打包的时候 会带上hash值 当修改的时候，则hash值则会改变，改变只会改变一个文件的hash值，用户可以直接使用缓存打开文件使用。

- ts的类型约束的使用场景
/**
 * 2. 变量 常量的类型约束
 * 
 * 3. 函数类型约束
 * 
 * 
 */

 
-  函数约束三步：
/**
 * 1. 参数校验
 * 2. 返回值的校验->返回数据模板也可以被校验(使用泛型)
 * 3. 
 */





