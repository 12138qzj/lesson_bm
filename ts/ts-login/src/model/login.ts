
//导出类型约束接口
export interface LoginEntity{
    login:string;
    password:string;
}
//函数返回值约束
export const createEmptyLogin=():LoginEntity=>({
    login:'',
    password:'',
})