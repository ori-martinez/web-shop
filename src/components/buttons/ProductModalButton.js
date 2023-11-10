/* Components */
import { TextButton } from './TextButton';
/* Icons */
import { BsCartPlus } from 'react-icons/bs';
import { FaDollarSign } from 'react-icons/fa';

// COMPONENTE
/* Botón de Apertura del Modal para el Producto */
export const ProductoModalButton = ({ handleModal, product }) => (
    <div className='p-2 mb-4 grid grid-cols-4 gap-x-8 gap-y-4 border rounded-lg'>
        <button className='col-span-4 flex items-center justify-center md:col-span-1 focus:ring-transparent focus:outline-none' onClick={() => handleModal(product)}>
            <img alt={product.title} className='w-48 h-auto rounded-3xl' src={product.collageImages[0]} />
        </button>

        <div className='col-span-4 md:col-span-2'>
            <h3 className='mb-1 inline-flex items-center text-lg text-gray-800 font-bold'>
                { product.title }: <FaDollarSign className='ml-2 w-4 h-4 text-green-700' /> <span className='font-normal'>{ product.price }</span>
            </h3>                               

            <p className='text-base text-gray-400'>{ product.description }</p>
        </div>
        <div className="col-span-4 flex items-center justify-center md:col-span-1 md:items-start md:justify-end">
            <TextButton onClick={() => handleModal(product)} icon={<BsCartPlus className='ml-2 mr-2 w-5 h-5 lg:ml-4' />} />
        </div>
    </div>
);
