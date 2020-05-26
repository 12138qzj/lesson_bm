import React from 'react'
import {HashRouter as Router, Route, Link,Switch,useRouteMatch} from 'react-router-dom';
// import Chart from './Chart';
// import List from './List';
import HomeHeader from './HomeHeader';



class index extends React.Component{
    render(){
       // let {path,url}=useRouteMatch();
       // console.log(path,url)
        return(
        <div>  {/*这个为react组件  React.Fragment*/}
            {/* //头部 */}
            {/* //页面跳转也用router跳转  route的嵌套 */}

            <HomeHeader/>
           
            <Link to='/List'>列表模式</Link>
            <Link to='/Chart'>图表模式</Link>
            
            {this.props.children}
            {/* <BrowserRouter> */}
            {/* <Router> */}
                <Switch>
                {/* 在主界面过来的 路径也是根路径  所以要设置根路径*/ }
                    {/* <Link to={`${url}/List`}>列表模式</Link>
                    <Link to={`${url}/Chart`}>图表模式</Link> */}
               
                    {/* <Route path='/' component={List}/> */}
                    {/* <Route exact path={`${path}/List`} component={List}/>
                    <Route exact path={`${path}/Chart`} component={Chart}/> */}
                    {/* <Route exact path='/List' component={List}/>
                    <Route exact path='/Chart' component={Chart}/> */}
                {/* </BrowserRouter> */}
                </Switch>
            {/* </Router> */}
     
        </div>
        )
    }
}
export default index;