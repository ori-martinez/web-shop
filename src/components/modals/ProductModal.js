import {Fragment, useState} from 'react';
/* Headless UI */
import {Dialog, Transition} from '@headlessui/react';
/* Icons */
import {AiOutlineClose} from 'react-icons/ai';
import {FaShareSquare} from "react-icons/fa";


export const ProductModal = ({open, setOpen, title, description, collageImages, colors}) => {
    const [mainImage, setMainImage] = useState(collageImages[0]);

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

                            <Dialog.Title
                                as='h3'
                                className='inline-flex items-center justify-center text-md font-semibold leading-6 text-blue-dark pl-5 py-3 mb-1'
                            >
                                { title }
                            </Dialog.Title>

                            <hr/>

                            <header className='flex flex-col items-center text-lg text-center bg-snow md:block lg:block xl:block md:items-start lg:items-start xl:items-start md:text-left lg:text-left xl:text-left md:relative lg:relative xl:relative'>
                                <div className='flex flex-col text-center md:flex-none md:text-left md:relative md:m-0 lg:flex-none lg:text-left lg:relative xl:flex-none xl:text-left xl:relative text-base'>
                                    <div className="grid grid-cols-6 gap-4 mt-6 mb-8">
                                        <div className="col-span-6 md:col-span-3 relative">
                                            <div className='flex flex-col md:flex-row'>
                                                {/* Imagen */}
                                                <div className='relative ml-8 w-3/4 h-auto md:w-2/4'>
                                                    <button
                                                        className="absolute -top-1 right-0 mr-4 h-14 w-16 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-b-lg shadow-sm text-white bg-rose-500 hover:bg-rose-600 focus:outline-none"
                                                        type="button"
                                                    >
                                                        <div className='p-2'>
                                                            <FaShareSquare className='-ml-2.5 text-white h-5 w-5' />
                                                        </div>
                                                    </button>

                                                    <img
                                                        alt={title}
                                                        className='border-solid border border-gray-300 rounded-3xl'
                                                        src={mainImage}
                                                    />

                                                    {/* Preview pequeño circular */}
                                                    <div className="absolute -bottom-4 left-3 flex space-x-4">
                                                        {collageImages.map((image, index) => (
                                                            <button
                                                                onClick={() => setMainImage(image)}
                                                                key={index}
                                                                className="bg-white -mr-3 rounded-full border border-gray-300"
                                                            >
                                                                <img
                                                                    alt='#'
                                                                    className='w-14 h-14 rounded-full'
                                                                    src={image}
                                                                />
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Lado Derecho */}
                                        <div className='col-span-6 ml-4 mr-4 md:col-span-3 md:-ml-40'>
                                            <div className='flex flex-col md:flex-row mb-2'>
                                                <div className='text-base font-semibold mb-2 md:mb-0 md:mr-4 mt-2'>{title}</div>
                                            </div>
                                            <div className='pt-2 md:pt-0'>
                                                <div className='font-base text-gray-500 text-sm mb-4'>{description}</div>
                                            </div>
                                            <div className='border-t border-gray-300 pt-2 md:pt-0'>
                                                <div className='font-semibold mt-4 mb-2'>Color</div>

                                                {colors.map((color, index) => (
                                                    <div key={index} className='flex items-center mt-2'>
                                                        <label className='inline-flex items-center'>
                                                            <input
                                                                className={`form-radio h-5 w-5 disabled`}
                                                                disabled
                                                                name='color'
                                                                type='radio'
                                                                value={color}
                                                            />

                                                            <span className='ml-2 text-gray-600 text-sm font-semibold'>{ color }</span>
                                                        </label>
                                                    </div>
                                                ))}
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
