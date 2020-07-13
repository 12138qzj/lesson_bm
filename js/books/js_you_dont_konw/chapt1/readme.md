### 作用域是什么

- js中  
    变量 是程序的状态  声明空间（闭包，作用域，变量查找，变量提升） 存储值，  修改值 

    赋值过程 
    var a=2;
    var  是关键字 
    a是 identifier 标识符  
    = 运算符
    2 value 内容的描述


操作系统->cup调度->浏览器javascript引擎线程->

引擎 V8 编译器， 解译器 

预编译中
    var a 先在内存中开辟一个空间，在这个作用域中 创建一个词法环境，


    1. 分词/词法分析


    2. 语法分析阶段 
        编译器也是一段代码，运行
        HTML <div></div> 形成一个DOM树

        构建 抽象语法树 （Abstract Syntax Tree）AST
    
    3. 代码生成阶段 
    （生成机器码）

    AST ---> 机器码

    - V8引擎优化这个步骤 
    
    JS 运行时编译
    （逐行编译执行）
    java c++ （预编译）

    编译器（Compiler)
    解释器（Interpreter）

   
    JIT(即时编译器)


    AO {}这个是一个对象 Active Object 存在于作用域中（存放变量的地方）

    AO链就是JavaScript的作用域链
    JS 基于原型的面向对象

    函数是一等对象 
    每一个函数执行时，会在自己的对象中创建一个AO对象

    function func(){
        var a=2;
        var a=1;//编译阶段不会执行， 编译阶段是变量定义
        //赋值操作在执行阶段执行。
        console.log(a)
    }

    AO上如果有与函数通名的属性，则会被次函数覆盖


都是引擎对变量进行查询的时候  一般发生在 = 左右 一般左边发生LHS  右边发生RHS 
    LHS(Left ):

    变量赋值或写入内存，想象为将文本文件保存在硬盘中

    RHS(retrieve his source value):
    变量查找或从内容中读取， 想象为 从硬盘中打开文本文件。

    非严格模式下 LHS会自动创建一个全局变量 
    查询成功后，如果对变量的定义不合理的操作，TypeError 