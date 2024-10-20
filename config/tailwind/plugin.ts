import plugin from 'tailwindcss/plugin.js';

import { buildTheme } from './theme';
import { utilities } from './utilities';
import { baseStyles } from './base';
import { CorePluginConfig } from './types/config';
import { generateColorVariables } from './generate-variables';

export const corePlugin = (options: CorePluginConfig): ReturnType<typeof plugin> => {
  return plugin(
    ({ addBase, addUtilities }) => {
      addBase({
        [':root, [data-theme]']: {
          ...baseStyles(),
        },
      });
      addUtilities({ ...generateColorVariables(options), ...utilities });
    },
    {
      theme: buildTheme(),
    },
  );
};
