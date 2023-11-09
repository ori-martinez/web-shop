/* Components */
import { Navbar } from '../components/Navbar';
import { ProductModal } from '../components/modals/ProductModal';
/* Hooks */
import { useState } from 'react';

// PLANTILLA
/* Estructura Base de una Página */
export const PageLayout = ({children}) => {
    // CONSTANTES
    const [open, setOpen] = useState(false);

    /* Funcionalidad de Apertura del Modal */
    const handleOpenModals = () => {
        setOpen(true);
    }

    // RETORNO
    return (
        <div className='min-h-screen bg-pink-strong overflow-x-hidden'>
            <Navbar/>

            <div className='p-2 mx-2 -mt-16 bg-white rounded-xl shadow-2xl lg:mx-28 lg:-mt-12'>
                <button
                    onClick={() => setOpen(!open)}
                >
                    Modal
                </button>

                <ProductModal
                    open={open}
                    setOpen={setOpen}
                    title={'Arnés de Glúteos con Esposas'}
                    description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text'}
                    collageImages={[
                        'https://res.cloudinary.com/djosi3wtf/image/upload/v1699462827/imagen_1_Kit_BDSM_Set_ptvzad.jpg',
                        'https://res.cloudinary.com/djosi3wtf/image/upload/v1699462827/imagen_2_Kit_BDSM_Set_s6wo2n.jpg'
                    ]}
                    colors={[
                        'Negro',
                        'Rojo'
                    ]}
                />


                { children }
            </div>
        </div>
    )
}



