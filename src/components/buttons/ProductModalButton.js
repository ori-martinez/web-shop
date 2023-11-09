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
        <div className='p-2 mb-4 grid grid-cols-4 border rounded-lg'>
            <button className='focus:ring-transparent focus:outline-none' onClick={() => setOpen(!open)}>
                <img alt={product.title} className='w-48 h-auto' src={product.collageImages[0]} />
            </button>

            <div className='col-span-2'>
                <h3 className='mb-1 text-lg text-gray-800 font-bold'>{ product.title }</h3>
                
                <p className='text-base text-gray-400'>{ product.description }</p>
            </div>
            <div className="flex items-start justify-end">
                <TextButton onClick={() => setOpen(!open)} icon={<BsCartPlus className='ml-4 mr-2 w-6 h-6' />} />
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
