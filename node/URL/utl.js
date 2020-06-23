const URL = require('url');
const fs = require('fs')

const url = "http://baidu.com:8080/test/h?query=js#node";

// console.log(URL.parse(url));

// var buf = iconv.encode("Sample input string", 'win1251');
// console.log(buf);
// var str = iconv.decode(buf, 'win1251');
// var str = new Buffer('hello world', binary)
// console.log(str);

// var rs = fs.createReadStream('h');
// console.log(rs.setEncoding("utf16le"));

str = "A"
let a = str.charCodeAt();
let a
console.log(a.toString(16));