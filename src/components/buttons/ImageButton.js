/* Components */
import { CategoriaModal } from "../modals/CategoriaModal";
/* Hooks */
import { useState } from "react";

// COMPONENTE
/* Botón con Imagen */
export const ImageButton = ({ arrProds, srcImage, title }) => {
    
    const [ open, setOpen ] = useState(false);

    // RETORNO
    return (<>
        <button className="mx-5 my-2.5 relative" onClick={() => setOpen(!open)}>
            <span className="w-20 h-20 absolute -top-2 -left-2 border-4 border-gray-200 rounded-full md:w-32 md:h-32"></span>

            <div className="w-16 h-16 rounded-full overflow-hidden md:w-28 md:h-28">
                <img alt={title} src={srcImage} />
            </div>
            <div className="mt-4 text-sm text-gray-600 text-center font-semibold">{ title }</div>
        </button>

        <CategoriaModal arrProds={arrProds} open={open} setOpen={setOpen} title={title} />
    </>);
}
