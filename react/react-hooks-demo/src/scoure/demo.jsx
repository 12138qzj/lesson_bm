import React, { memo,useState,useEffect,useRef,useReducer } from "react";

// export const MyComponent = props => {
//   const [myName, setMyName] = React.useState('John Doe');

//   return (
//     <>
//       <h4>{myName}</h4>
//       <input
//         value={myName}
//         onChange={(e) => setMyName(e.target.value)}
//       />
//     </>
//   );
// };


// const setSatisfactionClass=level=>{
//   console.log(level);
//   if (level < 100) {
//     return "very-dissatisfied"
//   }
//   if (level < 200) {
//     return "somewhat-dissatisfied"
//   }
//   if (level < 300) {
//     return "neither"
//   }
//   if (level < 400) {
//     return "somewhat-satisfied"
//   }
//   return "very-satisfied"
// }


// //拿上一次的值  和本次值进行比较
// const isSameRange=(prevValue,nextValue)=>{

//   const prevValueClass=setSatisfactionClass(prevValue.level)
//   const nextValueClass = setSatisfactionClass(
//     nextValue.level);
//   return prevValueClass === nextValueClass
// }
// export const FaceComponent=memo(props=>{
//   const { level } = props;
//   return (
//     <div className={setSatisfactionClass(level)}></div>
//   )
// },isSameRange)


//  *******使用useRef来解决闭包问题******
// export const MyComponent=()=>{

//   const [message,setMessage]=useState("initial message");
//   const [seconds,setSeconds]=useState(0);
//   const secondsRef=useRef();

//   useEffect(() => {
//     setTimeout(()=>{
//       console.log(seconds);
//       setSeconds(1);
//       secondsRef.current=1;

//       // console.log(seconds);
//       // setMessage(`total seconds : ${seconds}`)

//     },1000)
//     setTimeout(()=>{
//       setMessage(`total seconds : ${secondsRef.current}`)
//     },2000)
//   }, [])
  
//   return(
//     <div>
//       <h3>{message}</h3>
//       <h4>{seconds}</h4>
//     </div>
//   )
// }


/**
 * 使用ref来判断 组件是否被卸载 ref.current执行DOM结点
 */
// export const MyComponent=()=>{

//   const [visible,setvisible]=useState(false);

//   return(
//     <>
//       {visible && <MyChildComponent />}
//       <button onClick={()=>{
//         setvisible(!visible)
//       }}> Toggle Child commponent visiblily:</button>
//     </>
//   )
// }


// export const MyChildComponent=()=>{

//   const [filter,setfilter]=useState("")
//   const [userCollection,setuserCollection]=useState([]);
//   const bool=useRef(false);
 
//   // bool.current=props.a;
//   useEffect(()=>{
//     bool.current=true;
  
//     return ()=>{
//       bool.current=false; 
//       console.log("xiezai ");
//     }

//   },[])

//   useEffect(()=>{
//     setTimeout(() => {
//       fetch(
//         `https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
//         .then(response => response.json())
//         .then(json => {
//           console.log(bool.current);
//           if(bool.current)
//           setuserCollection(json)
//         }
//          )
//     }, 2500)
//   },[filter])

//   return(
//     <div>
//       <input type="text" value={filter}
//       onChange={e=>setfilter(e.target.value)}
//       />
//       <ul>

//         {
//           userCollection.map((user,index)=>{
//               // <li key={index}>{user}</li>
//           })
//         }
//       </ul>

//     </div>
//   )
// }


/**
 * 
 */


export const MyComponent=()=>{

//   const [state, dispatch] = useReducer(userInfoReducer,/*初始化的state*/ {
//     name:"John",
//     lastname:"Doe"
//   });
const [state,setState]=useState()

  return(
    <>
    <h3>{state.name}{state.lastname}</h3>
    <EditUsername name={state.name} dispatch={dispatch}/>

      <input type="text" 
      value={state.lastname}
      onChange={(e)=>dispatch({
        type:"setlastname",
        paylaod:e.target.value
      })}
        />
      
     
    </>
  )
}

const EditUsername=React.memo(props=>{
  console.log("her I'm only");

  return (
    <>
      <input type="text"
      // key="2"
      value={props.name}
      onChange={(e)=>props.dispatch({
        type:"setusername",
        name:e.target.value
      })}
      />
    </>
  )
})
