// 数据结构由什么组成？
//  ADT 数据和操作数据的方法
//  栈： 先进后出 FILO  队列：FIFO

//  元数据 items: any[]
//  方法：constructor 初始化： this.itmes=[] 
//   进栈:push
//   出栈:pop
//   获取栈顶元素：peek
//   长度 数量：size
//   是否为空: isEmpty
//   清空栈：clear
//   toString 输出

export default class Stack{
    private itmes:Array<any>;
    // private peekvalue:any;
    // private valuepop:any;
    // private isEmpty:boolean;
    // private size:number;
    constructor(){
        this.itmes=[]
    }
    push(item:any){
        this.itmes.push(item)
    }
    pop(){
        return this.itmes.pop();
    }
    peek(){
        return this.itmes[this.itmes.length-1];
    }
    size():number{
        return this.itmes.length;
    }
    isEmpty():boolean{
        return this.itmes.length===0;
    }
    clear(){
        this.itmes=[];
    }
}