/**
 * 函数功能组合 _.flow([fn1,fn2])
 */

function myFlow(fns) {
    // let res;

    let fn = (str) => {
        let res = str
        for (let i = 0; i < fns.length; i++) {
            res = fns[i](res);
        }
        return res;
    }
    return fn;
}