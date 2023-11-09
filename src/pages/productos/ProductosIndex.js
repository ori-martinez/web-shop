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
            <div className='relative px-0 pt-12 pb-4 my-4 md:px-4'>
                <h1 className='text-lg text-gray-800 font-bold'>¿Qué estás buscando?</h1>

                <div className='mt-6 mb-4 flex items-center overflow-auto'>
                    <ImageButton arrProds={mediasProds} srcImage={mediasProds[0].collageImages[0]} title='Medias' />
                    <ImageButton arrProds={bondageProds} srcImage={bondageProds[0].collageImages[0]} title='Bondage' />
                    <ImageButton arrProds={ropaProds} srcImage={ropaProds[0].collageImages[0]} title='Ropa' />
                </div>
                <div className='px-4 py-4 mx-4 my-6 z-10 sticky top-14 bg-white overflow-auto text-sm md:top-16'>
                    <LinkSectionButton title='Bondage' />
                    <LinkSectionButton title='Medias' />
                    <LinkSectionButton title='Ropa' />
                </div>

                <CategoriaSection arrProds={bondageProds} id='bondage-section' title='Bondage' />
                <CategoriaSection arrProds={mediasProds} id='medias-section' title='Medias' />
                <CategoriaSection arrProds={ropaProds} id='ropa-section' title='Ropa' />
            </div>
        </PageLayout>
    );
}
