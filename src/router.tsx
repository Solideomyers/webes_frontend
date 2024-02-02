import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import {
  CategoriaPage,
  ContactPage,
  HomePage,
  NotfoundPage,
  ProductoPage,
} from './pages';
import { Breadcrumbs, Cart } from './components';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
        id: 'home',
      },
      {
        path: '/categoria/:id',
        element: <CategoriaPage />,
        id: 'categoriabyid',
      },
      {
        path: '/categoria/:id/producto/:idp/:ido',
        element: <ProductoPage />,
        id: 'productobyidp',
      },
      {
        path: '/cart',
        element: <Cart />,
        id: 'cesta',
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotfoundPage />,
  },
  {
    path: '*',
    element: <Breadcrumbs />,
  },
]);
