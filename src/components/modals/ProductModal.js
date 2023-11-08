import {Fragment} from 'react';
/* Headless UI */
import {Dialog, Transition} from '@headlessui/react';

export const ProductModal = ({open, setOpen}) => {

    return (
        <Transition.Root as={Fragment} show={open}>
            <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto" onClose={setOpen}>
                <div className="px-4 pt-4 pb-20 min-h-screen flex items-end justify-center text-center sm:p-0 sm:block">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40 transition-opacity"/>
                    </Transition.Child>


                    <div className="fixed z-30 inset-0 overflow-y-auto">
                        <div
                            className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">

                        </div>
                    </div>


                </div>
            </Dialog>
        </Transition.Root>
    );
}
