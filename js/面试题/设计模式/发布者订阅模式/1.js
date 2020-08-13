const EventEmitter = require('events');
const { resolve } = require('path');

class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// let m = 0;
// myEmitter.once('event', () => {
//     console.log(++m);
// });

// myEmitter.on('price', () => {
//     console.log("价格变化了");
// })

// //发出
// myEmitter.emit('price')

// myEmitter.emit('event');
// // 打印: 1
// myEmitter.emit('event');


let price1 = () => {
    console.log("price1");

}
let price2 = () => {
    console.log("price2");
}
let blog1 = () => {
    console.log("blog1");

}
let blog2 = () => {
    console.log("blog2");
}


function off(name, fn) {
    let listens = listeners[name] || [];
    listeners[name] = listens.filter(listen => listen !== fn)
}


function on(name, fn) {

    if (Object.prototype.toString.call(fn) != "[object Function]") return;

    // let keys = Object.keys(listeners);
    // if (!keys.includes(name)) {
    //     listeners[name] = [];
    // }

    if (!listeners[name]) {
        listeners[name] = [];
    }
    listeners[name].push(fn)

}
// 发布订阅  根据名字来发布
function emit(name) {
    if (!listeners[name]) {
        console.log("没有人");
        return;
    }
    listeners[name].filter(itme => {
        itme();
    })

    listeners[name] = listeners[name].filter(listen => !listen.once)
}



on("price", price1)
once("price", price2)
console.log(listeners);

emit("price")
console.log(listeners);

class my {
    constructor() {
        // super()
        // this.once
        // this.on
        // this.off
        // this.emit
        this.listeners = {

        }
    }
    once = (name, fn) => {
        fn.once = true;
        on(name, fn)
    }
    emit = (name) => {
        if (!listeners[name]) {
            console.log("没有人");
            return;
        }
        listeners[name].filter(itme => {
            itme();
        })
        listeners[name] = listeners[name].filter(listen => !listen.once)
    }
    on = (name, fn) => {

        if (Object.prototype.toString.call(fn) != "[object Function]") return;

        // let keys = Object.keys(listeners);
        // if (!keys.includes(name)) {
        //     listeners[name] = [];
        // }

        if (!listeners[name]) {
            listeners[name] = [];
        }
        listeners[name].push(fn)

    }
    off = (name, fn) => {
        let listens = listeners[name] || [];
        listeners[name] = listens.filter(listen => listen !== fn)
    }
}

console.log(my);