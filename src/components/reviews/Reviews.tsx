import { Tab, Tabs } from '@nextui-org/react';
import { ListBox } from './ListBox';
import { memo, useState } from 'react';
import { Testimonial } from '../testimonials/Testimonial';

const TestimonialMemo = memo(Testimonial);

export const Reviews = () => {
  const [selected, setSelected] = useState('ver resena');

  return (
    <section>
      <div className='bg-[#ccc]/5 rounded-lg px-2 py-1'>
        <Tabs
          aria-label='options'
          selectedKey={selected}
          defaultSelectedKey={selected}
          onSelectionChange={(key) => setSelected(String(key))}
          size='md'
          color='primary'
          variant='bordered'
        >
          <Tab
            key='crear resena'
            title={
              <div>
                <span>Crear Reseña</span>
              </div>
            }
          />
          <Tab
            key={'ver resenas'}
            title={
              <div>
                <span>Ver Reseñas</span>
              </div>
            }
          />
        </Tabs>
      </div>
      <div>
        {selected === 'crear resena' ? (
          <ListBox />
        ) : (
          <section className='flex flex-col gap-2 mt-4 px-2 py-4 bg-background-color-component/10 rounded-xl'>
            <h1 className='ml-2 font-bold text-[#525252] text-2xl'>
              Productos resenados
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
              <TestimonialMemo />
              <TestimonialMemo />
              <TestimonialMemo />
              <TestimonialMemo />
              <TestimonialMemo />
              <TestimonialMemo />
              <TestimonialMemo />
              <TestimonialMemo />
              <TestimonialMemo />
            </div>
          </section>
        )}
      </div>
      <section className='flex flex-col p-2'>
        <h1 className='font-bold uppercase text-[#303030] ml-2'>
          Top de Productos
        </h1>
        <div className='border-2 border-[#ccc] p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 rounded-xl mt-4'>
          <div className='border border-[#ccc] flex flex-col items-center gap-2 bg-background-color-component/10 w-full p-4 rounded-lg'>
            <h1>Nombre producto</h1>
            <blockquote className='w-full text-center'>
              Comentarios de la resena, Comentarios de la resena, Comentarios de
              la resena, Comentarios de la resena, Comentarios de la resena,
            </blockquote>
            <figcaption className='flex justify-center items-center gap-2'>
              <img
                className='w-10 h-10 rounded-full'
                alt='imgproducto'
                src='https://www.lawebdelcolchon.es/content/uploads/homeshow/2/11_34773ce3f3.jpg'
              />
              <h2>Nombre cliente</h2>
            </figcaption>
          </div>
          <div className='border border-[#ccc] flex flex-col items-center gap-2 bg-background-color-component/10 w-full p-4 rounded-lg'>
            <h1>Nombre producto</h1>
            <blockquote className='w-full text-center'>
              Comentarios de la resena, Comentarios de la resena, Comentarios de
              la resena, Comentarios de la resena, Comentarios de la resena,
            </blockquote>
            <figcaption className='flex justify-center items-center gap-2'>
              <img
                className='w-10 h-10 rounded-full'
                alt='imgproducto'
                src='https://www.lawebdelcolchon.es/content/uploads/homeshow/2/11_34773ce3f3.jpg'
              />
              <h2>Nombre cliente</h2>
            </figcaption>
          </div>
          <div className='border border-[#ccc] flex flex-col items-center gap-2 bg-background-color-component/10 w-full p-4 rounded-lg'>
            <h1>Nombre producto</h1>
            <blockquote className='w-full text-center'>
              Comentarios de la resena, Comentarios de la resena, Comentarios de
              la resena, Comentarios de la resena, Comentarios de la resena,
            </blockquote>
            <figcaption className='flex justify-center items-center gap-2'>
              <img
                className='w-10 h-10 rounded-full'
                alt='imgproducto'
                src='https://www.lawebdelcolchon.es/content/uploads/homeshow/2/11_34773ce3f3.jpg'
              />
              <h2>Nombre cliente</h2>
            </figcaption>
          </div>
          <div className='border border-[#ccc] flex flex-col items-center gap-2 bg-background-color-component/10 w-full p-4 rounded-lg'>
            <h1>Nombre producto</h1>
            <blockquote className='w-full text-center'>
              Comentarios de la resena, Comentarios de la resena, Comentarios de
              la resena, Comentarios de la resena, Comentarios de la resena,
            </blockquote>
            <figcaption className='flex justify-center items-center gap-2'>
              <img
                className='w-10 h-10 rounded-full'
                alt='imgproducto'
                src='https://www.lawebdelcolchon.es/content/uploads/homeshow/2/11_34773ce3f3.jpg'
              />
              <h2>Nombre cliente</h2>
            </figcaption>
          </div>
        </div>
      </section>
    </section>
  );
};
