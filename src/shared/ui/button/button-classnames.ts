import { tv, VariantProps } from 'tailwind-variants';

export const buttonTv = tv({
  base: 'z-0 group inline-flex items-center justify-center relative box-border appearance-none outline-none select-none whitespace-nowrap min-w-max subpixel-antialiased overflow-hidden tap-highlight-transparent active:scale-97 active:shadow-none transition-transform-colors-opacity-shadow',
  variants: {
    color: {
      default: 'bg-default text-default-foreground',
      invert: 'bg-invert text-invert-foreground',
      primary: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
      tretiary: 'bg-tretiary text-tretiary-foreground',
      success: 'bg-success text-success-foreground',
      warning: 'bg-warning text-warning-foreground',
      danger: 'bg-danger text-danger-foreground',
    },
    size: {
      sm: 'px-3 min-w-16 h-8 text-sm gap-2 rounded-lg',
      md: 'px-4 min-w-20 h-10 text-md gap-2 rounded-xl',
      lg: 'px-6 min-w-24 h-12 text-lg gap-3 rounded-2xl',
    },
    fullWidth: {
      true: 'w-full',
    },
    isIconOnly: {
      true: 'px-0 !gap-0',
      false: '[&>svg]:max-w-[theme(spacing.8)]',
    },
    disableAnimation: {
      true: '!transition-none data-[pressed=true]:scale-100',
      false: 'transition-transform-colors-opacity motion-reduce:transition-none',
    },
    isDisabled: {
      true: 'opacity-50 active:scale-100',
    },
    isLoading: {
      true: 'opacity-50 active:scale-100',
    },
  },
  defaultVariants: {
    color: 'primary',
    width: 'fit',
    size: 'md',
    isIconOnly: false,
  },
});

export type ButtonVariantProps = VariantProps<typeof buttonTv>;
