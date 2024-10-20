import { DEFAULT_TRANSITION_DURATION } from '../utilities/transitions';

export const addAdditional = () => {
  return {
    transitionDuration: {
      0: '0ms',
      250: '250ms',
      400: '400ms',
      DEFAULT: DEFAULT_TRANSITION_DURATION,
    },
    transitionTimingFunction: {
      'soft-spring': 'cubic-bezier(0.155, 1.105, 0.295, 1.12)',
    },
  };
};
