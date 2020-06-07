import React ,{ Component}from 'react';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import { Button, message } from 'antd';

import Login from './pages/login/login';
import Admin from './pages/admin/admin';


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
                    </Switch>
                </Router>
       
            
        );
    }

}

export default App;