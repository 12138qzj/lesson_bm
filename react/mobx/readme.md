class 组件 setState->父子组件 或者孙子组件需要值的时候 ->context->redux (useReducer)-> mobx connect (装饰器模式);

yarn add mobx mobx-react



import { observable, computed,action ,  inject, observer} from 'mobx'


- 使用装饰器 @observable 观测

    - 向外抛出内部的变量 和函数
        @observable  todos=[];  // 变量定义

        @action //函数的定义 
            addTodo=title=>{

            }
- 解决@报错问题
    在 src 目录中 加tsconfig.json 文件

    加入{
        "compilerOptions": {
            "experimentalDecorators": true,
            "allowJs": true
        }
    }

