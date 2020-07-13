### HOOKS
    在函数式组件中，使用state变量管理
    import React, { Component,useEffect, useState,useMemo } from 'react';
   
    
    console.log("object");
    const [inputVal,setVal]=useState(''); //inputVal:变量 ,setVal：方法  修改inputVal的方法 setVal只能修改inputVal中的值
    const [list,setList]=useState([]);//useState('') 初始化state变量的值

    每次修改都会重新执行render函数。

    useDemo: 缓存值
    useCallback: 缓存函数
