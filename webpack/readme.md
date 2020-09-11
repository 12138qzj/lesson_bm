
## loader 是干啥的

    从一份webpack 不能够解析的代码  使用某种规则 来解析成一份静态使用的代码

    负责一个文件的转换

## plugin 是干啥的
    插件 ，可以增强webpack打包的功能

    可以监听 webpack的生命周期 在webpack打包资源之后，把得到的资源插到html中

    在某一步插进去做一些操作


## 有些生命周期
entryOption

afterPlugins
SyncHook

在设置初始内部插件集之后调用。

回调参数： compiler


* emit
AsyncSeriesHook

在将资产释放到输出目录之前立即执行。

回调参数： compilation
* afterEmit
AsyncSeriesHook

在将资产释放到输出目录后调用。

回调参数： compilation
* assetEmitted
AsyncSeriesHook

排放资产时执行。提供对有关发出的资产的信息的访问，例如其输出路径和字节内容。

回调参数：file，info


