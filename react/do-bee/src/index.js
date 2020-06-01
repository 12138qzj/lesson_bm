import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Single from './components/Single';
import {BrowserRouter ,Route} from 'react-router-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const Root =function(){
  return(
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Main}/>
        <Route path="/search/:searchTerm" component={Main} />
        <Route path="/beer/:beerId/:beerSlug" component={Single}/>

      
      </div>
    </BrowserRouter>
  )
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
ReactDOM.render(<Root/>, document.getElementById('root'));
