import { ThemeColors } from '../../types/colors';

import { buildColor } from './build-color';

export const buildColors = (): ThemeColors => {
  return {
    background: buildColor('background'),
    foreground: buildColor('foreground'),
    divider: buildColor('divider'),
    overlay: buildColor('overlay'),
    focus: buildColor('focus'),
    content: buildColor('content'),

    default: buildColor('default'),
    invert: buildColor('invert'),
    primary: buildColor('primary'),
    secondary: buildColor('secondary'),
    tretiary: buildColor('tretiary'),
    success: buildColor('success'),
    warning: buildColor('warning'),
    danger: buildColor('danger'),
  };
};
