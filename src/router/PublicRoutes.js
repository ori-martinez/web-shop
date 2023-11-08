/* Router */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
/* Pages */
import { ProductosIndex } from '../pages/productos/ProductosIndex';

// ROUTER
/* Rutas Públicas */
export const PublicRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<ProductosIndex />} path='/'/>
        </Routes>
    </BrowserRouter>
);
