import React, { Component,useEffect, useState,useMemo, useCallback } from 'react';
//useMemo  缓存的意思
function Demo(){
    //inputVal:变量 ,setVal：方法  修改inputVal的方法 setVal只能修改inputVal中的值


    //useState('') 初始化state变量的值

    let count=0
    console.log("object");
    const [inputVal,setVal]=useState('海阔天空');
    const [list,setList]=useState([]);

    useEffect(()=>{
        fetch('http://neteasecloudmusicapi.zhaoboy.com/search?keywords='+inputVal)
        .then(res=>res.json(''))
        .then(res=>{
            // console.log("use");
            setList(res.result.songs)
            console.log(res.result.songs)

        })
        
        return ()=>{
            //卸载的时候 
            // clearInterval()
            // clearTimeout();
            // document.removeEventListener()
        }
    },[inputVal])//inputVa改变则执行第一个参数  
    // 在useEffect第二参数，[inputVal]依赖：react检查依赖里面(inputVal)有没有数据发生变化，没有变化就不会重新调用


    //[]空数组 则整个运行只会执行一次 相当于在componentDidMount函数执行一次一样
    //[inputVal] 则判断inputVal改变而执行函数，

    console.log(list.length);

 

    //useMemo ： 缓存值/函数，检查依赖，只有依赖没有变化才会使用上次的值
    const val=useMemo(()=>[1,2],[]);
    let set=new Set(val);//无重复的数据集 
    console.log("0set",set);

    console.log(val);
    const hadleChange = useCallback((event)=>{
        setVal(event.target.value);
        console.log(event.target.value);
        // return 
    });
    return (
        <div>
            <input type="text" value={inputVal} onChange={hadleChange} name="" id=""/>
        </div>
    )
}
export default Demo;