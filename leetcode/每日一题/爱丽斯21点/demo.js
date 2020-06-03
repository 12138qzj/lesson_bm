/**
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 * 爱丽丝参与一个大致基于纸牌游戏 “21点” 规则的游戏，描述如下：

爱丽丝以 0 分开始，并在她的得分少于 K 分时抽取数字。 抽取时，她从 [1, W] 的范围中随机获得一个整数作为分数进行累计，其中 W 是整数。 每次抽取都是独立的，其结果具有相同的概率。

当爱丽丝获得不少于 K 分时，她就停止抽取数字。 爱丽丝的分数不超过 N 的概率是多少？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/new-21-game
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var new21Game = function(N, K, W) {

    let probability = [];
    let num = 0.0;
    for (let i = K; i < N + 1; i++) {
        probability[i] = 1.0;
        num += probability[i];
    }
    for (let i = N + 1; i < K + W; i++) {
        probability[i] = 0.0;
    }
    probability[K - 1] = num / W;
    for (let i = K - 2; i > -1; i--) {

        // for (j = i + 1; j < i + 1 + W; j++) {
        //     num += probability[j];
        // }
        probability[i] = ((W + 1) * probability[i + 1] - probability[i + W + 1]) / W
            //probability[i] = 1 / W * num;
    }
    console.log(probability);
    return probability[0];

};
// let probability = [];
// probability[2] = 1;
// console.log(probability);
N = 21, K = 17, W = 10
    // new21Game(21, 17, 10);
console.log(new21Game(21, 17, 10));