import { forwardRef } from '../../lib/utils/ui';
import { Spinner } from '../spinner';

import { useButton, UseButtonProps } from './use-button';

export interface ButtonProps extends UseButtonProps {}

export const Button = forwardRef<'button', ButtonProps>((props, ref) => {
  const {
    Component,
    children,
    styles,
    ref: domRef,
    isDisabled,
    isLoading,
    spinnerProps,
    ...restProps
  } = useButton({ ref, ...props });

  return (
    <Component className={styles} disabled={isDisabled || isLoading} {...restProps} ref={domRef}>
      {isLoading ? <Spinner size='xs' {...spinnerProps} /> : children}
    </Component>
  );
});
