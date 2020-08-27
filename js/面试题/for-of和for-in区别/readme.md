- 循环for ,for in ,for of

- for 有三个表达式
    1. 声明变量循环；
    2. 判断循环条件
    3. 更新循环变量

- for-in 循环主要是用于遍历对象
    以顺序遍历一个对象的除Symbol以外的可枚举属性
    环格式为：
    for(key in object) key是每一个键值对的键 object则为循环对象
    当我们需要取到对象里面的值时 object[key]

- for of 是遍历数据结构的统一方法
    一个数据结构只要部署了 Symbol.iterator 属性，就被视为具有 iterator 接口，
    就可以用 for...of 循环遍历它的成员
    for...of 循环内部调用的是数据结构的 Symbol.iterator 方法

    可循环对象（array,Map,Set,String ,arguments);

    