/* Components */
import { ProductoModalButton } from '../buttons/ProductModalButton';

// COMPONENTE
/* Sección de una Categoria de los Productos */
export const CategoriaSection = ({ arrProds, id, title }) => (
    <section className='mx-4 mt-6 relative border-b'>
        <h2 className='mb-4 text-base text-gray-500 font-bold'>{ title }</h2>

        <span className='absolute -top-16' id={id}></span>

        {arrProds.map((product, index) => (
            <ProductoModalButton key={index} product={product}/>
        ))}
    </section>
);
