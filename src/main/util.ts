import path from 'path';
import { URL } from 'url';

export let resolveHtmlPath: () => string;

if (process.env.NODE_ENV === 'development') {
    const port = process.env.PORT || 8889;
    resolveHtmlPath = () => {
        const url = new URL(`http://localhost:${port}`);
        return url.href;
    };
} else {
    resolveHtmlPath = () => {
        return `file://${path.resolve(__dirname, '../renderer/index.html')}`;
    };
}
