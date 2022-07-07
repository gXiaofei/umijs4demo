import { defineConfig } from '@umijs/max';
import defaultSettings from './defaultSettings';
import routes from './routes';
import themes from './themes';
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
    theme: themes,
    fastRefresh: true,
    npmClient: 'npm',
    mfsu: false,
});
