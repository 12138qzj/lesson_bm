/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var S = "ADOBECODEBANC",
    T = "ABC";
var S = "a",
    T = "a";
var minWindow = function(s, t) {

    let result = "";

    let min = Infinity;
    let type = 0;
    let map = {};
    for (let i = 0; i < t.length; i++) {
        let char = t[i];
        if (map[char]) {
            map[char]++;
        } else {
            type++;
            map[char] = 1;
        }
    }
    console.log(map)

    let l = 0;
    // let rit = 0;
    for (let r = 0; r < s.length; r++) {
        let charr = s[r];

        if (map[charr] !== undefined) {
            map[charr]--;
        }
        if (map[charr] == 0) {
            type--;
        }

        console.log("r", r)


        while (type == 0 && l < r + 1) {
            // console.log("map", map, type)

            if (min > s.slice(l, r + 1).length) {
                result = s.slice(l, r + 1);
                min = s.slice(l, r + 1).length
                console.log("min", l, r)

            }

            let charl = s[l]
                //  console.log("charlwaim", charl)

            if (map[charl] != undefined) {
                map[charl]++;
                //     console.log("charl", map[charl])

            }
            if (map[charl] > 0) {
                type++;
            }
            l++;
            //console.log("man", map, type)

        }
    }
    console.log(result)


};
minWindow(S, T)