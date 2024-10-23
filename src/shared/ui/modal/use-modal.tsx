import { ReactElement } from 'react';
import { create } from 'zustand';
import { MotionProps } from 'framer-motion';

import { ViewProps } from '../view';

type ModalContent = ReactElement | null;
type ContainerProps = ViewProps & MotionProps;

type ModalOptions = {
  scrollable?: boolean;
  save?: boolean;
  containerProps?: ContainerProps;
};

interface ModalStore {
  modal: ModalContent;
  options?: ModalOptions;
  setModal: (content: ModalContent, options?: ModalOptions) => void;
  closeModal: VoidFunction;
}

const defaultModalOptions = { save: false, scrollable: false, containerProps: {} };

export const useModal = create<ModalStore>()((set) => ({
  modal: null,
  options: defaultModalOptions,
  setModal: (content, options) =>
    set(() => (options ? { modal: content, options } : { modal: content })),
  closeModal: () => set(() => ({ modal: null, containerProps: defaultModalOptions })),
}));
