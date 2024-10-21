import type { Config } from 'tailwindcss';

import { DEFAULT_TRANSITION_DURATION } from '../utilities/transitions';

export const addAdditional = (): Config['theme'] => {
  return {
    transitionDuration: {
      0: '0ms',
      250: '250ms',
      400: '400ms',
      DEFAULT: DEFAULT_TRANSITION_DURATION,
    },
    scale: {
      97: '0.97',
    },
    transitionTimingFunction: {
      'soft-spring': 'cubic-bezier(0.155, 1.105, 0.295, 1.12)',
    },
  };
};
