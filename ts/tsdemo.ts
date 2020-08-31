//对象类型的 就可以使用接口来约束

interface IUser{
    name:string;
    age:number;
}
// const getUserInfo=(user:IUser )=>{

//     return `${user.name}+${user.age}`
// }


//类型 定义文件
//当函数复用性比较高的时候 使用类型定义
type IUserInfoFunc=(user:IUser)=>string;

const getUserInfo:IUserInfoFunc=(user)=>{
    return `${user.name}+${user.age}`
}