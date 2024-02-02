import { Outlet, useLocation } from 'react-router-dom';
import { CaretCircleDoubleUp } from 'phosphor-react';
import { createContext } from 'react';
import { ProductProvider } from './context/ProductContext';
import { Banner, Breadcrumbs, Footer, NavBar } from './components';
import { useFloatBtn } from './hooks';

export const contextStorage = createContext({});
function App() {
  const location = useLocation();
  const goUp = useFloatBtn({
    icon: <CaretCircleDoubleUp size={25} />,
    variant: 'scroll',
    contenedor: false,
  });

  return (
    <ProductProvider>
      <section>
        <nav className='z-50 sticky top-0 flex flex-col gap-0 drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)]'>
          <Banner />
          <NavBar />
        </nav>
        <main className='grid grid-cols-1 mx-auto px-1'>
          {location.pathname !== '/' ? <Breadcrumbs /> : null}
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
        {goUp}
      </section>
    </ProductProvider>
  );
}
export default App;
