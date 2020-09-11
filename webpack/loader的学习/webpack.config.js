const path = require('path')

module.exports = {
    //loader 来处理webpack 处理不了的文件的时候 就会到这个位置来

    // 遇到  .css文件的时候 会报错，说找不到解析这个文件的 配置
    // 用loader 来对.css 文件来配置一个解析规则
    module: {
        rules: [{
            test: '/.css$/',
            //是有哪个文件来解析这个文件 （解析规则）
            use: path.resolve(__dirname, './css-loader.js')
        }]
    }
}