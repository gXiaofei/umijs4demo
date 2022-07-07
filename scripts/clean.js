import process from 'process';
import rimraf from 'rimraf';
import webpackPaths from '../config/webpack.paths';

const args = process.argv.slice(2);
const commandMap: any = {
    dist: webpackPaths.distPath,
    release: webpackPaths.releasePath,
    dll: webpackPaths.dllPath,
    build: webpackPaths.buildPath,
};

args.forEach((x) => {
    const pathToRemove = commandMap[x];
    if (pathToRemove !== undefined) {
        rimraf.sync(pathToRemove);
    }
});
