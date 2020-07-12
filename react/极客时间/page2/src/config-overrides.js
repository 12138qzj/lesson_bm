const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
    // 针对antd实现按需打包: 根据import来打包(使用babel-plugin-import)
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
        // style: true, // 自动打包相关的样式
    }),

    // 使用less-loader对源码中的less的变量进行重新指定
    // addLessLoader({
    //     javascriptEnabled: true,
    //     //修改主题颜色
    //     //相当于修改less文件（css文件）
    //     modifyVars: { '@primary-color': '#ff7d1b' },
    // }),
);