import { Fragment } from 'react';
/* Icons */
import { AiOutlineClose } from 'react-icons/ai';
import { FaShareSquare } from "react-icons/fa";
/* Hooks */
import { useState } from 'react';
/* Headless UI */
import { Dialog, Transition } from '@headlessui/react';

// COMPONENTE
/* Modal del Producto */
export const ProductModal = ({ collageImages, colors, description, price, open, setOpen, setSelectedProd, title }) => {
    // CONSTANTES
    const [ mainImage, setMainImage ] = useState(collageImages[0]);         /* Imagen Principal */
    const [ checkColor, setCheckColor ] = useState(colors[0]);              /* Color Seleccionado */
    const [ qty, setQty ] = useState(1);                                    /* Cantidad */

    // RETORNO
    return (
        <Transition.Root as={Fragment} show={open}>
            <Dialog as='div' className='fixed z-20 inset-0 overflow-y-auto' onClose={() => { setOpen(!open); setSelectedProd([]); }}>
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

                    <span aria-hidden='true' className='hidden sm:inline-block sm:align-middle sm:h-screen'>&#8203;</span>

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
                                    onClick={() => { setOpen(!open); setSelectedProd([]); }}
                                    type="button"
                                >
                                    <span className="sr-only">Close</span>

                                    <AiOutlineClose aria-hidden="true" className="h-6 w-6" />
                                </button>
                            </div>

                            <Dialog.Title as='h3' className='inline-flex items-center justify-center text-md font-semibold leading-6 text-blue-dark pl-5 py-3 mb-1'>{ title }</Dialog.Title>

                            <hr/>

                            <header className='flex flex-col items-center text-lg text-center bg-snow md:block lg:block xl:block md:items-start lg:items-start xl:items-start md:text-left lg:text-left xl:text-left md:relative lg:relative xl:relative'>
                                <div className='flex flex-col text-center md:flex-none md:text-left md:relative md:m-0 lg:flex-none lg:text-left lg:relative xl:flex-none xl:text-left xl:relative text-base'>
                                    <div className="grid grid-cols-6 gap-4 mt-6 mb-8">
                                        <div className="col-span-6 md:col-span-3 relative">
                                            <div className='flex flex-col md:flex-row'>
                                                {/* Imagen */}
                                                <div className='relative ml-8 w-3/4 h-auto md:w-2/4'>
                                                    <button
                                                        className="absolute -top-1 right-0 mr-4 h-12 w-12 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-b-lg shadow-sm text-white bg-pink-stronger hover:bg-pink-dark focus:outline-none"
                                                        type="button"
                                                    >
                                                        <div className='p-2'>
                                                            <FaShareSquare className='-ml-4 text-white h-5 w-5'/>
                                                        </div>
                                                    </button>

                                                    <img alt={title} className='border-solid border border-gray-300 rounded-3xl' src={mainImage} />

                                                    {/* Otras Imágenes */}
                                                    <div className="absolute -bottom-4 left-3 flex space-x-2">
                                                        {collageImages.map((image, index) => (
                                                            <button
                                                                className="bg-white rounded-full border border-gray-300"
                                                                key={`${index}-${title.replace(' ', '-').toLowerCase()}`}
                                                                onClick={() => setMainImage(image)}
                                                            >
                                                                <img alt='#' className='w-14 h-14 rounded-full' src={image} />
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Lado Derecho */}
                                        <div className='col-span-6 ml-4 mr-4 md:col-span-3 md:-ml-40'>
                                            <div className='flex flex-col md:flex-row mb-2'>
                                                <div className='text-base font-semibold mb-2 md:mb-0 md:mr-4 mt-2'>{ title }</div>
                                            </div>
                                            <div className='pt-2 md:pt-0'>
                                                <div className='font-base text-gray-500 text-sm mb-4'>{ description }</div>
                                            </div>
                                            <div className='z-50 relative grid grid-cols-2 border-t border-gray-300 pt-2 md:pt-0'>
                                                <div>
                                                    <div className='font-semibold mt-4 mb-2'>Color</div>

                                                    {colors.map((color) => (
                                                        <div className='w-full inline-flex items-center'>
                                                            <button
                                                                className={`mx-2 w-3.5 h-3.5 rounded-full border border-pink-strong ${checkColor === color ? 'bg-pink-strong ring-pink-200 ring-2 ring-offset-1' : 'bg-white'}`}
                                                                key={`${color.toLowerCase()}-${title.replace(' ', '-').toLowerCase()}`}
                                                                onClick={() => setCheckColor(color)}
                                                            >
                                                                <span className='sr-only'>{ color }</span>
                                                            </button>

                                                            <span>{ color }</span>
                                                        </div>
                                                    ))}
                                                    
                                                    {/* {colors.map((color) => (
                                                        <div className="form-check" key={`${color.toLowerCase()}-${title.toLowerCase()}`}>
                                                            <input
                                                                className='mx-2.5 mt-1 w-3 h-3 bg-white bg-center bg-contain bg-no-repeat border border-pink-strong rounded-full form-check-input appearance-none cursor-pointer transition duration-200 checked:bg-pink-strong checked:border-pink-strong checked:ring-pink-200 checked:ring-2 checked:ring-offset-1 focus:outline-none'
                                                                defaultChecked={color === checkColor}
                                                                id={`${color.toLowerCase()}-${title.toLowerCase()}`}
                                                                name={`${color.toLowerCase()}-${title.toLowerCase()}`}
                                                                onClick={(e) => setCheckColor(e.target.value)} 
                                                                type='radio'
                                                                value={color}
                                                            />
                                                
                                                            <label className="inline-block form-check-label text-ming text-md font-semibold" htmlFor={`${color.toLowerCase()}-${title.toLowerCase()}`}>{ color }</label>
                                                        </div>
                                                    ))} */}
                                                </div>
                                                <div>
                                                    <div className='font-semibold mt-4 mb-2'>Cantidad</div>
                                                    
                                                    <input
                                                        min={1}
                                                        onChange={(e) => setQty(e.target.value)}
                                                        type='number'
                                                        value={qty}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </header>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
