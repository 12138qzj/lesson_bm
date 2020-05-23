const http = require('http');

http.createServer((req, res) => {
    console.log(req.url);

    if (req.url === '/api') {
        let post = ['js', 'json']
        let mathodName = req
        res.end(JSON.stringify(post))
            // res.end(`onResponse(${JSON.stringify(post)})`)

    }
}).listen(9090, () => {
    console.log('正在监听9090..')
})