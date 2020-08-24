import React from 'react';
class Mix extends React.Component {
  state = {
    visiable: false
  }
  handleToogle = (e) => {
    console.log(1)
    this.setState({
      visiable: true
    })
    e.stopPropagation();

    //所有的监听事件都绑定在 document 上面
    //所有的 事件同一采用的事件监听 都是一个

    //事件监听器 内部维护了元素和事件处理函数的关系

    //e.stopPropagation()只是阻止了


  }
  componentDidMount() {//组件渲染之后执行

    // document.body.addEventListener('click', () => {
    //   console.log("document")
    //  onClick={this.handleToogle}
    // 这个地方判断 哪一个dom结点回调 
    // }



    document.body.addEventListener('click', () => {
    console.log("document")

      this.setState({
        visiable: false
      })
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleToogle}> toogle </button>
        <div style={{ display: this.state.visiable ? 'block' : 'none'}}>
          内容
        </div>
      </div>
    )
  }
}
export default Mix;