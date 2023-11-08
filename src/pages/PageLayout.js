import React from 'react';
/* Components */
import {Navbar} from '../components/Navbar';
import {ProductModal} from '../components/modals/ProductModal';

/* Hooks */
import {useState} from 'react';

// PLANTILLA
/* Estructura Base de una Página */
export const PageLayout = ({children}) => {

    // CONSTANTES
    const [open, setOpen] = useState(false);

    /* Funcionalidad de Apertura del Modal */
    const handleOpenModals = () => {
        setOpen(true);
    }

    return (
        <div className='min-h-screen bg-pink-strong overflow-x-hidden'>
            <Navbar/>



            <div className='p-2 mx-2 -mt-12 bg-white rounded-xl shadow-2xl lg:mx-20 lg:-mt-4'>
                <button onClick={() => setOpen(!open)}>
                    Modal
                </button>
                <ProductModal open={open} setOpen={setOpen}/>


                {children}
            </div>
        </div>
    )
}



