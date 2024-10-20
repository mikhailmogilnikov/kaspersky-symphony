import path from 'path';

import webpack from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildMode, BuildPaths } from 'config/build';

import { buildWebpack } from './config/build/buildWebpack';

interface EnvVariables {
  mode?: BuildMode;
  port?: number;
  bundleAnalyze?: boolean;
}

export default (env: EnvVariables) => {
  const { mode, port, bundleAnalyze } = env;

  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src/app', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public'),
  };

  const config: webpack.Configuration | DevServerConfiguration = buildWebpack({
    port: port ?? 3000,
    mode: mode ?? 'production',
    paths,
    bundleAnalyze,
  });

  return config;
};
