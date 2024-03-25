import { Button } from '@nextui-org/react';
import { GridBoxOne } from './GridBoxOne';
import { GridBoxTwo } from './GridBoxTwo';
import { GridBoxThird } from './GridBoxThird';
import { GridBoxFour } from './GridBoxFour';
export const BoxDiscount: React.FC = () => {
  return (
    <section className='col-span-2 w-full'>
      <div className='grid grid-rows-2 lg:grid-cols-2 gap-2 '>
        {/* rows */}
        <div className='row-span-2 lg:row-start-1 py-0 lg:col-span-1 grid grid-cols-2 gap-2 rounded-xl w-full '>
          <GridBoxOne
            title='50% OFF'
            name1='Cabecero'
            name2='Tapizado Julie'
            price={300.0}
            titleButton='Comprar'
          />
          <GridBoxTwo
            title='20% OFF'
            name2='Colchones'
            titleButton='Ver Ofertas'
          />
        </div>
        {/* cols */}
        <div className='row-span-2 row-start-2 lg:col-span-1 lg:row-start-1 lg:col-start-2 grid lg:grid-cols-2 gap-2 rounded-xl w-full py-0'>
          <GridBoxThird
            title='Cabecero'
            name1='Tapizado Julie'
            titleButton='Comprar'
          />
          {/* <div
            className={`bg-[url('src/assets/img-temporary/cabecero_2.jpg')]  border border-[#cccc] shadow-sm bg-center bg-no-repeat bg-cover grid place-items-center w-full rounded-xl `}
          >
            <div className='flex flex-col border p-4'>
              <h1 className='uppercase text-white font-bold text-heading-4 text-tiny '>
                50% OFF
              </h1>
              <span>300.00</span>
            </div>
            <Button variant='solid' color='primary' size='md' className='mb-2'>
              fila2
            </Button>
          </div> */}

          <GridBoxFour title='Colchones' titleButton='Ir a la categoria' />
        </div>
      </div>
    </section>
  );
};
