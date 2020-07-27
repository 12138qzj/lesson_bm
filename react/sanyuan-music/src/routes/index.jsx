import React, { lazy, Suspense } from 'react';
//
import { Redirect } from 'react-router-dom';
import BlankLayout from '../layouts/BlankLayout';
import Recommend from '../application/Recommend/Recommend';
import Singers from '../application/Singers/Singers';
import Rank from '../application/Rank/Rank';


//  先将组件睡眠 不加载


import HomeLayout from '../layouts/HomeLayout';
// import Sign from '../application/Sign';
// const RecommendComponent=lazy(()=>import("../application/Recommend/Recommend"))



// 将组件
const SuspenseComponent = Component => props => {

    return ( 
        <Suspense fallback = { null } >
        <Component {...props } >
        </Component>
        </Suspense>
    )
}

export default [{
    component: BlankLayout,
    routes: [{
            path: '/',
            component: HomeLayout,
            routes: [{
                    path: '/',
                    exact: true,
                    render: () => < Redirect to = { "/recommend" }
                    />
                },
                {
                    path: '/recommend',
                    component: Recommend,
                },
                {
                    path: '/singers',
                    component: Singers,
                },
                {
                    path: '/rank',
                    component: Rank,
                },
            ]
        }

    ]


}]






// [{
//     component: BlankLayout,
//     routes: [{
//             path: '/',
//             exact: true,
//             render: () => < Redirect to = { "/recommend" }
//             />
//         },
//         {
//             path: '/recommend',
//             component: Recommend,
//             // routes:[
//             //         {
//             //             path:'/recommend/:id',
//             //             component:AlbumComponent
//             //         }
//             //     ]
//         },
//         {
//             path: '/sign',
//             component: Sign,
//             // routes:[
//             //         {
//             //             path:'/recommend/:id',
//             //             component:AlbumComponent
//             //         }
//             //     ]
//         }
//     ]
// }]