const chapterTree = {
    name: '总章节',
    children: [{
            name: '章节一',
            children: [{
                    name: '第一节',
                    children: [
                        { name: '第一小节' },
                        { name: '第二小节' }
                    ]
                },
                {
                    name: '第二节'
                }
            ]
        },
        {
            name: '章节二',
            children: [
                { name: '第三节' },
                { name: '第四节' }
            ]
        }
    ]
};

// function serialize(tree) {
//     // TODO

//     let res = [];

//     function bl(tree) {
//         if (tree.name) {
//             res.push(tree.name)
//         }
//         // console.log(tree.children)
//         let children = tree.children;
//         for (let i = 0; i < children.size; i++) {
//             bl(children[i])
//         }
//     }
//     bl(tree);
//     return res;

// }

function serialize(tree) {
    // TODO

    let res = [];

    function bl(tree) {
        if (tree.name) {
            res.push(tree.name)
        }
        // console.log(tree.children)
        // let children = tree.children;
        // for (let i = 0; i < children.size; i++) {
        //     bl(children[i])
        // }
        if (tree.children) {
            for (let item of tree.children) {
                bl(item)
            }
        }
    }
    bl(tree);
    return res;

}
// 测试
const result = serialize(chapterTree);
console.log(result);
// ["总章节", "章节一", "第一节", "第一小节", "第二小节", "第二节", "章节二", "第三节", "第四节"