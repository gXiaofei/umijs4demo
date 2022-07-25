import { Settings as LayoutSettings } from '@ant-design/pro-components';

const Settings: LayoutSettings & {
    pwa?: boolean;
} = {
    // 拂晓蓝
    primaryColor: '#C50808',
    contentWidth: 'Fluid',
    fixedHeader: true,
    fixSiderbar: true,
    colorWeak: false,
    title: '投行承做助手',
    pwa: false,
    iconfontUrl: 'iconfont.js',
    headerHeight: 56,
    splitMenus: false,
};

export default Settings;
