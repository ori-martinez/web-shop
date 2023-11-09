/* React Scroll */
import { Link } from 'react-scroll';

// COMPONENTE
/* Link de Navegación de Sección */
export const LinkSectionButton = ({ title }) => (
    <Link
        className='px-5 py-3 mx-0.5 bg-gray-100 rounded-lg text-gray-800 font-bold cursor-pointer transition duration-300 hover:bg-pink-stronger hover:text-white'
        duration={1500}
        offset={-70}
        smooth={true}
        spy={true}
        to={`${title.toLowerCase()}-section`}
    >
        { title }
    </Link>
);
