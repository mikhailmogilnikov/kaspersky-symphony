import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import { Configuration } from 'webpack';

export const buildOptimization = (): Configuration['optimization'] => {
  return {
    minimizer: [
      `...`, // Расширяет стандартные минификаторы Webpack
      new CssMinimizerPlugin(),
    ],
  };
};
