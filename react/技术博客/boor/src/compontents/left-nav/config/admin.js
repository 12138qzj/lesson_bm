const menuList = [{
        title: '首页', // 菜单标题名称 
        key: '/adminuser', // 对应的 path 
        icon: 'home', // 图标名称 
    },
    {
        title: '用户管理',
        key: '/user',
        icon: 'appstore',
        children: [ // 子菜单列表 
            {
                title: '用户信息',
                key: '/userinfo',
                icon: 'bars'
            },
            {
                title: '商品管理',
                key: '/product',
                icon: 'tool'
            },
        ]
    },
    {
        title: '车票信息',
        key: '/admincar',
        icon: 'user'
    },
    {
        title: '退票详情',
        key: '/role',
        icon: 'safety',
    }
]