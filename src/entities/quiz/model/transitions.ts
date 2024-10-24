import { MotionProps } from 'framer-motion';

export const QuizMessageTransition: any = {
  animate: { rotate: 0, scale: 1, opacity: 1, transition: { delay: 0.2 } },
  initial: { scale: 0 },
  exit: { scale: 0, opacity: 0, filter: 'blur(24px)', transition: { duration: 0.2 } },
  transition: { type: 'spring', duration: 0.7, bounce: 0 },
};

export const QuizImgTransition: MotionProps = {
  animate: { rotate: 0, scale: 1, opacity: 1 },
  initial: { rotate: -90, scaleX: -1, scale: 0.5, opacity: 0 },
  exit: { scale: 0.5, opacity: 0, filter: 'blur(24px)', y: 40, transition: { delay: 0.1 } },
  transition: { type: 'spring', duration: 0.7, bounce: 0 },
};
