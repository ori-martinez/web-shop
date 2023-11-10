/* Router */
import { Link } from 'react-router-dom';
/* Components */
import { InputSearch } from './inputs/InputSearch';
import { ProductModal } from './modals/ProductModal';
import { SearchModal } from './modals/SearchModal';
/* import { TextButton } from './buttons/TextButton'; */
/* Icons */
import { BiLogoInstagram/* , BiUserCircle */ } from 'react-icons/bi';
/* Constants */
import { allProds } from '../constants/productos';
/* Hooks */
import { useEffect, useState } from 'react';

// COMPONENTE
/* Barra de Navegación */
export const Navbar = () => {
    // CONSTANTES
    const [ loading, setLoading ] = useState(false);                        /* Estado de Carga */
    const [ open, setOpen ] = useState(false);                              /* Estado de Apertura del Modal del Buscador */
    const [ showScrollMenu, setShowScrollMenu] = useState(false);           /* Estado de Muestra del Menú */
    const [ search, setSearch ] = useState('');                             /* Valor del Búscador */
    const [ searchResult, setSearchResult ] = useState([]);                 /* Resultados de la Búsqueda */
    const [ openModal, setOpenModal ] = useState(false);                    /* Estado de Apertura del Modal de Producto */
    const [ selectedProd, setSelectedProd ] = useState([]);                 /* Producto Seleccionado */

    // FUNCIONES
    /* Obtención del Menú Fijo */
    const stickyNavbar = () => { 
        if (window !== undefined) {
            window.scrollY > 300 ? setShowScrollMenu(true) : setShowScrollMenu(false);
        }
    }

    /* Manejador del Buscador */
    const onChange = (e) => setSearch(e.target.value);

    /* Manejador del Click */
    const onClick = (inputModal = false) => {
        if (inputModal) {
            setLoading(true);
            setSearchResult(
                search === '' ? [] : allProds.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
            );
            setTimeout(() => setLoading(false), 1000);
        }
        else {
            if (search !== '') {
                setOpen(!open);
                setSearchResult(allProds.filter((product) => product.title.toLowerCase().includes(search.toLowerCase())));
            }
        }
    }

    /* Manejador del Modal para el Producto */
    const handleProductModal = (product) => {
        setOpenModal(!openModal);
        setSelectedProd(product);
    }

    useEffect(() => {
        window.addEventListener('scroll', stickyNavbar);

        // RETORNO
        return () => window.removeEventListener('scroll', stickyNavbar);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // RETORNO
    return (<>
        <div className="-mt-[200px] overflow-x-hidden">
            <div className="ml-[-50%] w-[200%] h-[500px] rounded-b-[100%] bg-pink-200">
                <nav className='pt-56 flex items-center justify-center'>
                    <div className='w-[48%] flex flex-col'>
                        <div className='w-full grid grid-cols-3'>
                            <div className='col-span-2 md:col-span-1 md:col-start-2 lg:col-start-2'>
                                <InputSearch onChange={onChange} onClick={() => onClick()} search={search} />
                            </div>

                            <div className='flex justify-center'>
                                {/* <TextButton icon={<BiUserCircle className='w-5 h-5' />} text='Iniciar sesión' /> */}
                            </div>
                        </div>
                        <div className='mx-12 flex justify-around flex-wrap md:mx-24 lg:mx-40'>
                            <img alt='Logo' className='w-28 h-auto md:w-36' src='https://static.whataform.com/avatar/avatar_d61bce3bef7ff7b_5520ec23cf2e8e0492339cd1f521b67fc1fb4b29.webp' title='Visitar mi perfil'/>

                            <div className='mt-2 md:mt-8 flex flex-col'>
                                <h1 className='text-gray-700 font-bold md:text-xl'>AHEGAO</h1>
                                    
                                <p className='text-sm text-gray-500 md:text-base'>Tienda virtual | Caracas / La Guaira - Vzla <sub>VE</sub></p>
                            </div>

                            <Link className='mt-4 md:mt-12' target="_blank" title='Instagram' to='https://www.instagram.com/ahegaove'>
                                <BiLogoInstagram className='w-6 h-6 text-gray-700'/>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

        {showScrollMenu && (
            <nav className='py-2 w-full fixed top-0 z-10 grid grid-cols-4 place-items-center bg-white shadow-md'>
                <img alt='Logo' className='w-8 md:w-12 h-auto' src='https://static.whataform.com/avatar/avatar_d61bce3bef7ff7b_5520ec23cf2e8e0492339cd1f521b67fc1fb4b29.webp'/>

                <div className='col-span-2'>
                    <InputSearch onChange={onChange} onClick={() => onClick()} search={search} />
                </div>
                <div className='flex justify-end'>
                    {/* <TextButton icon={<BiUserCircle className='w-5 h-5' />} text='Iniciar sesión' /> */}
                </div>
            </nav>
        )}

        <SearchModal
            arrProds={searchResult}
            handleModal={handleProductModal}
            loading={loading}
            onChange={onChange}
            onClick={() => onClick(true)}
            open={open}
            setOpen={setOpen}
            search={search}
        />

        {selectedProd.length !== 0 && (
            <ProductModal
                collageImages={selectedProd.collageImages}
                colors={selectedProd.colors}
                description={selectedProd.description}
                open={open}
                setOpen={setOpen}
                price={selectedProd.price}
                setSelectedProd={setSelectedProd}
                title={selectedProd.title}
            />
        )}
    </>);
}
