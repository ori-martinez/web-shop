/* Components */
import { ProductModal } from '../modals/ProductModal';
import { TextButton } from './TextButton';
/* Icons */
import { BsCartPlus } from 'react-icons/bs';
/* Hooks */
import { useState } from 'react';

// COMPONENTE
/* Botón de Apertura del Modal para el Producto */
export const ProductoModalButton = ({ product }) => {
    // CONSTANTES
    /* Estado de Apertura */
    const [open, setOpen] = useState(false);

    // RETORNO
    return (<>
        <div className='p-2 mb-4 grid grid-cols-4 gap-x-8 gap-y-4 border rounded-lg'>
            <button className='col-span-4 flex items-center justify-center md:col-span-1 focus:ring-transparent focus:outline-none' onClick={() => setOpen(!open)}>
                <img alt={product.title} className='w-32 h-auto' src={product.collageImages[0]} />
            </button>

            <div className='col-span-4 md:col-span-2'>
                <h3 className='mb-1 text-lg text-gray-800 font-bold'>{ product.title }</h3>
                
                <p className='text-base text-gray-400'>{ product.description }</p>
            </div>
            <div className="col-span-4 flex items-center justify-center md:col-span-1 md:items-start md:justify-end">
                <TextButton onClick={() => setOpen(!open)} icon={<BsCartPlus className='ml-2 mr-2 w-5 h-5 lg:ml-4' />} />
            </div>
        </div>

        <ProductModal
            collageImages={product.collageImages}
            colors={product.colors}
            description={product.description}
            open={open}
            setOpen={setOpen}
            title={product.title}
        />
    </>);
}
