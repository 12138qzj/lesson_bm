const css = require('css');
const layout = require('./layout')
    //导入画图片的第三方库
const images = require('images')
let htmlStr = `<html>
  <head>
   <style>
   </style>
  </head>
  <body>
    <div class="wrap">
        <div class="main"></div>
        <div class="aside"></div>
    </div>
  </body>
</html>`
    //css的解析成JSON
let cssStr = `
.wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    background-color: rgb(255,0,0);
}

.wrap .main {
    width: 200px;
    height: 200px;
    background-color: rgb(0,255,0);
}
.aside{
    width: 300px;
    height: 300px;
    background-color: rgb(0,0,255);
}
`
let rules = css.parse(cssStr).stylesheet.rules

let currentToken = null;
let currentAttribute = null;
let stack = [{ type: 'document', children: [] }];
parse(htmlStr);
console.log(rules)
console.log(JSON.stringify(rules))
console.log(JSON.stringify(stack[0], null, 2))
    //拿到整颗树 
    //遍历树 渲染每个element（节点）
let tree = stack[0];
let viewImage = images(800, 600);

function render(view, element) {
    if (element.style) {
        let img = images(element.style.width, element.style.height);
        //获取颜色
        if (element.style['background-color']) {
            let color = element.style['background-color'];
            let start = color.indexOf('('),
                end = color.lastIndexOf(')')
                //获取rgb中的三个数值
            let rgb = color.substring(start + 1, end).split(', ').map(e => parseInt(e));
            img.fill(rgb[0], rgb[1], rgb[2]);
        }
        view.draw(img, element.style.x, element.style.y);
    }
    if (element.children) {
        for (let child of element.children) {
            render(view, child);
        }
    }
}
render(viewImage, tree)
    //定义一个画布




//将绘制好的画布保存
viewImage.save('render.jpg')

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



/**
 * 
 * @param {String} selector 
 * @param {JSON} ele 
 * @function 判断样式的类型，若匹配成功则返回true,匹配不成功则返回false
 * 
 * 
 */
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

// function computerCss(ele) {}
function computerCss(ele) {
    // 计算 符合这个 ele 的所有 css 规则 || css 规则 应用到这个节点上面
    // 1: 靠 ele 属性 父节点，和 css 里面 选择器 匹配
    // 2：匹配 从后往前匹配  .parent .cls
    // tagName #id  .className
    // .parent .cls
    // div  || div .cls  || span #parentID .parent #id

    //stack.slice(0) 存在子元素和父元素 翻转则先从子元素中查找样式
    console.log("elements----------JSON", JSON.stringify(stack.slice(0).reverse()))
    let elements = stack.slice(0).reverse();
    console.log("elements----------", elements)
        //若没有computerStyle属性，则初始化css属性
    if (!ele.computerStyle) ele.computerStyle = {};
    // 所有 css 规则
    for (let rule of rules) {
        //selector [ '.main', '.wrap' ] 将样式名翻转从子样式中开始到父级结束找（从内到外查找样式）
        //console.log(" rule.selectors[0]", rule.selectors[0]);//.wrap .main
        let selector = rule.selectors[0].split(' ').reverse();
        // console.log("selector", selector);
        // 最后一项匹配上了
        if (!match(selector[0], ele)) {
            // 匹配没有成功跳过本轮循环，往后的步骤
            continue;
        }
        // 看父级满不满足  
        // [{type: 'doc'}, {html}, [header]]
        // [#id .parent  #parentID  span]
        let j = 1;
        for (let i = 0; i < elements.length; i++) {
            //当css样式匹配上则j++
            if (match(selector[j], elements[i])) j++
        }
        // 匹配 判断j的大小 判断将当前选择器的样全部匹配完
        if (j >= selector.length) {
            // rule rule css 规则添加到 ele
            //当全部匹配成功则将样式添加到element.computerStyle属性中
            for (let delecare of rule.declarations) {
                const { property, value } = delecare;
                ele.computerStyle[property] = value
            }
        }
    }
}

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
    // console.log(token);
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
        /**
         * 每一次提交标签 都会将没有添加css样式的元素去找css匹配一下
         * element是引用类型 则不要定义全局变量
         * 形参修改则实参也会修改：赋予地址给形参
         * */
        console.log("element前", element)
        computerCss(element);
        console.log("element后", element)

        stack.push(element);
        //console.log("stack", JSON.stringify(stack))
        // 作为栈顶的元素子节点，为了生成树
        // if (!top.children) top.children = [];
        top.children.push(element);
    } else if (token.type === 'endTag') {
        if (token.tagName !== top.tagName) {
            throw new Error('tagname match error')
        } else {
            //遇到结束标签标签出栈
            // flex 布局 放到结束标签位置
            // 因为像 alignItems justifyContent 需要知道子元素的宽高的
            // 先保证 子元素宽高 已经解析出来了
            // 在这里计算 （x,y）
            // 栈顶元素就是 要布局的 容器
            //将节点的子元素去格式化css样式
            layout(top)
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
/**
 * 入口：attributeValue，tagName在这两个函数过来
 * 功能：1. 遇见‘/’则是单标签--判断是否为单标签 
 *      2. 遇见空格 则自我消化--消除空格
 *      3. 遇见字母则是为样式名--拼接样式名字
 *      4. 遇见 '>' 则是结束了该标签的拼接工作交给tagName函数去提交
 */
function beforeAttaibuteName(c) {
    //attributeValue在这个函数过来的要是‘/’则是单标签
    if (c === '/') { //遇见‘/’则是结束
        //修改标签类型
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
        // 若“”之后是空格 则执行这一步
        // 消耗了
        //若该子节点没有attributes则初始化
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