## 原型链继承原理：(对function存在效果 class没有)

1.   let c1 = new Cat();
    在定义class的时候 该类继承了对象的__proto__ (Object)；没有继承该类的属性值
    c1.__proto__ = Animal.prototype （c1为实例）
        ：该赋值没有Animal类中的属性值，只有原型对象上 的方法
    ### 继承
    这样继承：
     c1.__proto__ = new Animal();
     **存在问题:**
     将被继承实例赋值给子对象实例的__proto__ 该赋值为引用（是将指针赋值给子对象实例的）
     所以所使用的内容还是同一块的
     ```js
        let c1 = new Cat();   // eat = ['fish']
        let c2 = new Cat();   // eat = ['meat']
        let c3 = new Cat();
        let c4 = new Cat();
        c1.eat.push('fish');
        c2.eat.push('meat');
        // 每一个实例之间都是独立
        // c1 c2 ... __proto__ 都会指向同一个地方
        // c1 有 Cat 的属性，也有 Cat.prototype 的属性
        这样赋值则 c1,c2,c3,c4都会有eat属性的内容，
     ```
    **解决办法:**
    ```js
      function Cat() {
          //使用这样继承 不会继承Animal中prototype和方法
            Animal.call(this);
        }
        外部在实现继承prototype---和Animal的方法
         Cat.prototype = new Animal();

    ```
    将子类中实例一下父类，将父类的属性复制一份到子类，然后子类就有父类的所有属性
    - 当然此时子类的__proto__中还会存在父类的共享属性，但是子类调用的时候，优先使用自己的属性
    继承的时候会将 被继承对象的prototype属性值