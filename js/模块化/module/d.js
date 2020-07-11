//在这个位置 只导入add 
//则会将导入在这个模块的math.js 中divide函数删除

//rollup 打包的第三方库
import { add } from './math.js';

add();