import { forwardRef } from '../../lib/utils/ui';

import { useView, UseViewProps } from './use-view';

export interface ViewProps extends UseViewProps {}

/**
 * Flex abstraction. Can use prop "as" to polymorph to any html attrubute. Default attribute – div.
 * @default { vertical: false, centered: false, gap: "base", items: "start", justify: "start", width: "full" }
 * @example
 * <View vertical as="ul" items="center" gap="lg" width="full">
 *    <View as="li"></View>
 *    <View as="li"></View>
 * </View>
 */
export const View = forwardRef<'div', ViewProps>((props, ref) => {
  const { Component, children, styles, ref: domRef, ...restProps } = useView({ ref, ...props });

  return (
    <Component className={styles} {...restProps} ref={domRef}>
      {children}
    </Component>
  );
});
