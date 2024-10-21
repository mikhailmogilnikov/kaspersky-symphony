import type { Config } from 'tailwindcss';

export const addLayout = (): Config['theme'] => {
  return {
    gap: {
      sm: '0.25rem',
      base: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '2.5rem',
      '3xl': '3rem',
      '4xl': '3.5rem',
      '5xl': '4rem',
    },
    // borderRadius: {
    //   xxs: '0.125rem',
    //   xs: '0.25rem',
    //   sm: '0.5rem',
    //   base: '1rem',
    //   lg: '1.5rem',
    //   xl: '2rem',
    //   '2xl': '2.5rem',
    //   '3xl': '3rem',
    //   '4xl': '3.5rem',
    //   '5xl': '4rem',
    // },
  };
};
