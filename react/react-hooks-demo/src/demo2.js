import React ,{useState,useEffect,memo}from 'react';

// export const MyComponent= ()=>{

//     const [filter ,setFilter]=useState("");
//     const [userCollection ,setuserCollection]=useState([]);
//     useEffect(() => {
//         fetch(
//             ``
//         ).then(response=>response.json())
//         .then(json=>setuserCollection(json))
//     }, [filter])
//     return(
//         <div>
//             <input type="text"  value={filter} onChange={e=>setFilter(e.target.value)} name="" id=""/>
//             <ul>
//                 {userCollection.map((user,index)=>(
//                     <li key={index}>{user.name}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

export const MyComponent= ()=>{

    const [filter ,setFilter]=useState("");
    const [userInfo ,setuserInfo]=useState({
        name:' json',
        lastanme:'sfds'
    });
    setTimeout(() => {
        console.log("---------");
        // setuserInfo({
        //     name:' jsonw',
        //     lastanme:'sfds'
        // })
    }, 2000);

    return(
        <>
        <DisplayUsername name={userInfo.name}/>

        <input 
        type="text"
        value={userInfo.name}
        onChange={e=>setuserInfo({
            ...userInfo,
            name:e.target.value
        })}/>
        </>
    )
}


export const DisplayUsername=memo(props=>{
    console.log("只有name 发生改变的时候 才更新");
    return(
        <h3>
            {props.name}
        </h3>
    )
})



