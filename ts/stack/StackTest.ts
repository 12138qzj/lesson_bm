import Stack from './lib/Stack'
const stack=new Stack();

stack.push("第一条数据");
stack.push("第二条数据");

console.log(stack.pop());

console.log(stack.peek())
console.log(stack.size())
console.log(stack.isEmpty())

