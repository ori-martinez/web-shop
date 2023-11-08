/* Icons */
import { FaSearch } from 'react-icons/fa';

// COMPONENTE
/* Input para un Buscador */
export const InputSearch = ({ name = 'search', onChange, placeholder = 'Buscador', search }) => (
    <div className='relative flex items-center justify-center'>
        <input 
            autoComplete='off'
            className='pl-4 pr-8 w-full h-10 border border-gray-300 rounded-md shadow-sm focus:ring-transparent focus:outline-none placeholder:font-semibold'
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            type='search'
            value={search}
        />

        {/* Botón de Acción */}
        <button className='px-4 py-[0.7rem] absolute bg-gray-50 border border-gray-300 rounded-r-md text-xl right-0'>
            <FaSearch className='h-4 w-4 text-gray-400' />
        </button>
    </div>
);
