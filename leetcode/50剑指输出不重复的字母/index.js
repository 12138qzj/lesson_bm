/**
 * @param {string} s
 * @return {character}
 */
s = "abaccdeff"
var firstUniqChar = function(s) {
    let k = new Map();

    let leng = s.length;
    let i = 0;
    // k.set("u", 8)
    // console.log(k.get("2"));

    while (s[i]) {
        // console.log(res[s[i]])
        if (k.get(s[i])) {
            k.set(s[i], k.get(s[i]) + 1)
        } else {
            k.set(s[i], 1)
        }
        i++;

    }

    console.log(k)
    for (let item of k) {
        console.log(k.get(item))
        if (item[1] === 1) return item;
    }
    // let p = k.forEach((item, p) => {
    //     if (item === 1) {
    //         return p;
    //     }
    //     // console.log(item, p)
    // })
    // return p;
};
console.log(firstUniqChar(s));
// let k = ["a"]
// let res = {
//     a: 5
// }
// console.log(res.k[0]);