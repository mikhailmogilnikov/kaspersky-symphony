/* eslint-disable @conarti/feature-sliced/absolute-relative */

import { useSpinner, UseSpinnerProps } from './use-spinner';

import { forwardRef } from '@/shared/lib/utils/ui';

export interface SpinnerProps extends UseSpinnerProps {}

export const Spinner = forwardRef<'div', SpinnerProps>((props, ref) => {
  const { domRef, baseStyles, segmentsArray, deg, animationTime, itemsStyles, ...restProps } =
    useSpinner({
      ...props,
      ref,
    });

  return (
    <div ref={domRef} aria-label='spinner' className={baseStyles()} {...restProps}>
      {segmentsArray.map((segment) => (
        <div
          key={segment}
          className={itemsStyles()}
          style={{
            transform: `rotate(${deg * segment}deg) translateY(-120%)`,
            animationDelay: `-${1.2 - segment * animationTime}s`,
          }}
        />
      ))}
    </div>
  );
});
