/* Icons */
import { BsWhatsapp } from 'react-icons/bs';
import { FaDollarSign } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md'
/* Hooks */
import { useEffect, useState } from 'react';

// COMPONENTE
/* Descripción del Carrito */
export const CartDescriptionSection = ({ onClick = () => {} }) => {
    // CONSTANTES
    const [ cart, setCart ] = useState([]);         /* Carrito */
    const [ totals, setTotals ] = useState({        /* Totales del Carrito */
        amount: 0,
        qty: 0,
        units: 0,
    });

    // FUNCIONES
    /* Obtención de los Totales del Carrito */
    const getCartTotal = () => {
        // VARIABLES
        /* Carrito del localStorage */
        let lsCart =  JSON.parse(localStorage.getItem('cart')) === null ? [] : JSON.parse(localStorage.getItem('cart'));        
        
        if (lsCart.length !== 0) {
            // VARIABLES
            let newAmount = 0;          /* Nuevo Monto Total */
            let newQty = 0;             /* Nueva Cantidad Total */

            lsCart.forEach((product) => {
                newAmount += product.amount;
                newQty += product.qty;
            });

            setCart(lsCart);
            setTotals({
                amount: newAmount,
                qty: newQty,
                units: lsCart.length,
            });
        }
    }

    /* Eliminación de un Producto del Carrito */
    const deleteProd = (title) => {
        if (window.confirm(`Está seguro de eliminar ${title} del carrito?`)) {
            // VARIABLES
            let newCart = cart.filter((product) => product.title !== title);        /* Nuevo Carrito */
            let newAmount = 0;                                                      /* Nuevo Monto Total */
            let newQty = 0;                                                         /* Nueva Cantidad Total */

            newCart.forEach((product) => {
                newAmount += product.amount;
                newQty += product.qty;
            });

            setCart(newCart);
            setTotals({
                amount: newAmount,
                qty: newQty,
                units: newCart.length,
            });
            localStorage.setItem('cart', JSON.stringify(newCart));
        }
    }

    /* Cotización por Whatsapp */
    const getCartCotizacion = () => {
        // VARIABLES
        /* Productos para el Envío por Whatsapp */
        let prodsWs = '';

        cart.forEach((product) => prodsWs += `-%20${product.title.replace(' ', '%20')}%20(${product.color})%20Cant.%20${product.qty}%20~%20Monto:%20${product.amount}$%0A`);

        window.open(`https://wa.me/584129743618/?text=*Bienvenid@%20a%20AHEGAO*%0ATu%20Pedido%0A%0A${prodsWs}%0A*TOTAL:*%20${totals.amount}$`, '_blank');
    }

    useEffect(() => {
        getCartTotal();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // RETORNO
    return (
        <div className='px-3 pt-3 pb-10 mx-2 mt-4 grid grid-cols-5 bg-white rounded-xl shadow-2xl md:px-6 md:pt-6 md:pb-14 lg:mx-72'>
            <div className='flex items-center col-span-3 text-xs text-gray-400 font-bold uppercase md:text-sm lg:text-base'>Descripción</div>
            <div className='flex items-center justify-end text-xs text-gray-400 font-bold uppercase md:text-sm lg:text-base'>Cant. Prod.</div>
            <div className='flex items-center justify-end text-xs text-gray-400 font-bold uppercase md:text-sm lg:text-base'>Total (USD$)</div>

            <hr className='my-4 col-span-5 border-t border-gray-400 border-dashed' />

            {cart.map((product, index) => (<>
                <div className={`py-1 flex items-center flex-wrap col-span-3 ${index !== 0 && 'border-t'} text-xs text-gray-800 md:text-sm lg:text-base`}>
                    <span className='inline-flex items-center'>
                        <button className="mx-1 focus:outline-none" onClick={() => deleteProd(product.title)}>
                            <MdDelete className='w-5 h-5 text-red-500 duration-300 hover:text-red-600' />
                        </button> 
                        
                        { product.title } <span className='ml-1.5 text-gray-400 font-medium'>({ product.color })</span>
                    </span>
                </div>
                <div className={`p-1 flex items-center justify-end ${index !== 0 && 'border-t'} text-xs text-gray-800 md:text-sm lg:text-base`}>{ product.qty }</div>
                <div className={`p-1 flex items-center justify-end ${index !== 0 && 'border-t'} text-xs text-gray-400 md:text-sm lg:text-base`}>
                    <FaDollarSign className='ml-2 w-3 h-3' /> { product.amount.toFixed(2) }
                </div>
            </>))}

            {cart.length !== 0 && (<hr className='my-4 col-span-5 border-t border-gray-400 border-dashed' />)}

            <div className="flex items-center col-span-3 text-xs text-gray-800 font-semibold md:text-sm lg:text-base">
                <button
                    className='border-b border-gray-800 border-dotted duration-300 hover:border-solid'
                    onClick={onClick}
                >
                    Unidades en carrito ({ totals.units })
                </button>
            </div>
            <div className='flex items-center justify-end text-xs text-gray-400 font-bold md:text-sm lg:text-base'>{ totals.qty }</div>
            <div className='flex items-center justify-end text-xs text-gray-400 font-bold md:text-sm lg:text-base'>
                <FaDollarSign className='ml-2 w-4 h-4' /> { totals.amount.toFixed(2) }
            </div>

            {cart.length !== 0 && (
                <div className='mt-4 flex items-center justify-end col-span-5'>
                    <button
                        className='px-4 py-2 bg-green-400 rounded-lg text-white duration-300 hover:bg-green-500'
                        onClick={() => getCartCotizacion()}
                        title='Cotización para WhatsApp'
                    >
                        <BsWhatsapp className='w-5 h-5' />
                    </button>
                </div>
            )}
        </div>
    );
}
