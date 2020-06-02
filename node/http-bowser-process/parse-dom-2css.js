const css = require('css');
let htmlStr = `<html>
  <head>
   <style>
   </style>
  </head>
  <body>
    <img a="a" b="b"/>
    <span>
      <div>
        <div>
          <p></p>
        </div>
      </div>
      <div></div>
    </span>
    <div class="cls" id="myid"></div>
  </body>
</html>`
    //css的解析成JSON
let cssStr = `
.parent .cls {
  font-size: 16px 
}
#myid {
  background-color: red;
}
`
let rules = css.parse(cssStr).stylesheet.rules

let currentToken = null;
let currentAttribute = null;
let stack = [{ type: 'document', children: [] }];
parse(htmlStr);
console.log(JSON.stringify(rules))
console.log(JSON.stringify(stack[0], null, 2))

// function match(selector, ele) {
//     if (selector || ele.attributes) {
//         return false;
//     }
//     if (selector.charAt(0) === '#') {
//         let idAttr = ele.attributes.find(e => e.name === 'id');
//         if (idAttr) {

//         }
//     }
// }

function match(selector, ele) {
    if (!selector || !ele.attributes) {
        return false;
    }
    // #myid
    // {name: id, value：‘myid’}
    if (selector.charAt(0) === '#') {
        let idAttr = ele.attributes.find(e => e.name === 'id');
        if (idAttr && idAttr.value === selector.replace('#', '')) return true;
    } else if (selector.charAt(0) === '.') {
        let classAttr = ele.attributes.find(e => e.name === 'class');
        if (classAttr && classAttr.value === selector.replace('.', '')) return true;
    } else {
        if (ele.tagName === selector) return true;
    }
    return false;
}

function computerCss(ele) {}
// function computerCss(ele) {
//     // 计算 符合这个 ele 的所有 css 规则 || css 规则 应用到这个节点上面
//     // 1: 靠 ele 属性 父节点，和 css 里面 选择器 匹配
//     // 2：匹配 从后往前匹配  .parent .cls
//     // tagName #id  .className
//     // .parent .cls
//     // div  || div .cls  || span #parentID .parent #id
//     let elements = stack.slice(0).reverse();
//     if (!ele.computerStyle) ele.computerStyle = {};
//     // 所有 css 规则
//     for (let rule of rules) {
//         let selector = rule.selectors[0].split(' ').reverse();
//         // 最后一项匹配上了
//         if (!match(selector[0], ele)) {
//             // 跳过本轮循环，往后的步骤
//             continue;
//         }
//         // 看父级满不满足  
//         // [{type: 'doc'}, {html}, [header]]
//         // [#id .parent  #parentID  span]
//         let j = 1;
//         for (let i = 0; i < elements.length; i++) {
//             if (match(selector[j], elements[i])) j++
//         }
//         // 匹配
//         if (j >= selector.length) {
//             // rule rule css 规则添加到 ele
//             for (let delecare of rule.declarations) {
//                 const { property, value } = delecare;
//                 ele.computerStyle[property] = value
//             }
//         }
//     }
// }
// function computerCss(ele) {
//     // 计算 符合这个 ele 的所有 css 规则，css 规则 应用到这个节点上面
//     // 1: 靠 ele 属性 父节点，和 css 里面 选择器 匹配
//     // 2：匹配 从后往前匹配  .parent .cls
//     let elements = stack.slice(0).reverse();



//     for (let rule of rules) {
//         let selector = rule.selectors[0].split(' ').reverse();
//         if (!match(selector[0], ele)) {
//             continue;
//         }
//         let j = 1;
//         for (let i = 0; i < elements.length; i++) {
//             if (match(selector[j], elements[i])) {
//                 j++;
//             }
//         }
//     }

// }

function emit(token) {
    console.log(token);
    //取出栈中的栈顶元素（开始的父级标签）
    let top = stack[stack.length - 1];
    if (token.type === 'startTag') {
        // push pop 处理配对
        let element = {
            type: 'element',
            children: [],
            attributes: token.attributes,
            tagName: token.tagName
        }

        // 知道 attributes , 知道 stack 里面元素 是 element 父节点
        //遇到一个开始标签则匹配一下css样式
        computerCss(element);
        stack.push(element);
        console.log("stack", JSON.stringify(stack))
            // 作为栈顶的元素子节点，为了生成树
            // if (!top.children) top.children = [];
        top.children.push(element);
    } else if (token.type === 'endTag') {
        if (token.tagName !== top.tagName) {
            throw new Error('tagname match error')
        } else {
            stack.pop();
        }
    } else if (token.type === 'selfCloseToken') {
        let element = {
            type: 'element',
            children: [],
            attributes: token.attributes,
            tagName: token.tagName
        }
        top.children.push(element);
    }
    currentToken = null;
}
//html 字符串进入
function parse(htmlString) {
    state = start;
    for (let c of htmlString) {
        state = state(c);
    }
}

function start(c) { //判断字符是否为‘<’ 是则为判断开始标签
    if (c === '<') {
        return tagOpen
    } else {
        //不是则重新获取下一个字符
        //判断字符函数
        return start
    }
}

function tagOpen(c) {
    // <html>: html tag 由 a-zA-Z  div span p 
    // </html>
    //  h t m l
    // console.log(c);
    if (c === '/') { //判断是否遇见结束标签
        return endTagOpen
    } else if (c.match(/[a-zA-Z]/)) { //没有遇到则将标签记录下来存在currentToken中
        currentToken = {
            //标记为开始标签
            type: 'startTag',
            //开始记录标签中的字符
            tagName: c
        }
        return tagName
    }
}

function tagName(c) { //记录标签的类型和字符
    if (c.match(/[a-zA-Z]/)) {
        currentToken.tagName += c;
        return tagName
    } else if (c.match(/[\t\n\f ]/)) { //遇见空格的是时候 则判断是否要结束还是样式名
        return beforeAttaibuteName
    } else if (c === '>') { //遇见‘>’结束符号则进行下一次标签判断
        // tag 拼接结束 提交保存好的标签
        emit(currentToken);
        return start
    }
}

function beforeAttaibuteName(c) {
    //attributeValue在这个函数过来的要是‘/’则是单标签
    if (c === '/') { //遇见‘/’则是结束
        currentToken.type = 'selfCloseToken';
        return tagName;
    } else if (c.match(/[a-zA-Z]/)) { //遇见字符则是css样式名
        currentAttribute = { //开始记录css样式
            name: c, //样式类型
            value: '' //样式名字
        }
        return attributeName
    } else if (c.match(/[\t\n\f ]/)) {
        return beforeAttaibuteName
    } else if (c === '>') {
        return tagName(c);
    }
}

function attributeName(c) {
    // class="cls"
    // ""
    if (c.match(/[a-zA-Z]/)) { //存储样式名字
        currentAttribute.name += c; //字符相加
        return attributeName;
    } else if (c === '=') { //当遇见‘=’ 的时候 则是样式类型结束的时候
        return attributeValue;
    }
}

function attributeValue(c) {
    // <div class="cls" id="myid" a="b"></div>
    if (c === '\"') { //遇见左边双引号（右边双引号==左边双引号）的时候 则进行样式名字的存储
        //遇见右边双引号（右边双引号==左边双引号）的时候 则进行存储样式名
        // nothing
        return attributeValue;
    } else if (c.match(/[a-zA-Z]/)) { //自循环将样式的名字一个一个字符相加存储
        currentAttribute.value += c;
        return attributeValue;
    } else {
        // 空格 >
        // 消耗了
        if (!currentToken.attributes) currentToken.attributes = [];
        //在JSON中的attributes属性加css的类型很名字
        currentToken.attributes.push(currentAttribute);
        currentAttribute = null;
        // 代理
        // 本状态内部处理完毕了这个 c，下一个状态也要针对 c 处理
        // 本状态内部处理完毕了这个 c，下一个状态处理到的字符就是 c 的后一个 字符
        return beforeAttaibuteName(c);
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