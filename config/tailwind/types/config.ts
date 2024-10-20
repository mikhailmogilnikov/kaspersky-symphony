import { ThemeColors } from './colors';

export type DefaultThemeType = 'light' | 'dark';

export type ConfigTheme = {
  extend?: 'light' | 'dark';
  colors?: Partial<ThemeColors>;
};

export type ConfigThemes = Record<string, ConfigTheme>;

export type CorePluginConfig = {
  themes?: ConfigThemes;
  /**
   * The default theme to use.
   * @default "light"
   */
  defaultTheme?: DefaultThemeType;
};
