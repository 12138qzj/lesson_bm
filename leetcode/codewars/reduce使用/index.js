function sumIntervals(intervals) {
    //TODO
    let res = 0;
    // let start=intervals[0]

    intervals.sort((a, b) => a[0] - b[0])

    // console.log(intervals)
    intervals.reduce((pre, cur, index, arr) => {
        if (pre[1] >= cur[0]) {
            if (pre[1] >= cur[1]) {

            } else {
                pre[1] = cur[1];
            }
            // console.log("pre",pre)
            if (index == arr.length - 1) {
                res += (pre[1] - pre[0])
            }
            return pre;
        } else {
            res += (pre[1] - pre[0])

            if (index == arr.length - 1) {
                res += (cur[1] - cur[0])
            }
            return cur;
        }
    }, intervals[0]);
    return res;
}