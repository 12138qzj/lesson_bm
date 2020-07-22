/**
 * MD5缓存
 * 服务器判断 是否可以缓存 要先知道内容有没有发送变化。 
 * **/
const md5 = require('md5');

console.log(md5("abc"))
console.log(md5("abc"))