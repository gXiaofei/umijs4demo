// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
import logo from '@/assets/icon.png';
import IconFont from '@/components/IconFont';
import { SettingOutlined } from '@ant-design/icons';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';
import { history, Link } from '@umijs/max';
import { message } from 'antd';
import defaultSettings from '../config/defaultSettings';
import { currentUser as queryCurrentUser } from './services/ant-design-pro/api';
const settingStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};
// const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/login';
let afterRoute = '';

type themeType = 'dark' | 'light';

export async function getInitialState(): Promise<{
    settings?: Partial<LayoutSettings>;
    currentUser?: API.CurrentUser;
    loading?: boolean;
    nativeTheme?: themeType;
    fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
    const fetchUserInfo = async () => {
        try {
            const msg = await queryCurrentUser();
            return msg.data;
        } catch (error) {
            // history.push(loginPath);
        }
        return undefined;
    };

    const nativeTheme = await window.electron.ipcRenderer.invoke('getStore', ['currentDarkMode']);

    // 如果不是登录页面，执行
    if (history.location.pathname !== loginPath) {
        const currentUser = await fetchUserInfo();
        return {
            fetchUserInfo,
            currentUser,
            nativeTheme,
            settings: defaultSettings,
        };
    }
    return {
        fetchUserInfo,
        nativeTheme,
        settings: defaultSettings,
    };
}
let unsubscribeStore: any = null;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
    console.log('app layout', initialState);

    if (typeof unsubscribeStore === 'function') unsubscribeStore();

    unsubscribeStore = window.electron.ipcRenderer.on('nativeThemeChange', (nativeTheme) => {
        console.log(123123, nativeTheme);
        const theme = nativeTheme as any;
        setInitialState({ ...initialState, nativeTheme: theme });
    });

    return {
        logo: logo,
        layout: 'mix',
        siderWidth: 200,
        links: [
            <Link key="setting" to="/setting">
                <IconFont style={{ fontSize: '16px' }} type="icon-chuanshuliebiao" />
                <span>传输列表</span>
            </Link>,
            <Link key="setting" to="/setting">
                <SettingOutlined />
                <span>系统设置</span>
            </Link>,
        ],
        logout: () => {
            history.push('/login');
            message.success('退出登录成功');
        },
        iconfontUrl: require('@/assets/iconfont.js'),
        ...initialState?.settings,
    };
};

export function onRouteChange({ location, clientRoutes, routes, action }) {
    console.log(111, location);
    console.log(222, clientRoutes);
    console.log(333, routes);
    console.log(444, action);
    console.log(555, afterRoute);

    const { pathname } = location;
    if (pathname === '/login') {
        window.electron.ipcRenderer.sendMessage('login', [true]);
    } else {
        if (afterRoute === '/login') {
            window.electron.ipcRenderer.sendMessage('login', [false]);
        }
    }
    afterRoute = pathname;
}
