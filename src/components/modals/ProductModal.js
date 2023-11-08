import {Fragment} from 'react';
/* Headless UI */
import {Dialog, Transition} from '@headlessui/react';
/* Icons */
import {FaArrowRight} from 'react-icons/fa';

export const ProductModal = ({open, setOpen}) => {

    return (
        <Transition.Root as={Fragment} show={open}>
            <Dialog as='div' className='fixed z-0 inset-0 overflow-y-auto' onClose={setOpen}>
                <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-40 transition-opacity'/>
                    </Transition.Child>

                    <span aria-hidden='true'
                          className='hidden sm:inline-block sm:align-middle sm:h-screen'>&#8203;</span>

                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                        enterTo='opacity-100 translate-y-0 sm:scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                        leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                    >
                        <div
                            className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-96'>
                            <Dialog.Title as='h3'
                                          className='inline-flex items-center justify-center text-lg font-bold leading-6 text-blue-dark pl-5 pb-2 pt-4 mb-1'>
                                icono? Muestra del Impuesto
                            </Dialog.Title>

                            <hr/>

                            <div className='bg-snow px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                                <div
                                    className="mx-auto flex items-center justify-center h-8 w-8 rounded-full bg-emerald ">
                                    icono?
                                </div>
                                <div className="mt-3 text-center sm:mt-5">
                                    <h3 className="text-xl leading-6 font-medium text-gray-900">
                                        hola <span className='ml-1 font-bold'>hola</span>
                                    </h3>

                                    <div className="mt-2">
                                        <div className="text-md text-gray-500">
                                            <p className="text-black">
                                                Valor: <span className='font-bold text-emerald-darker'>hola%</span>
                                            </p>

                                        </div>
                                    </div>
                                </div>

                                <div className="bg-snow px-1 py-2 sm:px-3 sm:flex sm:flex-row-reverse">
                                    {/* Botón de Acción */}


                                    <button onClick={() => setOpen(true)}>
                                        hola
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
