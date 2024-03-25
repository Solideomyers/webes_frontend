'use client';
import React from 'react';
import img from '../../assets/img-temporary/cabecero_2.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';
interface Data {
  name: string;
  id: number;
  idimg: string;
  prefetchProductsByCat?: (id: string) => void;
  handleRoute: () => void;
  setCatId: (key: string | number) => void;
}

export const Categoria: React.FC<Data> = ({
  name,
  id,
  idimg,
  prefetchProductsByCat,
  handleRoute,
}) => {
  return (
    <div className='group aspect-square animate-fadeIn max-w-full h-auto relative z-40 overflow-hidden transition-all transform-gpu delay-150 ease-out active:opacity-75 rounded-xl scale-100 hover:scale-105 shadow-xl shadow-[#53525263]'>
      <LazyLoadImage
        src={img}
        alt='Product img'
        className='img-lazy transform transition ease-out group-hover:scale-110 rounded-xl h-full w-full'
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          e.currentTarget.src = 'https://dummyimage.com/300/bababa/fff.png';
        }}
      />

      <div className='absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0' />
      <div className='absolute inset-0 grid place-items-center grid-cols-6 grid-rows-4 grid-flow-col-dense'>
        <button
          role='button'
          onMouseEnter={() =>
            prefetchProductsByCat && prefetchProductsByCat(String(id))
          }
          onClick={handleRoute}
          className='rounded-xl col-span-4 col-start-2 row-start-2 row-span-2 w-full max-w-sm whitespace-pre-wrap backdrop-blur-3xl bg-white/90 drop-shadow-2xl border border-[#ccc] px-4 py-3 text-xs font-semibold uppercase tracking-wide transition ease-out group-hover:bg-primary group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90'
        >
          {name}
        </button>
      </div>
    </div>
  );
};
