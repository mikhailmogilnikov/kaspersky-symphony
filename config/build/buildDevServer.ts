import { Configuration } from 'webpack-dev-server';

import { BuildOptions } from './types/build.types';

export const buildDevServer = (options: BuildOptions): Configuration => ({
  // На каком порту открывается localhost
  port: options.port,
  open: true,

  // Чтобы обрабатывались другие роуты кроме '/' в React
  // * Если раздавать статику в NGINX, необходимо настроить проксирование на index.html
  historyApiFallback: true,

  // Изменения в дев-режиме без перезагрузки страницы (Hot-Module Replacement) /HMR/
  // * Не работает в React без доп. плагинов
  hot: true,
});
