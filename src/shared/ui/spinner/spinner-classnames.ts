/* eslint-disable @conarti/feature-sliced/absolute-relative */
import { VariantProps } from 'tailwind-variants';

import { tv } from '@/shared/lib/utils/ui/tv';

export const spinnerTv = tv({
  slots: {
    base: 'relative',
    item: 'w-[10%] h-[30%] absolute top-[38%] left-[48%] rounded-full animate-ios-spinner',
  },
  variants: {
    size: {
      xs: {
        base: 'w-5 h-5',
      },
      sm: {
        base: 'w-6 h-6',
      },
      md: {
        base: 'w-7 h-7',
      },
      lg: {
        base: 'w-8 h-8',
      },
      xl: {
        base: 'w-10 h-10',
      },
      '2xl': {
        base: 'w-12 h-12',
      },
    },
    color: {
      default: {
        item: 'bg-foreground',
      },
      primary: {
        item: 'bg-primary',
      },
      secondary: {
        item: 'bg-secondary',
      },
      success: {
        item: 'bg-success',
      },
      warning: {
        item: 'bg-warning',
      },
      danger: {
        item: 'bg-danger',
      },
    },
    center: {
      true: 'self-center',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'default',
  },
});

export type SpinnerVariantProps = VariantProps<typeof spinnerTv>;
