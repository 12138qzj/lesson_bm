import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import BScroll from 'better-scroll';


// import BScroll from '@better-scroll/core'
// let wrapper = document.querySelector('.wrapper')
// let scroll = new BScroll(wrapper)


import  './Scroll.styl';
class Scroll extends Component{
    // constructor(){
    //     super();
    // }
    
    componentDidMount(){
        this.scrollView=ReactDOM.findDOMNode(this.refs.scrollView )
        console.log("refs",this.refs,this.scrollView)

        if(!this.bScroll){
            this.bScroll=new BScroll(this.scrollView,{
                probeType:3,
                click:this.props.click
            })
//获取父组件传递过来的函数 监听滚动事件
            if (this.props.onScroll) {
                this.bScroll.on('scroll', (scroll) => {
                  this.props.onScroll(scroll);
                })
              }
        }
        
    }
    render(){
        return(
            //ref:reference
            <div className="scroll-view" ref="scrollView">
                {
                    this.props.children
                }
            </div>
        )
    }
}
Scroll.defaultProps = {
    click: true,
    onScroll: null,
    refresh: true
  }
  Scroll.propTypes = {
    click: PropTypes.bool,
    refresh: PropTypes.bool,
    onScroll: PropTypes.func
  }
export default Scroll;