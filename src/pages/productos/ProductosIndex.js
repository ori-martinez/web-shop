/* Layout */
import { PageLayout } from '../PageLayout';
/* Components */
import { ImageButton } from '../../components/buttons/ImageButton';
/* Constants */
import { bondageProds, mediasProds, ropaProds } from '../../constants/productos';

// PÁGINA
/* Index de los Productos */
export const ProductosIndex = () => {
    // RETORNO
    return (
        <PageLayout>
            <div className='px-4 pt-12 pb-4 mt-4'>
                <h1 className='text-lg text-gray-800 font-bold'>¿Qué estás buscando?</h1>

                <div className='mt-6 flex items-center'>
                    <ImageButton srcImage={mediasProds[0].collageImages[0]} title='Medias' />
                    <ImageButton srcImage={bondageProds[0].collageImages[0]} title='Bondage' />
                    <ImageButton srcImage={ropaProds[0].collageImages[0]} title='Ropa' />
                </div>
            </div>

            <hr className='mx-4' />
        </PageLayout>
    )
}
