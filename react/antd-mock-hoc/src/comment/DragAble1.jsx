import React, { Component } from 'react';
import '../App.css';
class DragAble1 extends Component {
    
    render() {
        return (
          <div>
              被打开的
          </div>
        );
    }
}

class DragAble2 extends Component {
    
    render() {
        return (
          <div>
              第二个
          </div>
        );
    }
}

function withDragABle(Com){
    class withDragABle extends Component {

        state = {
            left:0,
            top:0,
        }
        onMouseDown = (e) => {
            console.log(e);
            this.obj=e.target.getBoundingClientRect();
            console.log(this.obj);
            this.startx=e.clientX;
            this.starty=e.clientY;
            console.log(this.startx,this.starty);
            document.addEventListener('mousemove',this.onMouseMove)
            document.addEventListener('mouseup',this.onMouseUp)
        }
        onMouseMove = (e) => {
            let endx=e.clientX;
            let endy=e.clientY;
            const diffx=endx-this.startx;
            const diffy=endy-this.starty;
            console.log(endx,endy,diffx,diffy);           
            this.setState({
                left:diffx+this.obj.left,
                top:diffy+this.obj.top,
            })
        }
        onMouseUp = (e) => {
            document.removeEventListener('mousemove',this.onMouseMove);
            document.removeEventListener('mouseup',this.onMouseUp)
    
        }
        render() { 
            const {left ,top}=this.state;
            return ( 
                <div onMouseDown={this.onMouseDown}
                // onMouseMove={this.onMouseMove}
                // onMouseUp={this.onMouseUp}
                style={{left,top}}
                className="dragable"
            >
                <Com/>               
            </div>  
            );
        }
    }
     
    
    return withDragABle
}

export const A= withDragABle(DragAble1);
export const B= withDragABle(DragAble2)