import React from 'react';
import axios from 'axios'
import './App.css';


//列表：/？tab=all
//mvvm:mv-vm: view model
class App extends React.Component{
  constructor(){
    super();
    this.state={
      tabs: [
        {content: '全部', param: 'all'},
        {content: '招聘', param: 'job'},
        {content: '精华', param: 'good'},
        {content: '分享', param: 'share'},
        {content: '问答', param: 'ask'},
      ],
      tab:'all',
      lists:[],
      isloading:false
    }
  }
  //生命周期
  // APP :被reactDom 渲染到pc端
  //渲染：一套流程（生命周期）
 
  handleGetPost(){
    let {tab}=this.state;
    axios({
      url:' https://cnodejs.org/api/v1/topics',
      params:{
        tab:tab,
        page:1,
        limit:40
      }

    }).then(res=>{
      console.log(res.data);
      //修改this.state数据
      this.setState({
        lists:res.data.data,
        isloading:false
      })
      
    })

  }
  componentDidMount(){
    this.handleGetPost();
  }
  handleTabChange=(event)=>{
    const tab=event.target.getAttribute('data-tab')
    this.setState({
      isloading:true
    })
    console.log(tab)
    this.setState({
      tab:tab
    },()=>{
      this.handleGetPost();
    })
  }
  render(){
    
    let {lists,tabs,tab,isloading}=this.state
    
//       短路与&&
// 左侧true时执行右侧，右侧true则true，右侧false则false
// 左侧false则false，不再执行右侧，即短路
// 短路或||
// 左侧false时执行右侧，右侧true则true，右侧false则false
// 左侧ture则ture，不再执行右侧，即短路
    return(
      <div>
        {isloading && '正在加载.....'}
        { lists.length==0 && '数据未请求到！'  }

        {
          tabs.map((tabObj,i)=>{
            return(
              <div key={i} data-tab={tabObj.param} className={tabObj.param === tab ? 'hight-light' : ''}
              onClick={this.handleTabChange}>
                { tabObj.content }
              </div>
            )
          })}
    
         {   lists.map((list,i)=>{
              return (
                <div key={i} >
                  {list.title}
                </div>
              )
            })
        }
      </div> 
    );
      
    
  }
}

export default App;
