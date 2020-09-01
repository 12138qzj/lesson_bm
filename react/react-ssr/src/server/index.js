import express from 'express';
import React from 'react';

import  { StaticRouter } from 'react-router'
import  { renderRoutes } from 'react-router-config'


import { renderToString } from 'react-dom/server';
import Header from '../common/Header/Header.jsx';

import route from '../router.js'
const app = express();

// 将这个文件夹下面所有的 资源都设置成为静态资源
// 将这些资源暴露在 3000 端口上
app.use(express.static('public'))

//SSR服务器端渲染

app.get('*', (request, response) => {

    console.log(request.url);
    // const root = < Header/>;
    const root =(
        // <>
        //  {/* < Header/> */}
        <StaticRouter location={request.url}>
            {renderRoutes(route)}
        </StaticRouter>
        // </>
    )
    const htmlStr = renderToString(root)
    // console.log(root);
    response.end(`
    <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        </head>
        <body>
            <div id="root">${htmlStr}</div>
            <script src="/index.js"></script>
        </body>
        </html>
    `)
})

app.listen(3000, () => {
    console.log("server is running 3000");
})