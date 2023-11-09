// COMPONENTE
/* Botón */
export const TextButton = ({ hasHover = false, icon, onClick = () => {}, text}) => (
    <button
        className={`px-4 py-2 flex items-center justify-center ${hasHover ? '' : 'bg-pink-stronger'} rounded-md  ${hasHover ? '' : 'text-white'} font-semibold`}
        onClick={onClick}
    >
        { icon } <span className='ml-2 hidden lg:block'>{ text }</span>    
    </button>
);
