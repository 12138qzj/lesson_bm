const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const config = {
    entry: './src/index.js',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: './public',
        hot: true
    },
    module: {
        rules: [{
                test: /(.js|.jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            // jsx -> createment
            // jpg -> base64      file-loader
            {
                test: /\.md$/,
                use: {
                    loader: path.resolve(__dirname, './src/md-loader.js')
                },
            },
            {
                test: /.vue$/,
                use: {
                    loader: path.resolve(__dirname, './src/vue-loader.js')
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
    ]
}
module.exports = config