/* Components */
import { ProductoModalButton } from '../buttons/ProductModalButton';

// COMPONENTE
/* Sección de una Categoria de los Productos */
export const CategoriaSection = ({ arrProds, id, title }) => (
    <section className='mx-4 mt-6 border-b' id={id}>
        <h2 className='mb-4 text-lg text-gray-500 font-bold'>{ title }</h2>

        {arrProds.map((product, index) => (
            <ProductoModalButton key={index} product={product}/>
        ))}
    </section>
);
