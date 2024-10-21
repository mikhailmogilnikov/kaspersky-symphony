/* eslint-disable @conarti/feature-sliced/absolute-relative */

import { ReactNode, Ref, useMemo } from 'react';

import { textTv, TextVariantProps } from './text-classnames';

import { HTMLUIProps } from '@/shared/model/types/ui';

export type UseTextProps = {
  children?: ReactNode;
  heading?: 1 | 2 | 3 | 4 | 5 | 6;
  ref?: Ref<HTMLParagraphElement | HTMLHeadingElement> | null;
} & HTMLUIProps<'p'> &
  TextVariantProps;

export function useText(props: UseTextProps) {
  const { ref, heading, children, size, weight, color, opacity, className, ...otherProps } = props;

  const Component: keyof JSX.IntrinsicElements = heading ? `h${heading}` : 'p';

  const styles = useMemo(
    () =>
      textTv({
        size,
        weight,
        color,
        opacity,
        heading,
        className,
      }),
    [size, weight, color, opacity, heading, className],
  );

  return { Component, children, styles, ref, ...otherProps };
}
