import { ReactNode } from 'react';

export interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  loader?: boolean;
  closeModal: () => void;
}
