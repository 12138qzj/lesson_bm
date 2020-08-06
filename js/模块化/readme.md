- 使用cnpm i rollup -S 工具

打包命令：
npx rollup index.js --file dist.js --format cjs


- module.exports
module.exports.obj = obj;使用这个导出 则是浅拷贝到引入的地方

export 导入是将需要导入的东西加载在引入的地方  把代码复制过来