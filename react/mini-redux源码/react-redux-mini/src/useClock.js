import React, { useEffect,useState,useMemo,useRef } from 'react';
let obj={
    0:'星期日',
    1:'星期一',
    2:'星期2',
    3:'星期3',
    4:'星期4',
    5:'星期5',
    6:'星期6',

}
 function useClock() {
    const [date,setData]=useState(new Date());
    useEffect(()=>{
         let timer=setInterval(()=>{
             setData(new Date());
         },1000)
         return ()=>{
             clearInterval(timer)
         }
     },[]);
     //useMemo 对值的优化，根据依赖来判断值是否需要更新
     let dateStr=useMemo(()=>{
         let day=date.getDay();
         return`
         ${obj[day]}${date.toLocaleTimeString()}
         `;
     },[date])
    return dateStr;
}

function Count(){
    const [count,setcount]=useState(0);
    //重复定义 都是一个对象，修改和取值都是同一个东西
    const ref = useRef(0)
    console.log(ref)
    // state 计算值的问题 定时器拿到的初始值是 你一开始启动时候的值
    useEffect(()=>{
        let timer=setInterval(()=>{
            // ref.current=ref.current+1;
            setcount(count+1)
        },1000)
        return()=>{
            clearInterval(timer)
        }
    },[count])
    // return ref.current;
    return count



}
function Clock(){
    const date=useClock()

    return(
        <div>
            {date}
            {Count()}
        </div>
    )
}
export default Clock;
