import { Link } from 'react-router-dom';
import { InputSearch } from './inputs/InputSearch';
import { TextButton } from './buttons/TextButton';
import { BiLogoInstagram, BiUserCircle } from 'react-icons/bi';
import { useEffect, useState } from 'react';

// COMPONENTE
/* Barra de Navegación */
export const Navbar = () => {
    const [ showScrollMenu, setShowScrollMenu] = useState(false);

    const stickyNavbar = () => { 
        if (window !== undefined) {
            let ws = window.scrollY;

            ws > 300 ? setShowScrollMenu(true) : setShowScrollMenu(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', stickyNavbar);

        return () => window.removeEventListener('scroll', stickyNavbar);
    }, []);

    // RETORNO
    return (<>
        <nav className='px-32 pt-4 pb-16 -mx-28 bg-pink-baby rounded-b-full'>
            <div className='flex flex-col'>
                <div className='w-full grid grid-cols-3'>
                    <div className='col-span-2 md:col-span-1 md:col-start-2 lg:col-start-2'>
                        <InputSearch />
                    </div>

                    <div className='flex justify-end'>
                        <TextButton icon={<BiUserCircle className='w-5 h-5' />} text='Iniciar sesión' />
                    </div>
                </div>
                <div className='flex justify-around flex-wrap'>
                    <img alt='Logo' className='w-28 h-auto md:w-36' src='https://static.whataform.com/avatar/avatar_d61bce3bef7ff7b_5520ec23cf2e8e0492339cd1f521b67fc1fb4b29.webp' title='Visitar mi perfil'/>

                    <div className='md:mt-8 flex flex-col'>
                        <h1 className='text-gray-700 font-bold md:text-lg'>AHEGAO</h1>
                            
                        <p className='text-sm text-gray-500 md:text-base'>Tienda virtual | Caracas / La Guaira - Vzla <sub>VE</sub></p>
                    </div>

                    <Link className='md:mt-12' target="_blank" title='Instagram' to='https://www.instagram.com/ahegaove'>
                        <BiLogoInstagram className='w-6 h-6 text-gray-700'/>
                    </Link>
                </div>
            </div>
        </nav>

        {showScrollMenu && (
            <nav className='py-2 w-full fixed top-0 grid grid-cols-4 place-items-center bg-white shadow-md'>
                <img alt='Logo' className='w-8 md:w-12 h-auto' src='https://static.whataform.com/avatar/avatar_d61bce3bef7ff7b_5520ec23cf2e8e0492339cd1f521b67fc1fb4b29.webp'/>

                <div className='col-span-2'>
                    <InputSearch />
                </div>
                <div className='flex justify-end'>
                    <TextButton icon={<BiUserCircle className='w-5 h-5' />} text='Iniciar sesión' />
                </div>
            </nav>
        )}
    </>);
}
