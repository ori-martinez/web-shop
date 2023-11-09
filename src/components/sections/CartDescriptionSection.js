// COMPONENTE
/* Descripción del Carrito */
export const CartDescriptionSection = ({ onClick = () => {} }) => {
    // RETORNO
    return (
        <div className='px-3 pt-3 pb-10 mx-2 mt-4 grid grid-cols-5 bg-white rounded-xl shadow-2xl md:px-6 md:pt-6 md:pb-14 lg:mx-32'>
            <div className='flex items-center col-span-3 text-xs text-gray-400 font-bold uppercase md:text-sm lg:text-base'>Descripción</div>
            <div className='flex items-center justify-end text-xs text-gray-400 font-bold uppercase md:text-sm lg:text-base'>Cant. Prod.</div>
            <div className='flex items-center justify-end text-xs text-gray-400 font-bold uppercase md:text-sm lg:text-base'>Total (USD$)</div>

            <hr className='my-4 col-span-5 border-t border-gray-400 border-dashed' />
            
            <div className="flex items-center col-span-3 text-xs text-gray-800 font-semibold md:text-sm lg:text-base">
                <button
                    className='border-b border-gray-800 border-dotted duration-300 hover:border-solid'
                    onClick={onClick}
                >
                    Unidades en carrito (0)
                </button>
            </div>
            <div className='flex items-center justify-end text-xs text-gray-400 font-bold uppercase md:text-sm lg:text-base'>0</div>
            <div className='flex items-center justify-end text-xs text-gray-400 font-bold uppercase md:text-sm lg:text-base'>0</div>
        </div>
    );
}
