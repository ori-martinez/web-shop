import { useEffect, useState } from 'react';
import { InputSearch } from './inputs/InputSearch';

// COMPONENTE
/* Barra de Navegación */
export const Navbar = () => {
    // RETORNO
    return (
        <nav className='px-20 py-4 -mx-12 h-40 bg-pink-baby rounded-b-full'>
            <div className='flex flex-col'>
                <div className='w-full grid grid-cols-3'>
                    <div className='col-start-2'>
                        <InputSearch />
                    </div>
                </div>
                <div className='flex justify-end'>
                    
                </div>
            </div>
        </nav>
    )
}
