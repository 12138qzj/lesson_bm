function log(target, name, decsriptor) {
    // target
    // 拿到 装饰器中的目标值
    console.log(target.toString(), name, decsriptor, decsriptor.value);
    let originAdd = decsriptor.value;
    decsriptor.value = function(...arg) {
        console.log("你调用了这个数据");
        // Object.defineProperty();
        let res = originAdd.apply(this, arg);
        return res;

    }
    return decsriptor;
}

class Math {
    @log
    add(a, b) {
        // const sum = 'add'
        const sum = 'add';
        return sum + a + b;
    }
}
let m = new Math()
console.log("----", m.add(1, 2));