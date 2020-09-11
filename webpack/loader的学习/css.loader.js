// 解析css 文件规则  手动配置规则


//模块导出 
module.exports = function(source) {
    console.log(source);

    retunr `export default \`${source}\` `
}