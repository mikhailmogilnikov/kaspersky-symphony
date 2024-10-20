import { ColorScale } from '../../types/colors';

export const buildColor = (name: string): ColorScale => {
  return {
    DEFAULT: `hsla(var(--color-${name}), <alpha-value>)`,
    foreground: `hsla(var(--color-${name}-foreground), <alpha-value>)`,
    '50': `hsla(var(--color-${name}-50), <alpha-value>)`,
    '100': `hsla(var(--color-${name}-100), <alpha-value>)`,
    '200': `hsla(var(--color-${name}-200), <alpha-value>)`,
    '300': `hsla(var(--color-${name}-300), <alpha-value>)`,
    '400': `hsla(var(--color-${name}-400), <alpha-value>)`,
    '500': `hsla(var(--color-${name}), <alpha-value>)`,
    '600': `hsla(var(--color-${name}-600), <alpha-value>)`,
    '700': `hsla(var(--color-${name}-700), <alpha-value>)`,
    '800': `hsla(var(--color-${name}-800), <alpha-value>)`,
    '900': `hsla(var(--color-${name}-900), <alpha-value>)`,
  };
};
