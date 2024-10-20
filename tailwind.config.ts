import type { Config } from 'tailwindcss';

import { corePlugin, CorePluginConfig } from './config/tailwind';
import { appTheme } from './src/shared/config/theme';

const pluginOptions: CorePluginConfig = {
  themes: appTheme,
  defaultTheme: 'light',
};

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {},
  plugins: [corePlugin(pluginOptions)],
};

export default config;
