'use client';
import React, { Fragment, memo, useEffect, useMemo } from 'react';
import { useCustomNavigate, usePrefetchCatByPro } from '../../hooks';
import { type Datum } from '../../interfaces';
import { Categoria } from './Categoria';
import { CategoriaSk } from '../skeleton/CategoriaSk';
import { Button } from '@nextui-org/react';
import { useProductContext } from '../../context/ProductContext';
import { GridBoxOne } from '../dashboard/GridBoxOne';
import { v4 as uuidv4 } from 'uuid';
const CategoriaSkMemo = memo(CategoriaSk);
const CategoriaMemo = memo(Categoria);

export const Categorias: React.FC = () => {
  const { categoriasInfiniteQuery, setCatId } = useProductContext();
  const { prefetchProductsByCat } = usePrefetchCatByPro();
  const { handleRoute } = useCustomNavigate();
  const categoriasData = useMemo(
    () => categoriasInfiniteQuery?.data,
    [categoriasInfiniteQuery.data]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (categoriasInfiniteQuery.isLoading) {
    return (
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-4'>
        {[1, 2, 3, 4, 5, 6].map((_, i: number) => (
          <div key={i} className='w-full'>
            <CategoriaSkMemo key={i} />
          </div>
        ))}
      </div>
    );
  }

  if (categoriasInfiniteQuery.error) {
    return <div>Error al carga categorías</div>;
  }

  const handleSelectionChange = (key: React.Key) => {
    setCatId(String(key));
  };
  // const esPar = (num: number): boolean => num % 2 === 0;
  return (
    <section className='col-span-2 bg-white dark:bg-gray-900 dark:text-gray-100 mx-10'>
      <h1 className='font-bold mt-2 mb-1 text-2xl text-neutral-900'>
        Categorías
      </h1>
      <hr className='mb-3 border border-gray-300 ' />
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {categoriasData?.pages.map((page) => (
          <Fragment key={uuidv4()}>
            {page?.data?.data.map((cat: Datum, i) => (
              <div key={i} className={`gap-2`}>
                <CategoriaMemo
                  idimg={uuidv4()}
                  prefetchProductsByCat={prefetchProductsByCat}
                  handleRoute={() => handleRoute('/categoria/', cat.id)}
                  id={cat.id}
                  setCatId={handleSelectionChange}
                  name={cat.name}
                />
              </div>
            ))}
            <div className='grid grid-cols-subgrid col-span-1 sm:col-span-3 lg:col-span-2 lg:grid-flow-col-dense'>
              <div className='row-span-2 col-span-1 lg:row-start-1 py-0 sm:col-span-3 lg:col-span-2 grid grid-cols-2 gap-2 rounded-xl w-full '>
                <GridBoxOne
                  title='50% OFF'
                  name1='Cabecero'
                  name2='Tapizado Julie'
                  price={300.0}
                  titleButton='Comprar'
                  isolated={true}
                />
              </div>
            </div>
          </Fragment>
        ))}
      </div>
      <Button
        variant='solid'
        color='primary'
        radius='lg'
        role='button'
        onClick={() => categoriasInfiniteQuery.fetchNextPage()}
        className={`${
          categoriasInfiniteQuery.data?.pages.length === 4 ? 'hidden' : ''
        } my-2`}
      >
        Cargar mas
      </Button>

      {/* <Galeries /> */}
    </section>
  );
};
