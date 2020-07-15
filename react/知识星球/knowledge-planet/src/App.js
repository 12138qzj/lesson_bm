import React,{ Component } from 'react';
// import {Route, Switch,Link} from 'react-router-dom';
import { BrowserRouter,Redirect ,Route,Switch} from 'react-router-dom';
import Components from './components/main/index';
import Tail from './components/tail/Tail';
import AddPlanet from './components/addplanet/AddPlanet';
// import Center from './components/center/Center';
// import Bottom from './components/bottom/Bottom';
// import logo from './logo.svg';
import './App.css';



class  App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="App">
      {/* <Router> */}
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Components}/>
          <Route  path='/AddPlanet' component={AddPlanet}/>
          <Route  path='/tail' component={Tail}/>
        </Switch>
      </BrowserRouter>
      {/* <Route exact path='/' component={Components}/> */}
        {/* <Switch>
          

        </Switch> */}
      {/* </Router> */}

    </div>
     );
  }
}
 
export default App ;

// function App() {
//   return (
    
//   );
// }

// export default App;
