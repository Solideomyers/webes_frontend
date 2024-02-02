import { FooterPie } from './FooterPie';
import { Enlaces } from './Enlaces';
import { FooterHead } from './FooterHead';
export const Footer = () => {
  return (
    <footer className='p-4 bg-background-color sm:p-6 dark:bg-gray-800'>
      <div className='mx-auto max-w-screen-xl'>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />

        <div
          aria-label='logo y nombre'
          className='sm:flex sm:flex-col sm:gap-4  md:flex md:justify-between'
        >
          {/*  logo y nombre*/}
          <FooterHead />
          {/* enlaces */}
          <Enlaces />
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        {/*pie de la pagina  */}
        <FooterPie />
      </div>
    </footer>
  );
};
