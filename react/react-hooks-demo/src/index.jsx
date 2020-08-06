import React ,{useRef,useState} from "react";
import ReactDOM from "react-dom";
// import { FaceComponent,MyComponent } from "./demo";

import MyComponent from './scoure/demo'
// import { MyComponent } from "./demo2";

import "./styles.css";

function App() {

  const [satisfactionLevel, setSatisfactionLevel] = useState(300);
  const setSatisfactionClass=(level)=>{
    setSatisfactionLevel(level)
  }
  return (
    <div className="App">
      <MyComponent />
      {/* <input 
      type="range" 
      min="0" 
      max="500" 
      value={satisfactionLevel}
      onChange={(event)=>setSatisfactionClass(+event.target.value)}
      />
      <br/>
      <span>{satisfactionLevel}</span>
      <FaceComponent level={satisfactionLevel}/> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
