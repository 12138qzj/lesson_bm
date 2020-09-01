import App from './pages/App.jsx'

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Detail from './pages/Detail.jsx'

export default [{
    path: '/',
    exact: true,
    component: App,
    routes: [{
            path: '/',
            // exact: true,
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/detail',
            component: Detail
        }
    ]

}]