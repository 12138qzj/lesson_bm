// 去除字符串中出现次数最少的字符，不改变原字符串的顺序。
// 例：“ababac” —— “ababa”
// “aabbcef” —— “aabb”

let strr = "aabbcef";

function arr(str) {
    let res = "";
    let min = Infinity;
    let temp = [];
    let map = {};
    let temp1 = []
    for (let i = 0; i < str.length; i++) {
        temp1.push(str[i]);
        if (map[str[i]]) {
            map[str[i]]++;
        } else {
            map[str[i]] = 1;
        }
    }
    console.log("temp1", temp1);
    Object.keys(map).map((cur) => {
        if (map[cur] < min) {
            min = map[cur];
        }
    })
    console.log("temp1", min);

    Object.keys(map).map((cur) => {
        if (map[cur] === min) {
            temp.push(cur);
        }
        // if (!temp.includes(cur)) {
        //     temp.push(cur);
        // }
    })

    for (let i = 0; i < temp1.length; i++) {

        if (!temp.includes(temp1[i])) {
            res = res + temp1[i];
        }
    }
    return res;
}
console.log(arr(strr));