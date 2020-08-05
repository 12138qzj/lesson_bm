import React ,{memo} from "react";

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


const setSatisfactionClass=level=>{
  console.log(level);
  if (level < 100) {
    return "very-dissatisfied"
  }
  if (level < 200) {
    return "somewhat-dissatisfied"
  }
  if (level < 300) {
    return "neither"
  }
  if (level < 400) {
    return "somewhat-satisfied"
  }
  return "very-satisfied"
}


//拿上一次的值  和本次值进行比较
const isSameRange=(prevValue,nextValue)=>{

  const prevValueClass=setSatisfactionClass(prevValue.level)
  const nextValueClass = setSatisfactionClass(
    nextValue.level);
  return prevValueClass === nextValueClass
}
export const FaceComponent=memo(props=>{
  const { level } = props;
  return (
    <div className={setSatisfactionClass(level)}></div>
  )
},isSameRange)