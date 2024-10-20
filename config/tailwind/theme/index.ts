import type { Config } from 'tailwindcss';

import { buildColors } from './colors/colors';
import { addAnimations } from './animations';
import { addAdditional } from './additional';

export const buildTheme = (): Config['theme'] => {
  return {
    extend: {
      colors: buildColors(),
      ...addAdditional(),
      ...addAnimations(),
    },
  };
};
