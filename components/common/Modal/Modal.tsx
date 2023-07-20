import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { ModalProps } from './Modal.props';
import Close from 'public/images/close-icon.svg';

export const Modal = ({
  children,
  isOpen,
  loader = false,
  closeModal,
}: ModalProps): JSX.Element => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[99999]" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-dark bg-opacity-60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[592px] transform overflow-hidden rounded-lg bg-primary bg-modal bg-[position:_left_0px_top_0px,_right_0px_bottom_0px] bg-no-repeat px-[35px] py-9 text-left align-middle transition-all md:max-w-[600px] md:bg-modalMd md:p-[60px] xl:max-w-[984px] xl:bg-modalXl xl:pt-[96px]">
                {children}
                {!loader && (
                  <div className="mt-4">
                    <button
                      type="button"
                      className="absolute right-4 top-4 h-6 w-6 md:right-6 md:top-6"
                      onClick={closeModal}
                    >
                      <Close width="24" height="24" className="bg-left-top" />
                    </button>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
