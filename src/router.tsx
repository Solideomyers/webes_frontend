import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Breadcrumbs, Cart } from './components';
import {
  CategoriaView,
  ContactView,
  Home,
  NotfoundView,
  ProductoView,
} from './pages';
import { ReviewsView } from './pages/reviews/Reviews';
import { SignIn } from './pages/user/SignIn';
import { PoliticaPage } from './pages/politica/PoliticaPage';
import { About } from './pages/aboutus/About';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotfoundView />,
    children: [
      {
        index: true,
        element: <Home />,
        id: 'home',
      },
      {
        path: '/categoria/:id',
        element: <CategoriaView />,
        id: 'categoriabyid',
      },
      {
        path: '/categoria/:id/producto/:idp/:ido',
        element: <ProductoView />,
        id: 'productobyidp',

        errorElement: (
          <div>
            <h1>Error</h1>
          </div>
        ),
      },
      {
        path: '/cart',
        element: <Cart />,
        id: 'cesta',
      },
      {
        path: '/contact',
        element: <ContactView />,
      },
      {
        path: '/reviews',
        element: <ReviewsView />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/politica',
        element: <PoliticaPage />,
      },
      {
        path: '/aboutus',
        element: <About />,
      },
    ],
  },
  {
    path: '*',
    element: (
      <>
        <h1>error page 2</h1>
      </>
    ),
  },
  {
    path: '*',
    element: <Breadcrumbs />,
  },
]);
