- SPA
  单页 只有一个index.html
  lenmon.com  -> index.html <div id="root"></div>

- MPA
  多页 多个 html

- SSR

webpack 如何和多页应用集合

## 安装依赖 
cnpm i @babel/core @babel/cli webpack webpack-cli html-webpack-plugin react react-dom @babel/preset-env @babel/preset-react -S


使用webpack 来生成两个 html文件 使用一份js代码 

```js
  plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages/order/index.html',
            filename: 'order.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/promation/index.html',
            filename: 'promation.html'
        })

    ]
```
```js
const setMPA = () => {
  const entry = {};
  const htmlWebpackPlugins = [];
  const entryFiles = glob.sync(path.join(__dirname, '../src/*/index.js'));

  Object.keys(entryFiles)
    .map((index) => {
      const entryFile = entryFiles[index];
      // '/Users/cpselvis/my-project/src/index/index.js'

      const match = entryFile.match(/src\/(.*)\/index\.js/);
      const pageName = match && match[1];

      entry[pageName] = entryFile;
      htmlWebpackPlugins.push(
        new HtmlWebpackPlugin({
          template: path.join(__dirname, `../src/${pageName}/index.html`),
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
```

## 微前端