/* eslint-disable @conarti/feature-sliced/absolute-relative */
import { Ref, useMemo } from 'react';

import { spinnerTv, SpinnerVariantProps } from './spinner-classnames';

import { HTMLUIProps } from '@/shared/model/types/ui';

export type UseSpinnerProps = HTMLUIProps<'div'> &
  SpinnerVariantProps & {
    ref?: Ref<HTMLDivElement> | null;
    segments?: 8 | 10 | 12;
  };

export const useSpinner = (props: UseSpinnerProps) => {
  const { ref, className, size, segments = 10, center, color, ...restProps } = props;

  const segmentsArray = useMemo(() => [...Array(segments).keys()], [segments]);
  const deg = useMemo(() => 360 / segmentsArray.length, [segments]);
  const animationTime = useMemo(() => 1.2 / segmentsArray.length, [segments]);

  const { base: baseStyles, item: itemsStyles } = useMemo(
    () =>
      spinnerTv({
        size,
        color,
        center,
        className,
      }),
    [size, color, center, className],
  );

  const domRef = ref;

  return {
    domRef,
    baseStyles,
    itemsStyles,
    segmentsArray,
    deg,
    animationTime,
    ...restProps,
  };
};
