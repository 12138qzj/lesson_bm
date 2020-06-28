export const menuList = [{
        title: '首页', // 菜单标题名称 
        key: '/Admin/adminhome', // 对应的 path 
        icon: '0', // 图标名称 
    },
    {
        title: '用户管理',
        key: '/Admin/user',
        icon: '1',
        children: [ // 子菜单列表 
            {
                title: '用户信息',
                key: '/Admin/adminuser',
                icon: "<UserOutlined />"
            },
        ]
    },
    {
        title: '车票管理',
        key: '/Admin/car',
        icon: '2',
        children: [ // 子菜单列表 
            {
                title: '车票信息',
                key: '/Admin/admincar',
                icon: '<UserOutlined />'
            },
            {
                title: '退票详情',
                key: '/Admin/exitcarinfo',
                icon: '<UserOutlined />',
            },
        ]
    },

]
export const usermenuList = [{
        title: '首页', // 菜单标题名称 
        key: '/user/userhome', // 对应的 path 
        icon: '0', // 图标名称 
    },
    {
        title: '我的订单',
        key: '/user',
        icon: '1',
        children: [ // 子菜单列表 
            {
                title: '待出行订单',
                key: '/user/ordeing',
                icon: "<UserOutlined />"
            },
            {
                title: '全部订单',
                key: '/user/Allorder',
                icon: '<UserOutlined />'
            },
        ]
    },
    {
        title: '信息查询',
        key: '/user/info',
        icon: '2',
        children: [ // 子菜单列表 
            {
                title: '车票信息',
                key: '/user/searchinfo',
                icon: '<UserOutlined />'
            },

        ]
    },

]