console.log("开始");

var done = false;
var obj = {
    a: 1,
    b: 2,
}
module.exports.obj = obj;

module.exports.done = done;
setTimeout(() => {
    done = true;
    obj.a = 999
}, 2000)