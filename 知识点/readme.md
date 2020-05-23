## 栈内存
    特点：小， 基本数据 
     1.基本数据类型（存变量名和值） 是存在栈内存中
     2. key ,value 的储存方法 
    - 基本数据类型
     1. 
## 堆内存
    特点：大
    复杂数据类型(引用类型)//指向同一块地址
     1. 里面可以改变储存地址的大小 
     2.  let arr1=[1,2,3] 变量存在 栈内存中 value存放的不是值 存放地址（数据存在堆内存的地址）
     3. let arr2=arr1; 将基本数据类型的arr2 中的value存放数据的地址
        当改变其中一个数据的时候  改变的是堆内存的里面的 数据
        所以改变地址中是数据 
Object
    中的object
    let obj={
        name:'qzj',
        age ：18
    } //可对其 增 删 改 查。  可以对其添加属性值
    //指向同一个内存地址  名字不一样而已
    //对其一个修改 另一个也随其改变
Array
    let arr2=[1,2,3];
    let arr1=arr2;
    arr1.push(3);
    //对其中一个改变  因为指向的地址是一样的  所以会一起改变



## 类型

### 基本数据（基础）类型
Null
Undefined
String
Number
Bool

## 复杂数据(引用)类型

Object
  - array
  - function
  - object
  - reg(正则)
  - date
    