'use client';

import React, { memo, useCallback, useMemo, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {
  useCategoriaId,
  usePrefetchCatByPro,
  usePrefetchProduct,
} from '../../hooks';
import { Producto, ProductoSk } from '..';
import { type ProductsByCat } from '../../interfaces';
import { v4 as uuidv4 } from 'uuid';

const ProductoMemo = memo(Producto);

interface Props extends ProductsByCat {
  offer?: boolean;
  prefetchProduct?: (idp: number, ido: number) => void;
}

export const ProductosSlide: React.FC = () => {
  const [isCatId, setIsCatId] = useState('1');
  const { categoriaIdQuery } = useCategoriaId(isCatId);
  const { prefetchProduct } = usePrefetchProduct();
  const { prefetchProductsByCat } = usePrefetchCatByPro();
  const products = useMemo(() => {
    return categoriaIdQuery?.data?.data?.products_by_cat?.slice(0, 20);
  }, [categoriaIdQuery, categoriaIdQuery.isLoading, categoriaIdQuery.error]);

  //
  const items = useMemo(() => {
    return products?.map((obj: Props) => (
      <div key={uuidv4()} className='p-2'>
        <ProductoMemo
          attribute_price={obj.attribute_price}
          proname={obj.proname}
          description={obj.description}
          id_category={isCatId.toString()}
          id_o={obj.id_o}
          cat_name={obj.cat_name}
          idp={obj.idp}
          offer={true}
          prefetchProduct={prefetchProduct}
        />
      </div>
    ));
  }, [products]);

  // Manejador del id de la categoria
  const handleCatid = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setIsCatId(e.currentTarget.id);
    },
    [isCatId]
  );

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };

  return (
    <section className='col-span-2 border border-[#cccccc] bg-[#f5f5f5] shadow hover:bg-white mx-4 rounded-xl py-4 px-1 flex flex-col items-center w-full max-w-xs sm:w-full sm:max-w-2xl sm:px-4 lg:w-full lg:max-w-7xl lg:px-0.5 my-4'>
      <h1 className='ml-4 text-start w-full font-bold text-2xl text-[#333333] pb-4'>
        Productos
      </h1>{' '}
      <nav className='mb-4 w-full flex justify-start text-sm font-medium text-center text-gray-500  dark:text-gray-400 dark:border-gray-700'>
        <ul className='flex flex-wrap -mb-px'>
          <li className='me-2'>
            <button
              onMouseEnter={() => prefetchProductsByCat(isCatId)}
              onClick={handleCatid}
              id='1'
              className='inline-block p-4 font-semibold focus:text-primary border-b-2 focus:border-primary rounded-t-lg dark:text-blue-500 dark:border-blue-500'
            >
              Colchones
            </button>
          </li>
          <li className='me-2'>
            <button
              onMouseEnter={() => prefetchProductsByCat('9')}
              onClick={handleCatid}
              id='9'
              className='inline-block p-4 font-semibold focus:text-primary border-b-2 focus:border-primary rounded-t-lg dark:text-blue-500 dark:border-blue-500'
              aria-current='page'
            >
              Cabeceros
            </button>
          </li>
          <li className='me-2'>
            <button
              onMouseEnter={() => prefetchProductsByCat('50')}
              onClick={handleCatid}
              id='50'
              className='inline-block p-4 font-semibold focus:text-primary border-b-2 focus:border-primary rounded-t-lg dark:text-blue-500 dark:border-blue-500'
            >
              Canapés Abatibles
            </button>
          </li>
        </ul>
      </nav>
      {categoriaIdQuery.isLoading || categoriaIdQuery.isFetching ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {[1, 2].map((_) => (
            <div key={uuidv4()} className='w-full'>
              <ProductoSk key={uuidv4()} />
            </div>
          ))}
        </div>
      ) : (
        <AliceCarousel
          items={items}
          autoPlay
          disableDotsControls={false}
          autoPlayInterval={4000}
          infinite
          animationType='fadeout'
          animationDuration={500}
          controlsStrategy='alternate'
          disableButtonsControls
          mouseTracking
          responsive={responsive}
        />
      )}
    </section>
  );
};
