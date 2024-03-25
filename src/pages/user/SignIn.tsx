import { Button } from '@nextui-org/react';
import { BoxDiscount } from '../../components/dashboard/BoxDiscount';
import { Dashboard } from '../../components/dashboard/Dashboard';
import { useState } from 'react';
import { Categorias } from '../../components';

export const SignIn = () => {
  const [active, setActive] = useState(false);

  return (
    <section className='w-full bg-black p-4'>
      <div className='grid grid-cols-[auto_1fr] bg-white gap-4 p-4 rounded-xl overflow-hidden'>
        {/* nav aside */}
        <aside className='grid grid-rows-[auto_1fr_auto_1fr_auto_1fr] bg-red-500 gap-4 col-span-1 col-start-1 border-2 border-[#00000048] shadow-inner shadow-[#000000bd] p-2 rounded-xl'>
          <div>
            <h1>titulo 1</h1>
          </div>
          <div className='flex flex-col gap-4 bg-[#cccccc30] rounded-lg p-2'>
            <Button
              onClick={() => setActive(!active)}
              variant='solid'
              fullWidth
              className={`bg-[#ccc] text-[#000000d5] focus:bg-[#000000d6] focus:text-[#fff] font-bold tracking-wider shadow-md scale-105 hover:scale-100 transition-all ease-soft-spring`}
            >
              Categorias
            </Button>
            <Button
              variant='solid'
              fullWidth
              className={`bg-[#ccc] text-[#000000d5] focus:bg-[#000000d6] focus:text-[#fff] font-bold tracking-wider shadow-md scale-105 hover:scale-100 transition-all ease-soft-spring`}
            >
              Categorias
            </Button>
            <Button
              variant='solid'
              fullWidth
              className={`bg-[#ccc] text-[#000000d5] focus:bg-[#000000d6] focus:text-[#fff] font-bold tracking-wider shadow-md scale-105 hover:scale-100 transition-all ease-soft-spring`}
            >
              Categorias
            </Button>
            <Button
              variant='solid'
              fullWidth
              className={`bg-[#ccc] text-[#000000d5] focus:bg-[#000000d6] focus:text-[#fff] font-bold tracking-wider shadow-md scale-105 hover:scale-100 transition-all ease-soft-spring`}
            >
              Categorias
            </Button>
          </div>
          <div>
            <h1>titulo 2</h1>
          </div>

          <div className='flex flex-col gap-4 bg-[#cccccc30] rounded-lg p-2'>
            <Button
              variant='solid'
              fullWidth
              className={`bg-[#ccc] text-[#000000d5] focus:bg-[#000000d6] focus:text-[#fff] font-bold tracking-wider shadow-md scale-105 hover:scale-100 transition-all ease-soft-spring`}
            >
              Categorias
            </Button>
            <Button
              variant='solid'
              fullWidth
              className={`bg-[#ccc] text-[#000000d5] focus:bg-[#000000d6] focus:text-[#fff] font-bold tracking-wider shadow-md scale-105 hover:scale-100 transition-all ease-soft-spring`}
            >
              Categorias
            </Button>
            <Button
              variant='solid'
              fullWidth
              className={`bg-[#ccc] text-[#000000d5] focus:bg-[#000000d6] focus:text-[#fff] font-bold tracking-wider shadow-md scale-105 hover:scale-100 transition-all ease-soft-spring`}
            >
              Categorias
            </Button>
            <Button
              variant='solid'
              fullWidth
              className={`bg-[#ccc] text-[#000000d5] focus:bg-[#000000d6] focus:text-[#fff] font-bold tracking-wider shadow-md scale-105 hover:scale-100 transition-all ease-soft-spring`}
            >
              Categorias
            </Button>
          </div>
          <div>
            <h1>titulo 3</h1>
          </div>

          <div className='flex flex-col gap-4 bg-[#cccccc30] rounded-lg p-2'>
            <Button
              variant='solid'
              fullWidth
              className={`bg-[#ccc] text-[#000000d5] focus:bg-[#000000d6] focus:text-[#fff] font-bold tracking-wider shadow-md scale-105 hover:scale-100 transition-all ease-soft-spring`}
            >
              Categorias
            </Button>
            <Button
              variant='solid'
              fullWidth
              className={`bg-[#ccc] text-[#000000d5] focus:bg-[#000000d6] focus:text-[#fff] font-bold tracking-wider shadow-md scale-105 hover:scale-100 transition-all ease-soft-spring`}
            >
              Categorias
            </Button>
            <Button
              variant='solid'
              fullWidth
              className={`bg-[#ccc] text-[#000000d5] focus:bg-[#000000d6] focus:text-[#fff] font-bold tracking-wider shadow-md scale-105 hover:scale-100 transition-all ease-soft-spring`}
            >
              Categorias
            </Button>
            <Button
              variant='solid'
              fullWidth
              className={`bg-[#ccc] text-[#000000d5] focus:bg-[#000000d6] focus:text-[#fff] font-bold tracking-wider shadow-md scale-105 hover:scale-100 transition-all ease-soft-spring`}
            >
              Categorias
            </Button>
          </div>
        </aside>
        {/* central content */}
        <main className='col-span-1 grid grid-rows-[50px_50px_1fr_50px_1fr] bg-red-500 place-contents-center gap-2 p-1 rounded-xl'>
          {/* <div className='grid grid-rows-3 gap-4 bg-yellow-500 rounded-lg p-2'> */}
          <div className='border-2 border-[#00000048] shadow-inner shadow-[#000000bd] rounded-xl p-2'>
            <h1>Nav</h1>
          </div>
          <div className='flex justify-between items-center bg-white p-2 rounded-lg'>
            <h1 className='text-3xl font-bold text-[#181717e6]'>
              Conoce nuestros productos
            </h1>
            <div className='flex gap-2'>
              <Button variant='bordered' color='primary'>
                Producto
              </Button>
              <Button variant='flat' color='primary'>
                Best
              </Button>
              <Button variant='solid' color='primary'>
                New
              </Button>
            </div>
          </div>
          <div className='bg-white rounded-xl'>
            {active ? <Categorias /> : <BoxDiscount />}
          </div>
          <div className='bg-white p-2 rounded-lg'>
            <h1 className='text-3xl font-bold text-[#181717e6]'>
              Productos mas vendidos
            </h1>
          </div>

          <div className='bg-white rounded-xl'>
            <BoxDiscount />
          </div>
          {/* </div> */}
        </main>
      </div>
    </section>
  );
};
