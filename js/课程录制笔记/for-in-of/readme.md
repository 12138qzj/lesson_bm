## for循环 
- for 有三个表达式
    1. 声明变量循环；
    2. 判断循环条件
    3. 更新循环变量
- 执行特点
    1. 先判断再执行
    for 循环三个表达式都可以有多部分组成，每部分用逗号分割
    第一部分 可以在外/内定义初始变量
    第二部分多个判断条件可用&& ||连接，

```js
    let arr=[1,2,3,4]
    for(var i=0;i<arr.length;i++){
        console.log(arr[i])
    }
```

## for in循环 
- for-in 循环主要是用于遍历对象
    以任意顺序遍历一个对象的除Symbol以外的可枚举属性
    循环格式为：
    for(keys in object) keys是每一个键值对的键 object则为循环对象
    当我们需要取到对象里面的值时 ，则只需要 在循环体中 使用object[keys]

    ```js
    function Person(){
        this.name = "kaola";
        this.age = 24;
        this.func1 = function(){
            
        }
    }
    let obj={
        name:"李华",
        age:20
    }
    var bei = new Person();
    //使用for-in遍历这个对象
    for(keys in bei){
        console.log(bei[keys])
    }
    ```
## for of 循环
    他是一个es6作为
    对于for...of的循环，可以由break, throw  continue    或return终止。在这些情况下，
    可迭代对象（包括 Array，Map和Set结构，String，arguments 对象等等）



    symbol 是一种基本数据类型 （primitive data type）。Symbol()函数会返回symbol类型的值，该类型具有静态属性和静态方法。它的静态属性会暴露几个内建的成员对象；它的静态方法会暴露全局的symbol注册，且类似于内建对象类，但作为构造函数来说它并不完整，因为它不支持语法："new Symbol()"。

每个从Symbol()返回的symbol值都是唯一的。一个symbol值能作为对象属性的标识符；这是该数据类型仅有的目的。更进一步的解析见—— glossary entry for Symbol。

