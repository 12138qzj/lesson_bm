function zip(...arg) {
    let res = [];
    // console.log(arg)
    // for (let indexy in arg) {
    //     for (let index in arg[indexy]) {
    //         if (!res[index])
    //             res[index] = [];
    //         res[index].push(arg[indexy][index])

    //     }
    // }
    // return res;

    for (let i = 0; i < arguments.length - 1; i++) {
        res.push(Array.from(arguments).map(ele => ele[i]));
    }
    return res;

    let res1 = new Array(arg.length).fill([])
}

console.log(zip(['fred', 'barney'], [30, 40], [true, false]));
// => [['fred', 30, true], ['barney', 40, false]]