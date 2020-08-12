import { MemberEntity } from '../../model';
import { members } from './mockData';

//给Promise设置数据模板 MemberEntity[] 数据必须遵守这个模板才不会报错


// 函数约束三步：
/**
 * 1. 参数校验
 * 2. 返回值的校验->返回数据模板也可以被校验(使用泛型)
 * 3. 
 */

const fetchMembers = (): Promise<MemberEntity[]> => {
  return Promise.resolve(members);
};

export const memberAPI = {
  fetchMembers,
};