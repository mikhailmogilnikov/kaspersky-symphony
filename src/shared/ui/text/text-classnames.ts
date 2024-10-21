/* eslint-disable @conarti/feature-sliced/absolute-relative */
import { VariantProps } from 'tailwind-variants';

import { tv } from '@/shared/lib/utils/ui/tv';

export const textTv = tv({
  base: '',
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
    },
    weight: {
      1: 'font-thin',
      2: 'font-extralight',
      3: 'font-light',
      4: 'font-normal',
      5: 'font-medium',
      6: 'font-semibold',
      7: 'font-bold',
      8: 'font-extrabold',
      9: 'font-black',
    },
    color: {
      bg: 'text-background',
      fg: 'text-foreground',
      default: 'text-default',
      invert: 'text-invert',
      primary: 'text-primary',
      secondary: 'text-secondary',
      treriary: 'text-tretiary',
      success: 'text-success',
      warning: 'text-warning',
      danger: 'text-danger',
    },
    opacity: {
      0: 'opacity-0',
      1: 'opacity-10',
      2: 'opacity-20',
      3: 'opacity-30',
      4: 'opacity-40',
      5: 'opacity-50',
      6: 'opacity-60',
      7: 'opacity-70',
      8: 'opacity-80',
      9: 'opacity-90',
      10: 'opacity-100',
    },
  },
  defaultVariants: {
    size: 'base',
    color: 'fg',
  },
});

export type TextVariantProps = VariantProps<typeof textTv>;
