import { defineConfig } from '@umijs/max';
import defaultSettings from './defaultSettings';
import routes from './routes';
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
    hash: true,
    history: { type: 'hash' },
    publicPath: isProd ? './' : '/',
    outputPath: './release/app/dist/renderer',
    antd: {},
    access: {},
    model: {},
    initialState: {},
    request: {},
    layout: {
        // locale: true,
        ...defaultSettings,
    },
    // layout: false,
    routes,
    theme: {
        'font-family': `'Helvetica Neue', 'PingFang SC-Regular', 'Microsoft YaHei', Helvetica, Arial,
        'Hiragino Sans GB', sans-serif`,
        'border-color-base': '#737373',

        'primary-color': '#C50808',
        'primary-color-hover': '#ED6A66',
        'primary-color-active': '#A40A0A',

        'success-color': '#559EEF',
        'warning-color': '#FFA120',
        'error-color': '#FF1A1A',

        'link-color': '#559EEF',
        'link-hover-color': '#83C0FC',
        'ink-active-color': '#3E7BC9',

        'btn-disable-color': '#CCCCCC',
        'btn-disable-bg': '#F6F6F6',
        'btn-disable-border': '#CCCCCC',

        'text-color': '#333',
        'disabled-color': '#F7F7F7',
        'border-radius-base': '0px',
    },
    fastRefresh: true,
    npmClient: 'npm',
    mfsu: false,
});
