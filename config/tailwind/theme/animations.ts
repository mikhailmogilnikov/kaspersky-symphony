import type { Config } from 'tailwindcss';

export const addAnimations = (): Config['theme'] => {
  return {
    keyframes: {
      'ios-spinner': {
        '0%': { opacity: '0.2' },
        '20%': { opacity: '1' },
        '100%': { opacity: '0' },
      },
      scale: {
        '0%': { transform: 'scale(0)' },
        '100%': { transform: 'scale(1)' },
      },
    },
    animation: {
      'ios-spinner': 'ios-spinner 1.2s linear infinite',
      scale: 'scale 0.5s linear',
    },
  };
};
