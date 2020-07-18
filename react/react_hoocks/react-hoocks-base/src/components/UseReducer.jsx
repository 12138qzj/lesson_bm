import React, { Component,useReducer } from 'react';
import { useCallback } from 'react';

const initState={
    count:0
}
function reducer(state=initState,action){
    switch(action.type){
        case "ADD":
            return {
                count : state.count+1
            }
        case "REDUCE":
               return {
                count : state.count-1
            }
        default:
            return state;

    }
}
function Counter(){
    const [store, dispatch]=useReducer(reducer,{count:0})


    /**
     * useCallback：检查useCallback的依赖是否改变
     * 改变则会重新返回第一参数（或执行第一参数）
     * 
     * 作用：判断依赖是否改变来决定是否改变触发函数。
     *          函数缓存，
     */
    const handleAdd=useCallback(()=>{
        dispatch({type:"ADD"})
    },[/*依赖*/])
    const handleReduce=useCallback(()=>{
        dispatch({type:"REDUCE"})
        
    },[/*依赖*/])

    console.log("handleAdd",handleAdd);
    return (
        <div>
            count:{store.count}
            <button onClick={handleAdd}>+</button>
            <button onClick={handleReduce}>-</button>

        </div>
    )
}
export default Counter;
