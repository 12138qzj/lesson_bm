const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');

const setMPA = () => {
    const entry = {};
    const htmlWebpackPlugins = [];
    const entryFiles = glob.sync(path.join(__dirname, './pages/src/*/index.js'));

    Object.keys(entryFiles)
        .map((index) => {
            const entryFile = entryFiles[index];
            // '/Users/cpselvis/my-project/src/index/index.js'

            const match = entryFile.match(/src\/(.*)\/index\.js/);
            const pageName = match && match[1];

            entry[pageName] = entryFile;
            htmlWebpackPlugins.push(
                new HtmlWebpackPlugin({
                    template: path.join(__dirname, `./src/pages/${pageName}/index.html`),
                    filename: `${pageName}.html`,
                    chunks: [pageName]
                })
            );
        });

    return {
        entry,
        htmlWebpackPlugins
    }
}

// loader 内容转换

// plugin 监听webpack  的生命周期
module.exports = {
    entry: {
        "order": "./src/pages/order/index.js",
        "promation": "./src/pages/promation/index.js",
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css'],
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    "presets": [
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ],
                }
            }],
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 从哪个入口进去 将这个入口的的内容 打包出来
            template: './src/pages/order/index.html',
            //这个入口打包出来的 html文件名字
            filename: 'order.html',
            //获取自己需要的 chunks
            chunks: ["order"]
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/promation/index.html',
            filename: 'promation.html',
            chunks: ["promation"]

        })

    ]
};

// const path = require('path');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const glob = require('glob');
// const setMPA = () => {
//   const entry = {};
//   const htmlWebpackPlugins = [];
//   const entryFiles = glob.sync(path.join(__dirname, './src/pages/*/index.js'));

//   Object.keys(entryFiles)
//     .map((index) => {
//       const entryFile = entryFiles[index];
//       // '/Users/cpselvis/my-project/src/index/index.js'

//       const match = entryFile.match(/src\/pages\/(.*)\/index\.js/);
//       const pageName = match && match[1];

//       entry[pageName] = entryFile;
//       htmlWebpackPlugins.push(
//         new HtmlWebpackPlugin({
//           template: path.join(__dirname, `./src/pages/${pageName}/index.html`),
//           filename: `${pageName}.html`,
//           chunks: [pageName]
//         })
//       );
//     });

//   return {
//     entry,
//     htmlWebpackPlugins
//   }
// }
// // loader 内容转换
// // plugin  监听webpack生命周期 
// // html css js
// const {entry, htmlWebpackPlugins} = setMPA()
// module.exports = {
// 	// entry: {
// 	// 	"order": "./src/pages/order/index.js",
// 	// 	"promation": "./src/pages/promation/index.js"
// 	// },
// 	entry,
// 	resolve: {
// 		extensions: ['.js', '.jsx', '.json', '.css'],
// 	},
// 	module: {
// 		rules: [
// 			{
// 				test: /\.(js|jsx)$/,
// 				exclude: /node_modules/,
// 				use: [
// 					{
// 						loader: 'babel-loader',
// 						options: {
// 							"presets":[
// 								"@babel/preset-env", 
// 								"@babel/preset-react"
// 							],
// 						}
// 					}
// 				],
// 			}
// 		],
// 	},
// 	plugins: [
// 		...htmlWebpackPlugins,
//     new HtmlWebpackPlugin({
// 			template: './src/pages/order/index.html',
// 			filename: "order.html",
// 			chunks: ["order"]
//     }),
//     new HtmlWebpackPlugin({
// 			template: './src/pages/promation/index.html',
// 			filename: "promation.html",
// 			chunks: ["promation"]
// 		})
//   ]
// };