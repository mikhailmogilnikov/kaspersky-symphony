import { LazyMotion, MotionConfig } from 'framer-motion';
import { PropsWithChildren } from 'react';

import { defaultTransition } from '@/shared/config/animations';

const loadFramerMotionFeatures = () =>
  import('@/shared/model/framer-motion-features').then((res) => res.default);

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <LazyMotion strict features={loadFramerMotionFeatures}>
      <MotionConfig reducedMotion='user' transition={defaultTransition}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
};
