// ## URL 简化路径
// 实现一个方法 function resolve(baseUrl: string, moduleId: string): string {}

// resolve('http://www.baidu.com', 'a/b/c'); 
// 简化为-> http://www.baidu.com/a/b/c
// resolve('http://www.baidu.com', 'a/../c'); 
// 简化为-> http://www.baidu.com/c
// resolve('http://www.baidu.com/1/2', '/a/.././c'); 
// 简化为-> http://www.baidu.com/1/2/c

var simplifyPath = function(res, path) {
    let cur = path.split('/')
    for (let i = 0; i < cur.length; i++) {
        if (cur[i]) {
            if (cur[i] === "..") {
                res.pop()
            } else if (cur[i] === ".") {

            } else {
                res.push(cur[i])
            }
        }
    }
    return "/" + res.join('/')
};

function resolve(baseUrl, moduleId) {
    let res = ""
    let cur = baseUrl.split('//');
    res = res + cur[0] + "//";
    cur = cur[1].split('/');
    // console.log("00000", cur, res);
    res = res + cur[0];

    let module = [];
    for (let i = 1; i < cur.length; i++) {
        module.push(cur[i])
    }
    // console.log("module", module);
    return res + simplifyPath(module, moduleId);
}

console.log(resolve('http://www.baidu.com/1/2', '../a/.././c'));
console.log(resolve('http://www.baidu.com', 'a/../c'));