const fs = require(`fs`);
const path = require(`path`);

function getDirFiles(startPath) {
    let result = [];
    console.log("startPath", startPath)
        //process.cwd() 获取当前项目所在的物理路径 startPath是在后面加上路径
    function finder(parentPath) {

        let files = fs.readdirSync(parentPath);
        //let files = fs.readdirSync(path.join(process.cwd(), startPath));
        console.log("files", files);
        if (!files.length) {
            return;
        }
        // for (let file of files) {
        //     // 获取文件的状态，，
        //     let stats = fs.statSync(path.join(process.cwd(), startPath, file));
        //     /// console.log(stats)
        //     if (stats.isFile()) {
        //         result.push(file);
        //     }
        // }


        files.forEach(function(val, index) {
            let fPath = path.join(parentPath, val);
            console.log("fPath", fPath)
            let stats = fs.statSync(fPath);
            console.log(stats);
            if (stats.isDirectory()) {
                finder(fPath);
            }
            if (stats.isFile()) {
                result.push(fPath);
            }
        })


    }
    finder(startPath);
    return result;

}
console.log(getDirFiles('src'));