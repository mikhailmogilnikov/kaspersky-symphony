import { ModuleOptions } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { buildBabelLoader } from './babel/buildBabelLoader';
import { BuildOptions } from './types/build.types';

export const buildLoaders = (options: BuildOptions): ModuleOptions['rules'] => {
  const isDev = options.mode === 'development';

  const cssLoader = {
    test: /\.css$/i,
    use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
  };

  const babelLoader = buildBabelLoader();

  // Для поддержки ассетов
  const assetsLoader = {
    test: /\.(jpe?g|png|gif|webp|woff|woff2|eot|ttf)$/i,
    type: 'asset/resource',
    generator: {
      filename: (pathData: any) => {
        if (/\.(woff|woff2|eot|ttf)$/i.test(pathData.filename)) {
          return 'fonts/[name][ext]';
        }

        return 'assets/[name][ext]';
      },
    },
  };

  // Для преобразования svg в React-компоненты
  const svgrLoader = {
    test: /\.svg$/i,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          svgoConfig: {
            plugins: [{ name: 'convertColors', params: { currentColor: true } }],
          },
        },
      },
    ],
  };

  // Возвращаем все правила
  return [cssLoader, assetsLoader, babelLoader, svgrLoader];
};
