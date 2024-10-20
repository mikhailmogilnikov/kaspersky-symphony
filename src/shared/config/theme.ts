import { CorePluginConfig } from 'config/tailwind';

export const appTheme: CorePluginConfig['themes'] = {
  light: {
    colors: {
      background: 'hsl(0, 0%, 5%)',
      foreground: 'hsl(0, 0%, 95%)',
      primary: { DEFAULT: 'hsl(0, 100%, 50%)' },
    },
  },
};
