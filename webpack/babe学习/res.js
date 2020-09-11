// commonJS require module.exports 的原理
(function(obj) {

    //obj中存在 两个函数  "./index.js"，， "./math.js"
    let module = {}
        //commonJS 是有缓存的 实现缓存功能

    let cache = {};
    //实现 require的作用
    function __webpack__require(params) {

        if (cache[params]) return cache[params]
        console.log(params);
        //使用obj哪个属性来执行传进来的函数
        obj[params](module);
        cache[params] = module.exports;
        console.log(module.exports);

        return module.exports;
    }
    obj['./index.js'](__webpack__require);


})({
    //执行函数 
    "./index.js": function(__webpack__require) {
        const sum = __webpack__require("./math.js");
        console.log(sum(10, 20));
    },
    "./math.js": function(module = {}) {
        module.exports = (a, b) => (a + b)
    }

})