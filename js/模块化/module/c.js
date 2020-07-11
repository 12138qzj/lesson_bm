/**模块化导入导出 */

var a = 1;


//默认导出
export default a;

//默认导入
import moduleName from 'module';

//非默认导出 （name）
export const b = function() {}

const c = 2;
export {
    c
}

// {c}  这个位置不是解构

import { c } from './c.js';
console.log("object");


//在这个位置 只导入add 
//则会将导入在这个模块的math.js 中divide函数删除
import { add } from './math.js';