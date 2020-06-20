1. prototype :非箭头函数，函数才会有的属性


2. new 一个对象可以将函数定义中的prototype继承下来，存在__proto__
    还会继承函数定义中的方法
    class home{} 这个home还是一个Function


     // instanceof 谁是谁的实例 谁继承谁
        // instanceof 原理：
        // obj instanceof Constuctor
        //  就是判断 左边这个对象(obj) 它的原型链上面 有没有出现过 Constuctor.prototype 这个对象
        // 查找左边这个对象的原型链，看原型链有没有出现过 Constuctor.prototype这个对象 ，如果出现了 返回 true
        // 如果找到原型链的顶端还没找到 返回false
        // 鸡和蛋
        // obj.__proto__.__proto__.__proto__.__proto__.....
