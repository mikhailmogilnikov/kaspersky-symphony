import { Ref, useMemo } from 'react';

import { viewTv, ViewVariantProps } from './view-classnames';

// eslint-disable-next-line @conarti/feature-sliced/absolute-relative
import { HTMLUIProps } from '@/shared/model/types/ui';

export type UseViewProps = HTMLUIProps<'div'> &
  ViewVariantProps & {
    ref?: Ref<any> | null;
    /**
     * Same as className="items-center justify-center"
     */
    centered?: boolean;
  };

export const useView = (props: UseViewProps) => {
  const {
    ref,
    as,
    children,
    vertical,
    centered,
    items,
    justify,
    width,
    height,
    gap,
    className,
    ...otherProps
  } = props;

  const Component = as || 'div';

  const styles = useMemo(
    () =>
      viewTv({
        vertical,
        centered,
        items,
        justify,
        width,
        height,
        gap,
        className,
      }),
    [vertical, centered, items, justify, width, height, gap, className],
  );

  return { Component, children, styles, ref, ...otherProps };
};
