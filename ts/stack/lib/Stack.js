"use strict";
// 数据结构由什么组成？
//  ADT 数据和操作数据的方法
//  栈： 先进后出 FILO  队列：FIFO
exports.__esModule = true;
//  元数据 items: any[]
//  方法：constructor 初始化： this.itmes=[] 
//   进栈:push
//   出栈:pop
//   获取栈顶元素：peek
//   长度 数量：size
//   是否为空: isEmpty
//   清空栈：clear
//   toString 输出
var Stack = /** @class */ (function () {
    // private peekvalue:any;
    // private valuepop:any;
    // private isEmpty:boolean;
    // private size:number;
    function Stack() {
        this.itmes = [];
    }
    Stack.prototype.push = function (item) {
        this.itmes.push(item);
    };
    Stack.prototype.pop = function () {
        return this.itmes.pop();
    };
    Stack.prototype.peek = function () {
        return this.itmes[this.itmes.length - 1];
    };
    Stack.prototype.size = function () {
        return this.itmes.length;
    };
    Stack.prototype.isEmpty = function () {
        return false;
    };
    Stack.prototype.clear = function () {
        this.itmes = [];
    };
    return Stack;
}());
exports["default"] = Stack;
