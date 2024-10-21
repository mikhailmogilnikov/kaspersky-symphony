import type { Config } from 'tailwindcss';

import { buildColors } from './colors/colors';
import { addAnimations } from './animations';
import { addAdditional } from './additional';
import { addLayout } from './layout';

export const buildTheme = (): Config['theme'] => {
  return {
    extend: {
      colors: buildColors(),
      ...addLayout(),
      ...addAdditional(),
      ...addAnimations(),
    },
  };
};
