import {
  Categorias,
  Hero,
  ProductosSlide,
  Testimonials,
} from '../../components';
import { GalleryHome } from '../../components/galleryhome/GalleryHome';
import SingleMap from '../../components/maps/MapsWeb';

export const Home: React.FC = () => {
  return (
    <section className='mx-auto py-2 grid grid-cols-3 gap-y-2 overflow-hidden'>
      <header className='col-span-3'>
        <Hero />
      </header>
      <main className='col-span-3 grid grid-rows-1 grid-cols-2 place-items-center'>
        <ProductosSlide />
        <Categorias />

        <GalleryHome />
        <Testimonials />
        {/* <SingleMap /> */}
      </main>
    </section>
  );
};
