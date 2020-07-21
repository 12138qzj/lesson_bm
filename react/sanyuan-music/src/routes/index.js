import React from 'react';
import { Redirect } from 'react-router-dom';
import BlankLayout from '../layouts/BlankLayout';
import Recommend from '../application/Recommend/Recommend';
import Sign from '../application/Sign';

export default [{
    component: BlankLayout,
    routes: [{
            path: '/',
            exact: true,
            render: () => < Redirect to = { "/recommend" }
            />
        },
        {
            path: '/recommend',
            component: Recommend,
            // routes:[
            //         {
            //             path:'/recommend/:id',
            //             component:AlbumComponent
            //         }
            //     ]
        },
        {
            path: '/sign',
            component: Sign,
            // routes:[
            //         {
            //             path:'/recommend/:id',
            //             component:AlbumComponent
            //         }
            //     ]
        }
    ]
}]