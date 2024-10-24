/* eslint-disable @conarti/feature-sliced/absolute-relative */

import { PropsWithChildren } from 'react';

import { cn } from '@/shared/lib/utils/ui';

export type RadioButtonProps = PropsWithChildren<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    classNames?: { wrapper?: string; input?: string; label?: string };
  }
>;

export const RadioButton = (props: RadioButtonProps) => {
  const { children, id, classNames, ...restProps } = props;

  return (
    <div className={cn('flex gap-4', classNames?.wrapper)}>
      <input {...restProps} className={cn(classNames?.input)} id={id} type='radio' />
      <label className={cn(classNames?.label)} htmlFor={id}>
        {children}
      </label>
    </div>
  );
};
