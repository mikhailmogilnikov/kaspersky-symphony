/* eslint-disable @conarti/feature-sliced/absolute-relative */
import { VariantProps } from 'tailwind-variants';

import { tv } from '@/shared/lib/utils/ui/tv';

export const viewTv = tv({
  base: 'flex gap-base',
  variants: {
    items: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      baseline: 'items-baseline',
      stretch: 'items-stretch',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
      stretch: 'justify-stretch',
    },
    width: {
      min: 'w-min',
      fit: 'w-fit',
      full: 'w-full',
    },
    height: {
      min: 'h-min',
      fit: 'h-fit',
      full: 'h-full',
    },
    gap: {
      px: 'gap-px',
      sm: 'gap-sm',
      base: 'gap-base',
      lg: 'gap-lg',
      xl: 'gap-xl',
      '2xl': 'gap-2xl',
      '3xl': 'gap-3xl',
      '4xl': 'gap-4xl',
      '5xl': 'gap-5xl',
    },
    centered: {
      true: 'items-center justify-center',
    },
    vertical: {
      true: 'flex-col',
    },
  },
  defaultVariants: {
    vertical: false,
    width: 'full',
  },
});

export type ViewVariantProps = VariantProps<typeof viewTv>;
