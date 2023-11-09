/* Components */
import { CartDescriptionSection } from '../components/sections/CartDescriptionSection';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
/* Icons */
import { HiArrowUp } from 'react-icons/hi';
/* Hooks */
import { useEffect, useState } from 'react';
/* React Scroll */
import { animateScroll } from 'react-scroll';

// FUNCIONES
/* Funcionalidad de Scroll hacia Arriba */
const scrollTop = () =>  animateScroll.scrollToTop();

// PLANTILLA
/* Estructura Base de una Página */
export const PageLayout = ({ children, hasCartDescription = true }) => {
    // CONSTANTES
    /* Estado de Muestra del Botón */
    const [ showButton, setShowButton ] = useState(false);

    // FUNCIONES
    /* Obtención del Botón Fijo */
    const stickyButton = () => {
        if (window !== undefined) {
            window.scrollY > 400 ? setShowButton(true) : setShowButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', stickyButton);

        return () => window.removeEventListener('scroll', stickyButton);
    }, []);

    // RETORNO
    return (
    <div className='min-h-screen bg-pink-strong'>
        <Navbar/>

        <div className='p-2 mx-2 -mt-12 bg-white rounded-2xl shadow-2xl lg:mx-72 md:-mt-20'>{ children }</div>

        {hasCartDescription && (<CartDescriptionSection onClick={scrollTop} />)}

        <Footer />

        {showButton && (
            <button
                className='p-1.5 fixed right-6 bottom-20 bg-gray-500 rounded-lg opacity-40 text-lg text-white duration-300 hover:opacity-100'
                onClick={scrollTop}
            >
                <HiArrowUp />
            </button>
        )}
    </div>
);
}
