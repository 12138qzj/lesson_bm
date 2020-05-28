/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    /**
     * @param {string} s
     * @return {string}
     */
    var decodeString = function(s) {

        let reg = /[0-9]/;
        let right = s.indexOf(']')
        if (right <= -1) return s

        let left = right;
        while (left > 0 && s[left] !== "[") {
            left--;
        }
        let str = s.slice(left + 1, right)
        let index = left - 1;
        while (reg.test(s[index])) {
            index--;
        }
        let num = s.slice(index + 1, left);
        //  console.log("num",num)
        let cur = str.repeat(num)
            //     let cur=""
            //     for (let j = 0; j < num; j++) { // 重复k次  也可以直接使用 cur = str.repeat(k)
            //         cur += str
            //   //      console.log(cur)
            //     }

        // console.log( index)
        //  console.log(s.slice(0, index+1))
        // console.log(cur)
        //  console.log( s.slice(right+1, s.length))


        let newstr = s.slice(0, index + 1) + cur + s.slice(right + 1, s.length + 1);
        //console.log(newstr)
        return decodeString(newstr);
    };
}