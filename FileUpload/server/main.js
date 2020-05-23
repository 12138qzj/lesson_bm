const http = require('http');
const path = require('path');
const multiparty = require('../vue-backend/node_modules/multiparty');
const fse = require('../vue-backend/node_modules/fs-extra'); //fs 扩展包  需要下载到本地 npm install fs-extra
const UPLOAD_DIR = path.resolve(__dirname, ".", "taget");
const server = http.createServer();

server.on("request", async(req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Header", "*");

    console.log("正在监听3000端口:" + res);


    if (req.url == '/') {
        const multipart = new multiparty.Form(); //将form表单里面的数据取出来 
        //const form = new formidable.IncomingForm();
        //var fromData = new FormData(document.forms[0]);
        console.log('fromData', multipart);
        multipart.parse(req, async(err, fields, files) => {
            if (err) {
                res.end("上传失败!");
                return;
            }
            console.log('files', files);
            console.log('fields', fields);

            const [chunk] = files.chunk;
            const filename = chunk.originalFilename;

            console.log('files.name', chunk.originalFilename);

            const dir_name = filename.split('.')[0];
            console.log('dir', dir_name)
            const chunkDir = path.resolve(UPLOAD_DIR, dir_name);
            console.log(chunkDir);
            if (!fse.existsSync(chunkDir)) {
                await fse.mkdirs(chunkDir);
            }
            await fse.move(chunk.path, `${chunkDir}/${chunk.originalFilename}`, (err) => {
                // console.log("文件出现")
                // console.log('err', err)
                if (err) {
                    res.end("文件存在!")
                    return;
                }
                res.end("上传成功!")
            }); //将文件移动过来 并且改名

            // await fse.move(chunk.path, `${chunkDir}/${filename}`); //将文件移动过来 并且改名
        });

    }
});
server.listen(3030, () =>
    console.log("正在监听3000端口")
);