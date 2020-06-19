import React ,{ Component}from 'react';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
// import { Button, message } from 'antd';

import Login from './pages/login/login';
import Admin from './pages/admin/admin';
import User from './pages/user/User';
import Register from './pages/register/Register';
// import Mianbg from './compontents/mianbg/Mianbg';


class App extends Component {
    // handleClick=()=>{
    //     message.success('成功啦。。。')
    // }
    render() {
        return (      
                <Router>
                      
                    <Switch>
                        <Route path='/login' component={Login}/>
                        <Route path='/Admin' component={Admin}/>
                        <Route path='/User' component={User}/>
                        <Route path='/Register' component={Register}/>
                        {/* <Route path='/Register' component={Mianbg}/> */}
                    </Switch>
                </Router>
       
            
        );
    }

}

export default App;