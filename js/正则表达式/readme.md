
/ #[0-9a-fA-F] /
/^ [0-9a-zA-Z] $/
/^ #[0-9a-fA-F]{3,6} $/i

/^ #(([0-9a-fA-F]{3})|([0-9a-fA-F]{6})) $/i
/^ #([0-9a-fA-F]{3}|[0-9a-fA-F]{6}) $/i



/^(([0-1][0-9]{3})|(20([0-1][0-9]|20)))-((1[0-2])|(0[1-9]))-([0-2][0-9]|3[0-1])$/


YYYY-MM-DD
/^ \d{4}-\d{2}-\d{2} $/

### API
 字符串的正则方法有：match()、replace()、search()、split()
 正则对象的方法有：exec()、test()
- test 
    1. 判断是否匹配成功

- exec
    1. ['输入的源文本']



let str='my name {name} age {age}'
function compile(obj,tpl){
    
}