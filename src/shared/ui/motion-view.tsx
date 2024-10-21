import { m, MotionProps } from 'framer-motion';

import { View, ViewProps } from './view';

export const MView = ({ children, ...restProps }: Omit<ViewProps, 'as'> & MotionProps) => {
  return (
    <View as={m.div} {...restProps}>
      {children}
    </View>
  );
};
