import { Fragment } from 'react';
/* Components */
import { ProductoModalButton } from '../buttons/ProductModalButton';
/* Icons */
import { AiOutlineClose } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
/* Headless UI */
import { Dialog, Transition } from '@headlessui/react';

// COMPONENTE
/* Modal de Búsqueda de Productos */
export const SearchModal = ({ arrProds, handleModal, loading, onChange, onClick, open, setOpen, search }) => {
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
                                <div className='mt-8 inline-flex items-center text-2xl text-gray-800 font-bold'>Buscar ( {loading 
                                    ? (
                                        <div className="mx-1 mt-1 flex items-center justify-center text-center sm:p-0">
                                            <div className='w-6 h-6 relative bg-gradient-to-r from-pink-strong via-pink-strong to-gray-100 rounded-full animate-spin'>
                                                <div className='w-4 h-4 absolute top-1/2 left-1/2 flex items-center justify-center bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2'></div>
                                            </div>
                                        </div>
                                    ) 
                                    : arrProds.length
                                } )</div>
                            </Dialog.Title>
                            
                            <div className='mx-6 pt-2 pb-4 relative flex items-center justify-center sm:mx-24 lg:mx-52'>
                                <input 
                                    autoComplete='off'
                                    className='pl-4 pr-8 w-full h-10 border border-gray-300 rounded-md shadow-sm focus:ring-transparent focus:outline-none placeholder:font-semibold'
                                    name='search'
                                    onChange={onChange}
                                    placeholder='Buscador'
                                    type='search'
                                    value={search}
                                />

                                {/* Botón de Acción */}
                                <button className='px-5 py-2 absolute right-0 flex items-center justify-center bg-pink-stronger rounded-r-md text-base text-white font-semibold focus:ring-transparent focus:outline-none' onClick={onClick}>
                                    Buscar <FaSearch className='ml-2 h-4 w-4' />
                                </button>
                            </div>

                            <header className='flex flex-col items-center text-lg text-center bg-snow md:block lg:block xl:block md:items-start lg:items-start xl:items-start md:text-left lg:text-left xl:text-left md:relative lg:relative xl:relative'>
                                <div className='mx-2 my-4 flex flex-col text-center max-h-80 overflow-y-auto md:flex-none md:text-left md:relative lg:flex-none lg:text-left lg:relative xl:flex-none xl:text-left xl:relative text-base'>
                                    {loading
                                        ? (
                                            <div className="p-4 h-24 flex items-center justify-center text-center sm:p-0">
                                                <div className='w-16 h-16 relative bg-gradient-to-r from-pink-stronger via-pink-strong to-gray-100 rounded-full animate-spin'>
                                                    <div className='w-12 h-12 absolute top-1/2 left-1/2 flex items-center justify-center bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2'></div>
                                                </div>
                                            </div>
                                        )
                                        : arrProds.length !== 0
                                            ? arrProds.map((product, index) => (<ProductoModalButton key={index} handleModal={handleModal} product={product}/>))
                                            : (<div className='py-8 text-center'>
                                                <h1 className='text-lg text-gray-500 font-bold'>Sin resultados para mostrar...</h1>

                                                <p className='text-base text-gray-400 font-semibold'>Escribe alguna descripción y presiona "Buscar"</p>
                                                <p className='mt-6 text-xl'>&#x1F575;&#x1F3FB;</p>
                                            </div>)
                                    }
                                </div>
                            </header>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root> 
    );
}
