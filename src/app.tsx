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

export async function getInitialState(): Promise<{
    settings?: Partial<LayoutSettings>;
    currentUser?: API.CurrentUser;
    loading?: boolean;
    fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
    const fetchUserInfo = async () => {
        try {
            const msg = await queryCurrentUser();
            return msg.data;
        } catch (error) {
            history.push(loginPath);
        }
        return undefined;
    };
    // 如果不是登录页面，执行
    if (history.location.pathname !== loginPath) {
        const currentUser = await fetchUserInfo();
        return {
            fetchUserInfo,
            currentUser,
            settings: defaultSettings,
        };
    }
    return {
        fetchUserInfo,
        settings: defaultSettings,
    };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
    return {
        logo: logo,
        layout: 'mix',
        siderWidth: 200,
        links: [
            <Link key="setting" to="/setting" style={settingStyle}>
                <IconFont style={{ fontSize: '16px' }} type="icon-chuanshuliebiao" />
                <span>传输列表</span>
            </Link>,
            <Link key="setting" to="/setting" style={settingStyle}>
                <SettingOutlined />
                <span>系统设置</span>
            </Link>,
        ],
        logout: () => {
            history.push('/login');
            message.success('退出登录成功');
        },
        menuFooterRender: () => {
            return <div>123</div>;
        },
        iconfontUrl: require('@/assets/iconfont.js'),
        ...initialState?.settings,
    };
};
