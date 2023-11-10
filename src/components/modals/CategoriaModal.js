import { Fragment } from 'react';
/* Components */
import { ProductoModalButton } from '../buttons/ProductModalButton';
/* Icons */
import {AiOutlineClose} from 'react-icons/ai';
/* Headless UI */
import {Dialog, Transition} from '@headlessui/react';

export const CategoriaModal = ({ arrProds = [], handleModal, open, setOpen, title}) => {
    // RETORNO
    return (
        <Transition.Root as={Fragment} show={open}>
            <Dialog as='div' className='fixed z-20 inset-0 overflow-y-auto' onClose={setOpen}>
                <div
                    className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
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

                    <span aria-hidden='true' className='hidden sm:inline-block sm:align-middle sm:h-screen' >&#8203;</span>

                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                        enterTo='opacity-100 translate-y-0 sm:scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                        leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                    >
                        <div className="inline-block align-bottom bg-white rounded-2xl pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full">
                            <div className="hidden sm:block absolute top-0 right-0 pt-6 pr-6">
                                <button
                                    className="bg-white rounded-md text-gray-300 hover:text-indigo-300 focus:outline-none"
                                    onClick={() => setOpen(false)}
                                    type="button"
                                >
                                    <span className="sr-only">Close</span>

                                    <AiOutlineClose className="h-6 w-6" aria-hidden="true"/>
                                </button>
                            </div>

                            <Dialog.Title as='h3' className='flex items-center justify-center leading-6 text-blue-dark pl-5 py-3 mb-1'>
                                <span className='mt-8 text-2xl text-gray-800 font-bold'>{ title } ( { arrProds.length } )</span>
                            </Dialog.Title>

                            <header className='flex flex-col items-center text-lg text-center bg-snow md:block lg:block xl:block md:items-start lg:items-start xl:items-start md:text-left lg:text-left xl:text-left md:relative lg:relative xl:relative'>
                                <div className='mx-4 my-4 flex flex-col text-center max-h-96 overflow-y-auto md:flex-none md:text-left md:relative lg:flex-none lg:text-left lg:relative xl:flex-none xl:text-left xl:relative text-base'>
                                    {arrProds.map((product, index) => (
                                        <ProductoModalButton key={index} handleModal={handleModal} product={product}/>
                                    ))}
                                </div>
                            </header>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
