(function () {
    'use strict';

    const add = function(a, b) {
        console.log("object");
        return a + b;
    };

    //在这个位置 只导入add 
    add();

}());
