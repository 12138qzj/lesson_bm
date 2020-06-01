import React from "react";
import Results from './Results';
// StatefullComponent  StatelessComponent


class Main extends React.Component {
  constructor(){
    super();
    this.state={
      beers:[],
      loading:true
    }
  }
  componentWillMount(){//在组件渲染之后执行

    //params路由中参数的部分
    console.log(this.props.match.params)
    let params=this.props.match.params || {};
    const searchTerm=params.searchTerm
    this.loadBeers(searchTerm);
  }
  loadBeers(searchTerm="hops"){
    //数据请求
    fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
    .then(data=>data.json())
    .then(data=>{
      if(data){

        this.setState({
          beers:data.data,
          loading:false
        })
        console.log(data.data);
      }
      // this.setState()=   
      
      
     
    })
  }
  render() {
    
    return (
      <div>
        
      <Results beers={this.state.beers} loading={this.state.loading} />
      </div>
    )
  }
}


export default Main