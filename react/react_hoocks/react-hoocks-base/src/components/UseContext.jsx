
import React, { PureComponent,useContext,useEffect,useRef } from 'react';
import { createContext } from 'react';
import { useState } from 'react';

const context =createContext({
    theme:'red'
})

// class UseContext extends PureComponent {
//     state = {  }
//     render() { 
//         return ( 
//             <div>
//                 context
//             </div>
//          );
//     }
// }
 
// export default UseContext;

function Father(){
    let [obj,setTheme]=useState({theme:"red"})

    useEffect(()=>{
        setTimeout(()=>{
            setTheme({
                theme:"blue"
            })
        },3000)
    },[])
    
    return (
        <context.Provider value={obj}>
            <Child/>
        </context.Provider>
    )
}

function Child(){
    return <Son/>
}
function Son(){


    const refdiv=useRef();
    const data= useContext(context)

    useEffect(()=>{
        console.log(ref.current);
    },[])
    console.log("111111",data);
    return(
        <div ref={refdiv}>
            son
            {data.theme}
        </div>
    )
}
export default Father