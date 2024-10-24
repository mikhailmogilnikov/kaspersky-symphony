import { CorePluginConfig } from 'config/tailwind';

export const appTheme: CorePluginConfig['themes'] = {
  light: {
    colors: {
      background: 'hsl(228, 4%, 7%)',
      foreground: 'hsl(0, 0%, 100%)',
      primary: { DEFAULT: 'hsl(169, 54%, 37%)', foreground: 'hsl(0, 0%, 100%)' },
      secondary: 'hsl(256, 37%, 20%)',
      tretiary: 'hsl(230, 43%, 17%)',
      success: 'hsl(141, 41%, 53%)',
      warning: 'hsl(54, 88%, 48%)',
      danger: 'hsl(23, 77%, 56%)',
      default: 'hsl(210, 24%, 19%)',
    },
  },
};
