import React, { useState, useRef } from 'react'

import { CSSTransition } from 'react-transition-group';


function Demo() {

    const [isIn, setisIn] = useState(true)
    function handleOnclick() {
        // fsda
    }
    useRef(() => {

    })

    //移走 ： *-exit ms *-exit-active *-exit-done
    //移进来 ： *-enter ms *-enter-active *-enter-done

    return (
        <>
            {/* 谁做动画 就用组件包裹 
        timeout：动画时长
        classNames:
        in:
        */}
            <CSSTransition timeout={2000}
                classNames="msg"
                in={isIn}
            >

                <div className="box">
                   +
                </div>
            </CSSTransition>

            <button onClick={()=>{setisIn(!isIn)}}>切换</button>
        </>

    )
}
export default Demo;
