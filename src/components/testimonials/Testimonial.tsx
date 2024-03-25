import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Testimonial = () => {
  return (
    <figure className='flex flex-col border items-center justify-center p-4 text-center bg-gray-100 hover:bg-white transition-all ease-in-out delay-150 duration-150 border-[#ccc] rounded-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700'>
      <blockquote className='max-w-2xl justify-center mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400'>
        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
          nombre del producto
        </h3>
        <p className='my-4 w-full'>
          Comentarios de la reseña, Comentarios de la reseña, Comentarios de la
          reseña, Comentarios de la reseña, Comentarios de la reseña
        </p>
      </blockquote>
      <figcaption className='flex items-center justify-center '>
        <LazyLoadImage
          className='img-lazy rounded-full w-9 h-9'
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png'
          alt='profile picture'
        />
        <div className='space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3'>
          <div>Nombre del cliente</div>
          <div className='text-sm text-gray-500 dark:text-gray-400'>
            por definir
          </div>
        </div>
      </figcaption>
    </figure>
  );
};
