//

//装饰class的时候 能够拿到 这个class

// 装饰属性 方法

function observer(target) {

    target.displayName = "XXX"

    return target;
}


@observer
class Com {
    render() {
        return '123'
    }
}
console.log(Com.displayName);