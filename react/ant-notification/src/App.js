import React from 'react';
import notification from './Notification';
import App2 from './App2';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <App2>

      </App2> */}
      <button onClick={()=>{
        notification.open(
          {
            title:"this is a title open"
          }
        )
      }
        
      }>open</button>
     
     <button onClick={()=>{
        notification.close(
          // {
          //   title:"this is a title close"
          // }
        )
      }
        
      }>close</button>
    </div>
  );
}

export default App;
