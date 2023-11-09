/* Components */
import { Navbar } from '../components/Navbar';

// PLANTILLA
/* Estructura Base de una Página */
export const PageLayout = ({ children }) => (
    <div className='min-h-screen bg-pink-strong'>
        <Navbar/>

        <div className='p-2 mx-2 -mt-12 bg-white rounded-xl shadow-2xl lg:mx-28 md:-mt-20'>{ children }</div>
    </div>
);
