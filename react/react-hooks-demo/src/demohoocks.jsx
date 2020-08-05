import React, { useState,useEffect } from 'react';

export const MyComponent = props => {
    // const [myName, setMyName] = useState("John Doe")
    // return ( 
    //     <>
    //     <h4> { myName } </h4> 
    //     <input type="text" value={myName} name="" id="" onChange={(e)=>{
    //     //    console.log(e.target.value)
    //        setMyName(e.target.value)
    //     }}/>
    //     </>
    // )


    /**/
    // const [userInfo, setuserInfo] = useState({
    //     name: "John",
    //     lastname: 'Doe'
    // })
    // return (
    //     <>
    //         <h4>{userInfo.name}{userInfo.lastname}</h4>
    //         <input type="text" name="" id=""
    //             value={userInfo.name}
    //             onChange={
    //                 (e) => {
    //                     setuserInfo({ ...userInfo, name: e.target.value })
    //                 }
    //             }
    //         />

    //         <input type="text" name="" id=""
    //             value={userInfo.lastname}
    //             onChange={
    //                 (e) => {
    //                     setuserInfo({ ...userInfo, lastname: e.target.value })
    //                 }
    //             }
    //         />
           
    //     </>
    // )


    /**/
    // const [username, setusername] = useState("")
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setusername("值改变")
    //     },2000)
    // },[])
    // return ( 
    //     <>
    //     <h4> { username } </h4> 
    //     <input 
    //     type="text" 
    //     value={username} 
    //     name="" 
    //     id="" 
    //     onChange={(e)=>{
    //     //    console.log(e.target.value)
    //     setusername(e.target.value)
    //     }}/>
    //     </>
    // )

    const [visible, setvisible] = useState(false)
   
    return ( 
        <>
        {visible && <MyChildComponent/>}
        <button onClick={()=>{
            setvisible(!visible)
        }}>
            toggle child component 
        </button>
        </>
    )
}
const MyChildComponent=()=>{
    const [userInfo, setuserInfo] = useState({
        name: "John",
        lastname: 'Doe'
    })

    useEffect(()=>{
        //componentWillUnMount
        console.log("called when the component is mouned");
        return ()=>{
            console.log("called on  component unmounted");
        }
    },[])
    return (
        <>
            <h4>{userInfo.name}{userInfo.lastname}</h4>
            <input type="text" name="" id=""
                value={userInfo.name}
                onChange={
                    (e) => {
                        setuserInfo({ ...userInfo, name: e.target.value })
                    }
                }
            />

            <input type="text" name="" id=""
                value={userInfo.lastname}
                onChange={
                    (e) => {
                        setuserInfo({ ...userInfo, lastname: e.target.value })
                    }
                }
            />
           
        </>
    )
}