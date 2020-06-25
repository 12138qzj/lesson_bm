### SQl语句
    SELECT username, id  FROM users where age < 30 group by sex;

### reduce方法
    JS数组reduce()方法
    arr.reduce(function(prev,cur,index,arr){
    ...
    }, init);

    或者

    arr.reduce(function(prev,cur,index,arr){
    ...
    },);

    arr 表示将要原数组；
    prev 表示上一次调用回调时的返回值，或者初始值 init;
    cur 表示当前正在处理的数组元素；
    index 表示当前正在处理的数组元素的索引，若提供 init 值，则索引为0，否则索引为1；
    init 表示初始值。