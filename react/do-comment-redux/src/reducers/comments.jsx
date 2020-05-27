
let comments=[
    {
    "id":1,
    "username":"张三",
    "content":"作者",

}
]

export default function(state={//给默认值
    comments:comments
}){
    // if(!state){
    //     state={
    //         comments:[]
    //     }
    // }
    return state;
}