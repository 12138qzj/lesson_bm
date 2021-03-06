// let htmlStr = `
// <html>
//     <head></head>
//     <body>
//         <div></div>
//     </body>
// </html>
// `

let htmlStr = `<html>
  <head></head>
  <body>
    <div></div>
  </body>
</html>`
    // 可以：KMP 正则 原理都是 FSM
    // 正则 split(): 完整的 html 
    // token: html tag
let currentToken = null;
parse(htmlStr);

function emit(token) { //提交保存好的标签
    console.log(token);
    currentToken = null;
}

function parse(htmlString) {
    state = start;
    for (let c of htmlString) {
        state = state(c);
    }
}

function start(c) {
    if (c === '<') {
        return tagOpen
    } else {
        return start
    }
}

function tagOpen(c) {
    // <html>: html tag 由 a-zA-Z  div span p 
    // </html>
    //  h t m l
    // console.log(c);
    if (c === '/') {
        return endTagOpen
    } else if (c.match(/[a-zA-Z]/)) {
        currentToken = {
            type: 'startTag',
            tagName: c
        }
        return tagName
    }
}

function tagName(c) {
    if (c.match(/[a-zA-Z]/)) {
        currentToken.tagName += c; //每次都是tagName+=c
        return tagName
    } else if (c === '>') {
        // tag 拼接结束
        emit(currentToken); //提交保存好的标签
        return start //返回到最初，重新检测下一个标签
    }
}

function endTagOpen(c) {
    // </html>
    if (c.match(/[a-zA-Z]/)) {
        currentToken = {
            type: 'endTag',
            tagName: c
        }
        return tagName;
    }
}