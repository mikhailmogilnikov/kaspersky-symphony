/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { RemoveScroll } from 'react-remove-scroll';
import { m, AnimatePresence } from 'framer-motion';

import { MView } from '../motion-view';

import { useModal } from './use-modal';
import { ModalContentVariants } from './animation-variants';

export const Modal = () => {
  const { modal, closeModal, options } = useModal();
  const { save, scrollable, containerProps } = options;

  return (
    <AnimatePresence>
      {modal ? (
        <RemoveScroll className='fixed inset-0 z-50'>
          <MView
            centered
            vertical
            animate='end'
            className='pointer-events-none relative z-20 px-4'
            exit='start'
            height='full'
            initial='start'
            style={{ overflowY: scrollable ? 'scroll' : 'hidden' }}
            variants={ModalContentVariants}
            {...containerProps}
          >
            {modal}
          </MView>
          <m.button
            animate='end'
            className='fixed inset-0 z-10 bg-black/60 backdrop-blur-xl'
            exit='start'
            initial='start'
            variants={ModalContentVariants}
            onClick={save ? undefined : closeModal}
          />
          <m.button
            animate='end'
            className='fixed right-4 top-4 z-30'
            exit='start'
            initial='start'
            variants={ModalContentVariants}
            onClick={closeModal}
          >
            Close
          </m.button>
        </RemoveScroll>
      ) : null}
    </AnimatePresence>
  );
};
