const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    console.log(req.url);

    let post = ['js', 'json']
    if (req.url.includes('/api')) {

        let myurl = url.parse(req.url);
        let params = new URLSearchParams(myurl.query)
        let mathodName = params.get('callback');
        console.log("object", `${mathodName}(${JSON.stringify(post)})`);
        res.end(`onResponse(${JSON.stringify(post)})`)
            // res.end(`${mathodName}(${JSON.stringify(post)})`)

    }

}).listen(9090, () => {
    console.log('正在监听9090..')
})