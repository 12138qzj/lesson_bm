let htmlStr = `<html>
  <head></head>
  <body>
    <img />
    <span></span>
    <div></div>
  </body>
</html>`
let currentToken = null;
//初始化栈顶元素
let stack = [{ type: 'document', children: [] }];
//开始解析html字符串
parse(htmlStr);
console.log(JSON.stringify(stack[0], null, 2));

function emit(token) { //提交处理好的标签
    //console.log(token);
    let top = stack[stack.length - 1];
    if (token.type === 'startTag') { //开始标签（标志）
        // push pop 处理配对
        let element = {
            type: 'element',
            children: [],
            attributes: [],
            tagName: token.tagName
        }
        stack.push(element);
        // 作为栈顶的元素子节点，为了生成树
        // if (!top.children) top.children = [];
        top.children.push(element);
    } else if (token.type === 'endTag') { //结束标签（标志）
        if (token.tagName !== top.tagName) {
            throw new Error('tagname match error')
        } else {
            //匹配开始标签（成功）让开始标签出栈
            stack.pop();
        }
    } else if (token.type === 'selfCloseToken') { //单标签（标志）
        let element = {
                type: 'element',
                children: [],
                attributes: [],
                tagName: token.tagName
            }
            //将单标签  存在栈顶元素中
        top.children.push(element);
    }
    currentToken = null;
}

function parse(htmlString) {
    let state = start; //将开始函数赋值给state 
    for (let c of htmlString) {
        state = state(c); //将每一个字符循环处理
    }
}

function start(c) { //判断字符是否为开始标签
    if (c === '<') {
        return tagOpen
    } else {
        return start
    }
}

function tagOpen(c) { //
    // <html>: html tag 由 a-zA-Z  div span p 
    // </html>
    //  h t m l
    // console.log(c);
    //判断  为拼接做准备空间
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
    //将字符一个一个拼接到tagOpen函数准备的空间（currentToken）中
    if (c.match(/[a-zA-Z]/)) {
        currentToken.tagName += c;
        return tagName
    } else if (c.match(/[\t\n\f ]/)) { //判断遇见空格的时候
        return beforeAttaibuteName
    } else if (c === '>') {
        // tag 拼接结束（提交拼接好的标签）
        emit(currentToken);
        return start
    }
}

function beforeAttaibuteName(c) {
    if (c === '/') {
        currentToken.type = 'selfCloseToken';
        return tagName;
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