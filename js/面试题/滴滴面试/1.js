let obj = { a: '1', b: { c: 2 }, d: [1, 2, 3] }

//数据在更新的时候 通知一下模板

var res = Object.defineProperty(obj, "_a", {
        // writable: true,
        val: 11,
        enumerable: true,
        get: function() {

            console.log("改变了get");
            return this.val;
        },

        set: function(newValue) {

            console.log("改变了");
            this.val = newValue
        }
    })
    // obj.a = "7";
console.log(obj._a)