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
                component: './HistoricalEvolution',
            },
            {
                path: '/projectDueDiligence/historicalEvolution2',
                name: '财务分析',
                component: './HistoricalEvolution',
            },
            {
                path: '/projectDueDiligence/historicalEvolution3',
                name: '函证',
                component: './HistoricalEvolution',
            },
            {
                path: '/projectDueDiligence/historicalEvolution4',
                name: '银行流水',
                component: './HistoricalEvolution',
            },
            {
                path: '/projectDueDiligence/historicalEvolution5',
                name: '处罚及诉讼',
                component: './HistoricalEvolution',
            },
            {
                path: '/projectDueDiligence/historicalEvolution6',
                name: '关联方核查',
                component: './HistoricalEvolution',
            },
            {
                path: '/projectDueDiligence/historicalEvolution7',
                name: '销售及采购',
                component: './HistoricalEvolution',
            },
            {
                path: '/projectDueDiligence/historicalEvolution8',
                name: '走访核查',
                component: './HistoricalEvolution',
            },
            {
                path: '/projectDueDiligence/historicalEvolution9',
                name: '收入结构及成本',
                component: './HistoricalEvolution',
            },
            {
                path: '/projectDueDiligence/historicalEvolution10',
                name: '采购、存活及生产成本核查',
                component: './HistoricalEvolution',
            },
            {
                path: '/projectDueDiligence/historicalEvolution11',
                name: '社保及五险一金',
                component: './HistoricalEvolution',
            },
        ],
    },
    {
        name: '项目文档',
        path: '/access',
        component: './Access',
        icon: 'CloudOutlined',
    },
    {
        name: '项目底稿',
        path: '/table',
        component: './HistoricalEvolution',
        icon: 'CloudOutlined',
    },
    {
        name: '知识库',
        path: '/table2',
        component: './HistoricalEvolution',
        icon: 'CloudOutlined',
    },
    {
        name: '尽调工具箱',
        path: '/table3',
        component: './HistoricalEvolution',
        icon: 'CloudOutlined',
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
