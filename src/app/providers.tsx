import { LazyMotion, MotionConfig } from 'framer-motion';
import { PropsWithChildren } from 'react';

import { defaultTransition } from '@/shared/config/animations';
import { Modal } from '@/shared/ui/modal/modal';

const loadFramerMotionFeatures = () =>
  import('@/shared/model/framer-motion-features').then((res) => res.default);

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <LazyMotion strict features={loadFramerMotionFeatures}>
      <MotionConfig reducedMotion='user' transition={defaultTransition}>
        <Modal />
        {children}
      </MotionConfig>
    </LazyMotion>
  );
};
