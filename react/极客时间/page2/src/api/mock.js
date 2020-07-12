import Mock, { Random } from 'mockjs';
// let a;
// RANDOMIZE
export default Mock.mock('/all/', 'get', {
    success: true,
    'list|1-10': [{
        'key|+1': 0,
        'title': '@title()',
        'image': "@image('100x100')",
        'all|40-100': 40, //Math.floor(Math.random() * 10)
        'already|10-80': 10,
        'type|1': [
            "专栏",
            "视频课",
            "微课",
            "每日一课",
            "其他",
        ],
        "study|1": ["1", "2"],


    }]
});