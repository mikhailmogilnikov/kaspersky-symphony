import { ForwardRefComponent, HTMLMotionProps, m, MotionProps } from 'framer-motion';
import { forwardRef } from 'react';

import { View, ViewProps } from './view';

type Ref = ForwardRefComponent<HTMLDivElement, HTMLMotionProps<'div'>>;

export const MView = forwardRef<Ref, Omit<ViewProps, 'as'> & MotionProps>(
  ({ children, ...restProps }, ref) => {
    return (
      <View as={m.div} {...restProps} ref={ref}>
        {children}
      </View>
    );
  },
);
