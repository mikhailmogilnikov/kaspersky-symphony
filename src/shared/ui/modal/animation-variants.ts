import { Transition, Variants } from 'framer-motion';

export const ModalOverlayVariants: Variants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
  },
} as const;

export const ModalOverlayTransition: Transition = {
  duration: 0.2,
} as const;

export const ModalContentVariants: Variants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
  },
} as const;
