export default [
    {
        name: '登录',
        path: '/login',
        component: './Login',
        headerRender: false,
        footerRender: false,
        menuRender: false,
        menuHeaderRender: false,
        // 隐藏自己和子菜单
        hideInMenu: true,
        // 在面包屑中隐藏
        hideInBreadcrumb: true,
    },
    {
        name: '设置',
        path: '/setting',
        component: './Setting',
        // 隐藏自己和子菜单
        hideInMenu: true,
        // 在面包屑中隐藏
        hideInBreadcrumb: true,
    },
    {
        name: '首页',
        path: '/home',
        component: './Home',
        icon: 'HomeOutlined',
    },
    {
        name: '个人网盘',
        path: 'userNetDisk',
        component: './UserNetDisk',
        icon: 'CloudOutlined',
    },
    {
        name: '项目尽调',
        path: '/projectDueDiligence',
        icon: 'ProjectOutlined',
        routes: [
            {
                path: '/projectDueDiligence/historicalEvolution',
                name: '历史沿革',
                icon: 'FileTextOutlined',
                component: './HistoricalEvolution',
            },
            {
                redirect: './projectDueDiligence/historicalEvolution',
            },
        ],
    },
    {
        name: '权限演示',
        path: '/access',
        component: './Access',
    },
    {
        name: ' CRUD 示例',
        path: '/table',
        component: './Table',
    },
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '*',
        component: './404',
    },
];
