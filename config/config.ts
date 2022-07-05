import {defineConfig} from '@umijs/max';
import routes from './routes';
import defaultSettings from './defaultSettings';
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
    hash: true,
    history: {type: 'hash'},
    publicPath: isProd ? './' : '/',
    antd: {},
    access: {},
    model: {},
    initialState: {},
    request: {},
    layout: {
        locale: true,
        siderWidth: 200,
        ...defaultSettings
    },
    routes,
    npmClient: 'pnpm',
})