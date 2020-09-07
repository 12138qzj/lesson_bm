import React from 'react';
import logo from './logo.svg';
import './App.css';


let hooks=[];
let currentIndex=0;

// const useState=(function(){
//   let _state;
//   return function(initValue){
//     _state=_state||initValue;
//     function setState(newState){
//       _state=newState;
//       render();
//     }
//   }
// })


const useState=(function(){
  return function(initValue){
    if(!hooks[currentIndex])hooks[currentIndex]=[];
    let hookState=hooks[currentIndex];
    hooks[currentIndex][0]=hookState[0]||initValue;
    function setState(newState){
      hookState[0]=newState;
      App();
    }
    hookState[1]=setState;
    currentIndex++;
    return hookState;
  }
})()
function App() {
 const [time, setTime] = useState(3)
 const [count, setCount] = useState(0)

  return (
    <div className="App">
      dfghjhklk
      85632
     {time}
     {
       count
     }
     <button onClick={setCount(count+1)}> +</button>
     <button onClick={setCount(count-1)}> -</button>

    </div>
  );
}

export default App;
