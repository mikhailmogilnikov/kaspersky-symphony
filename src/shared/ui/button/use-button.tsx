/* eslint-disable @conarti/feature-sliced/absolute-relative */
import { Ref, useMemo } from 'react';

import { SpinnerProps } from '../spinner/spinner';

import { buttonTv, ButtonVariantProps } from './button-classnames';

import { HTMLUIProps } from '@/shared/model/types/ui';

export type UseButtonProps = HTMLUIProps<'div'> &
  ButtonVariantProps & {
    ref?: Ref<any> | null;
    spinnerProps?: SpinnerProps;
  };

export const useButton = (props: UseButtonProps) => {
  const {
    ref,
    as,
    children,
    fullWidth,
    color,
    size,
    isDisabled,
    isLoading,
    isIconOnly,
    disableAnimation,
    className,
    spinnerProps,
    ...otherProps
  } = props;

  const Component = as || 'button';

  const styles = useMemo(
    () =>
      buttonTv({
        fullWidth,
        color,
        size,
        disableAnimation,
        isDisabled,
        isLoading,
        isIconOnly,
        className,
      }),
    [fullWidth, color, isLoading, isDisabled, disableAnimation, isIconOnly, className],
  );

  return { Component, children, styles, ref, isDisabled, isLoading, spinnerProps, ...otherProps };
};
