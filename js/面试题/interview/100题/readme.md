## 函数的原则
 - 函数是一等对象
 - 对象属性和方法需要查找 --- 对象本身属性->原型对象->原型链->Object->null
 - 构造函数是可以被new的 步骤：先定义 对象
 - 对象属性的设置延升

### new操作符
 - new操作符是自动返回的这个函数的实例对象的

 - 函数和构造函数 即统一又分离


函数的return 的对象的优先级 大于new的自身返回的
```js
 function people() {
            this.name = "lihua"
            return {
                name: "zs"
            }
        }
        console.log(people.prototype)
        let A = new people();
        console.log(A)

        function myNew(Construtor) {
            let obj = {};
            obj.__proto__ = Construtor.prototype;
            let ret = Construtor.apply(obj)
            //数组中也继承了Object 所以数组也会改变返回值
            let res = typeof ret === "object" ? ret : obj;
            return res
        }
        let B = myNew(people)
        console.log(B)
```