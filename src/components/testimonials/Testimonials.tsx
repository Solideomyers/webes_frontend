import { ReviewHead, Testimonial } from '..';
import { Button, Link } from '@nextui-org/react';

export const Testimonials = () => {
  return (
    <section className='py-4 col-span-2'>
      <div className='border-b border-[#ccc] bg-white shadow flex flex-col sm:justify-between md:flex md:flex-row gap-2 w-full py-4 px-4 rounded-xl'>
        <ReviewHead />
        <div className='flex gap-2 justify-end w-full max-w-md'>
          <Button as={Link} href='/reviews' variant='solid' color='primary'>
            Deja tu reseña
          </Button>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 mt-2 gap-2'>
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </section>
  );
};
