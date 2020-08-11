// ## 笔记草稿
// 题目
// 薯队长写了一篇笔记草稿，请你帮忙输出最后内容。
// 1.输入字符包括，"(" , ")" 和 "<"和其他字符。
// 2.其他字符表示笔记内容。
// 3.()之间表示注释内容，任何字符都无效。 括号保证成对出现。
// 4."<"表示退格, 删去前面一个笔记内容字符。括号不受"<"影响 。

// 输入
// Corona(Trump)USA<<<Virus
// 输出
// CoronaVirus
function option(str) {
    let res = [];
    let leng = str.length;
    let i = 0;
    while (i < leng) {
        if (str[i] != "(" && str[i] != "<") {
            res.push(str[i])
        }
        if (str[i] === "(") {
            let count = 1;
            i++
            while (count > 0) {
                if (str[i] === "(") {
                    count++;
                }
                if (str[i] === ")") {
                    count--;
                }
                i++;
            }
            i--;
        }
        console.log(res);
        if (str[i] === "<") {
            res.pop();
        }
        i++
    }
    return res.join("")
}
console.log(option("Corona(Trump(123)456)(adsfdgh()dfgdj(dsfgfh(fgffh)dfd<<<<<,g))()()USA<<<Virus"));

// let a = ['C', 'o', 'r', 'o', 'n', 'a', 'U', 'S', 'A']
// console.log(a.pop());
// console.log(a);