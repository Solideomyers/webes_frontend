'use client';
import React, { memo, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Categoria, CategoriaSk, LoadingIcon } from '..';
import {
  useCategorias,
  useCustomNavigate,
  usePrefetchCatByPro,
} from '../../hooks';
import { type Datum } from '../../interfaces';

const CategoriaSkMemo = memo(CategoriaSk);

export const Categorias: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0, delay: 1000 });
  const { categoriasInfiniteQuery } = useCategorias();
  const { prefetchProductsByCat } = usePrefetchCatByPro();
  const { handleRoute } = useCustomNavigate();
  const categoriasData = categoriasInfiniteQuery?.data;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    categoriasInfiniteQuery.fetchNextPage();
  }, []);

  useEffect(() => {
    if (inView) {
      categoriasInfiniteQuery.fetchNextPage();
    }
  }, [inView, categoriasInfiniteQuery.hasNextPage]);

  if (categoriasInfiniteQuery.isLoading || categoriasInfiniteQuery.isPending) {
    return (
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-4'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i: number) => (
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

  return (
    <section className='bg-white dark:bg-gray-900 dark:text-gray-100 mx-10'>
      <h1 className='font-bold my-4 text-2xl text-neutral-900'>Categorías</h1>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        {categoriasData?.pages.map((page, i: number) =>
          page?.data?.data.map((cat: Datum, j: number) => (
            <div key={`${i}-${j}`} className='grid gap-4'>
              <Categoria
                prefetchProductsByCat={prefetchProductsByCat}
                handleRoute={() => handleRoute('/categoria/', cat.id)}
                id={cat.id}
                name={cat.name}
              />
            </div>
          ))
        )}
      </div>
      <button
        ref={ref}
        className={`${
          categoriasInfiniteQuery.data?.pages.length === 0 ? 'hidden' : ''
        }`}
      >
        {categoriasInfiniteQuery.isFetchingNextPage ? <LoadingIcon /> : ''}
      </button>
    </section>
  );
};
