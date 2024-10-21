/* eslint-disable @conarti/feature-sliced/absolute-relative */

import { useText, UseTextProps } from './use-text';

import { forwardRef } from '@/shared/lib/utils/ui';

export interface TextProps extends UseTextProps {}

/**
 * Paragraph and heading abstraction. Can use prop heading to polymorph to heading attribute. Default attribute – p.
 * @default { heading: undefined, color: "fg", size: "base", opacity: 10, weight: undefined }
 * @example
 * <Text heading={2} color='primary' size="2xl" weight={6}>Hello world!</Text>
 */
export const Text = forwardRef<'p', TextProps>((props, ref) => {
  const { Component, children, styles, ref: domRef, ...restProps } = useText({ ref, ...props });

  return (
    <Component className={styles} {...restProps} ref={domRef}>
      {children}
    </Component>
  );
});
