import React ,{ useContext}from 'react'
import { context} from './BrowserRouter';

export default function Link(props) {
    const {updata,pathname}=useContext(context)
    const {to,children}=props;
    function callback(){
        window.history.pushState(null,null,to)
        updata({pathname:to})
    }
    return (
        <div onClick={callback}>
            {children}
        </div>
    )
}
