import type { Config } from 'tailwind-merge';
const DEFAULT_SIZES = ['sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'];

export const twMergeConfig: Partial<Config<string, string>> = {
  theme: {
    gap: DEFAULT_SIZES,
  },
  classGroups: {},
};
