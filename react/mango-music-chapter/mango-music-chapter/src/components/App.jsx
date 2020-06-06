import React ,{ Component}from 'react';
//Switch 实现路由单一页面显示
//NavLink 是 a 标签的组件化 
import { BrowserRouter as Router, Route,Switch,NavLink,Redirect} from 'react-router-dom';
import Recommend from '../recommend/Recommend';
import Ranking from '../ranking/Ranking';
import Search from '../search/Search';
import logo from '../assets/imgs/logo.png';
import './App.styl'; //webpack 在工作解析
class App extends Component{
    render(){
        return(
            <Router>
                
                <div className="app">
                    <header className="app-header">
                        <img src={logo} alt="logo" className="app-logo"/>
                    </header>
                    <h1 className="app-title">Mango Music</h1>
                    <div className="music-tab">
                        <div className="tab-item">
                            <NavLink className="nav-link" to="/"><span>推荐</span></NavLink>
                        </div>
                        <div className="tab-item">
                            <NavLink className="nav-link" to="/Ranking"><span>排行榜</span></NavLink>
                        </div>
                        <div className="tab-item">
                            <NavLink className="nav-link" to="/Search"><span>歌手</span></NavLink>
                        </div>
                    </div>
                        {/* <Route exact path="/" component={ Recommend}/> */}
                    <Switch>
                        <Route exact path="/" component={ Recommend}/>
                        <Route exact path="/Ranking" component={ Ranking}/>
                        <Route exact path="/Search" component={ Search}/>

                        {/* 默认显示界面 */}
                        {/* <Redirect from="/Ranking" to="/recommend"/> */}
                        {/* <Route exact path="/" component={ Recommend}/> */}
                    </Switch>   

                </div>
            </Router>
        )
    }
}
export default App;