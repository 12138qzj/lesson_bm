import React, { Component } from 'react'
import PropTypes from 'prop-types';
// console.log(PropTypes, '---------------');


class CommentInput extends Component {
  static propTypes = {   // 有什么用？ 检验 
    onSubmit: PropTypes.func//类型验证
  }


  // CommentInput.propTypes = {
  //   onSubmit: PropTypes.element.isRequired
  // };
  
  
  constructor () {
    super()
    this.textarea=React.createRef();//非受控组件的定义
    this.state = {
      username: '',
      content: ''
    }
  }
  // 不同的生命周期函数
  componentWillMount () { // 即将挂载, 
    this._loadUsername()
  }


  componentDidMount () { // mount 挂载
    this.textarea.focus()  // ?
    //this.textarea.current.style.color="red";
   // this.textarea
    console.log(this.textarea)
  }



  _loadUsername () {
    const username = localStorage.getItem('username')
    if (username) {
      this.setState({ username })
    }
  }


  _saveUsername (username) {
    localStorage.setItem('username', username)
  }
  
  handleUsernameBlur (event) {
    // console.log(event.target.value)
    this._saveUsername(event.target.value) // 私有方法
  }


  handleUsernameChange (event) {
    // console.log(event.target.value)
    this.setState({
      username: event.target.value
    })
  }


  handleContentChange (event) {
    this.setState({
      content: event.target.value
    })
  }


  handleSubmit () {
    //this指向改为全局指向
    if (this.props.onSubmit) { //判断父级的函数是否存在
      this.props.onSubmit({ //使用props通道将参数传递给父级，便于父级调用函数执行
        username: this.state.username,
        content: this.state.content,
        createdTime: +new Date()
      })
    }


    this.setState({ content: '' })
  }
  render () {
  //  const name=this.props.children

    return (
  

      <div className='comment-input'>
        {/* 默认值设置 */}
    <h1>hello,{this.props.name}</h1>

        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input
              value={this.state.username}
              onBlur={this.handleUsernameBlur.bind(this)}
              onChange={this.handleUsernameChange.bind(this)} />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea
              // react ref  html id  dom 
              //非受控组件
              ref={(textarea) => this.textarea = textarea}
              value={this.state.content}
              onChange={this.handleContentChange.bind(this)} />
          </div>
        </div>
        <div className='comment-field-button'>
          <button
            onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
 
}
CommentInput.defaultProps={//设置父级传过来的默认值
    name:"邱在杰"
}

export default CommentInput;