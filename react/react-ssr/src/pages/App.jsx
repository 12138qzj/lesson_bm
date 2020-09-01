import React from 'react'
import Header from '../common/Header/Header.jsx'
// import { Route } from 'react-router-dom'
import { renderRoutes} from 'react-router-config'



export default function App(props) {
    console.log("props",props);
    return (
        <div>
            APP中  
            {
                renderRoutes(props.route.routes)
            }
        </div>
    )
}
