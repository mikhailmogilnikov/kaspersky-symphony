export type ColorScale =
  | {
      50?: string;
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
      foreground?: string;
      DEFAULT: string;
    }
  | string;

export type BaseColors = {
  background: ColorScale;
  foreground: ColorScale;
  divider: ColorScale;
  overlay: ColorScale;
  focus: ColorScale;
  content: ColorScale;
};

export type ThemeColors = BaseColors & {
  default: ColorScale;
  invert: ColorScale;
  primary: ColorScale;
  secondary: ColorScale;
  tretiary: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  danger: ColorScale;
};

export type SemanticBaseColors = {
  light: BaseColors;
  dark: BaseColors;
};
