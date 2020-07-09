import React, { Component ,useState } from 'react';

//useState: 在函数体中定义state 的功能 将这个模块迁移出来
//useState 官方定义的hook 函数组件内部定义的state 

// class UseDrag extends Component {
//     state = {}
//     render() {
//         return (
//             <div>
//                 UseDrag
//             </div>
//         );
//     }
// }


//function useDrag() 自己定义的hook 

function useDrag(){
    const [state , setState] = useState({
        left:0,
        top:0,
    })

    var handleDown = (e) => {
        console.log(e);
        // var obj=e.target.getBoundingClientRect();
        // // console.log(this.obj);
        // var startx=e.clientX;
        // var starty=e.clientY;
        // console.log(this.startx,this.starty);
        document.addEventListener('mousemove',onMouseMove)
        document.addEventListener('mouseup',onMouseUp)
    }

    var onMouseMove = (e) => {
        let endx=e.clientX;
        let endy=e.clientY;
        // const diffx=endx-startx;
        // const diffy=endy-starty;
        // console.log(endx,endy,diffx,diffy);           
        setState({
            // left:diffx-obj.left,
            // top:diffy-obj.top,
            left:endx,
            top:endy,
        })
    }
    var onMouseUp = (e) => {
        document.removeEventListener('mousemove',onMouseMove);
        document.removeEventListener('mouseup',onMouseUp)

    }
    return {
        left:state.left,
        top:state.top,
        handleDown,
    }
}

function Drag1(){
    const {left ,top , handleDown}=useDrag();
    return (
        <div 
            onMouseDown={handleDown}
                // onMouseMove={this.onMouseMove}
                // onMouseUp={this.onMouseUp}
                style={{left,top}}
                className="dragable">

                    HOOK操作
        </div>
    )
}

export default Drag1; 