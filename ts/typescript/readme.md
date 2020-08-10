
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




