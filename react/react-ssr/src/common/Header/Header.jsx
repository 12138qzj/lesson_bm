import React , {useEffect }from 'react'
import router from '../../router';
import { Link} from 'react-router-dom'
import App from '../../pages/App.jsx'

import Home from '../../pages/Home.jsx'
import Login from '../../pages/Login.jsx'
import Detail from '../../pages/Detail.jsx'

export default function Header() {
    console.log("在服务器")
    const handleClick=()=>{
        console.log("123s");
    }
    useEffect(() => {
        console.log("456");

        return () => {
            console.log("组件已经卸载");
        }
    }, [])

    //在服务器端就已经 将这个组件渲染成真实的DOM结点
    return (
        <div>
            <button onClick={handleClick}> 
                按钮
            </button>
            <Link to="/">home</Link>
            <Link to="/login">login</Link>
            <Link to="/detail">detail</Link>
        </div>
    )
}
