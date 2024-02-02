'use client';
import React from 'react';
import img from '../../assets/herosection.jpg';

interface Data {
  name: string;
  id: number;
  prefetchProductsByCat?: (id: number) => void;
  handleRoute: () => void;
}

export const Categoria: React.FC<Data> = ({
  name,
  id,
  prefetchProductsByCat,
  handleRoute,
}) => {
  return (
    <div className='group max-w-full h-auto relative z-40 overflow-hidden animate-fadeIn transition-all delay-150 ease-out active:opacity-75  rounded-xl shadow-sm shadow-slate-400'>
      <img
        src={img}
        alt='Product Image'
        className='transform transition ease-out group-hover:scale-110 rounded-xl h-auto max-w-full'
      />
      <div className='absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0' />
      <div className='absolute inset-0 grid place-items-center grid-cols-6 grid-rows-4 grid-flow-col-dense'>
        <button
          onMouseEnter={() =>
            prefetchProductsByCat && prefetchProductsByCat(id)
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
