/**
 * 字符串的判断， 状态机的实现
 */

function match(string) {
    let state = start
    for (let c of string) { //循环需要判断的字符串
        state = state(c);
    }
    return state === end; //存在则会在end函数中循环到字符串结束
}

function start(char) {
    if (char === 'a') {
        return foundA //判断是“a”则返回判断“b”的函数
    } else {
        return start
    }
}

function foundA(char) {
    if (char === 'b') {
        return foundB
    } else {
        return start;
    }
}

function foundB(c) {
    if (c === 'c') {
        return end
    } else {
        return start;
    }
}

function end(a) { //全部找到则在此函数循环，直到结束
    console.log(a)
    return end;
}
console.log(match('i abc good'))