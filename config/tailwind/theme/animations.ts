import type { Config } from "tailwindcss"

export const addAnimations = (): Config['theme'] => {
  return {
    keyframes: {
      'ios-spinner': {
        '0%': { opacity: '0.2' },
        '20%': { opacity: '1' },
        '100%': { opacity: '0' },
      },
    },
    animation: {
      'ios-spinner': 'ios-spinner 1.2s linear infinite',
    },
  };
};
