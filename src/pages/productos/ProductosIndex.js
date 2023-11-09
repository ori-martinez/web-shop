/* Layout */
import { PageLayout } from '../PageLayout';
/* Components */
import { CategoriaSection } from '../../components/sections/CategoriaSection';
import { ImageButton } from '../../components/buttons/ImageButton';
import { LinkSectionButton } from '../../components/buttons/LinkSectionButton';
/* Constants */
import { bondageProds, mediasProds, ropaProds } from '../../constants/productos';

// PÁGINA
/* Index de los Productos */
export const ProductosIndex = () => {
    // RETORNO
    return (
        <PageLayout>
            <div className='px-4 pt-12 pb-4 my-4'>
                <h1 className='text-lg text-gray-800 font-bold'>¿Qué estás buscando?</h1>

                <div className='mt-6 mb-4 flex items-center'>
                    <ImageButton srcImage={mediasProds[0].collageImages[0]} title='Medias' />
                    <ImageButton srcImage={bondageProds[0].collageImages[0]} title='Bondage' />
                    <ImageButton srcImage={ropaProds[0].collageImages[0]} title='Ropa' />
                </div>
                <div className='mx-4 my-6'>
                    <LinkSectionButton title='Bondage' />
                    <LinkSectionButton title='Medias' />
                    <LinkSectionButton title='Ropa' />
                </div>
                
                <hr />

                <CategoriaSection arrProds={bondageProds} id='bondage-section' title='Bondage' />
                <CategoriaSection arrProds={mediasProds} id='medias-section' title='Medias' />
                <CategoriaSection arrProds={ropaProds} id='ropa-section' title='Ropa' />
            </div>
        </PageLayout>
    );
}
