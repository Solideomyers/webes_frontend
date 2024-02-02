'use client';

export const CategoriaSk = () => {
  return (
    <div className='group max-w-full h-auto relative z-40 overflow-hidden animate-pulse transition-all delay-150 ease-out bg-opacity-35  rounded-3xl shadow-sm shadow-slate-400'>
      <img
        src='https://dummyimage.com/300/bababa/fff.png'
        alt='Product Image'
        className='transform transition ease-out group-hover:scale-110 rounded-xl h-auto max-w-full'
      />
      <div className='absolute inset-0 bg-gray-100 bg-opacity-25 transition ease-out group-hover:bg-opacity-0' />
      <div className='absolute inset-0 grid place-items-center grid-cols-6 grid-rows-4 grid-flow-col-dense'>
        <button className='rounded-xl col-span-4 col-start-2 row-start-2 row-span-2 w-full max-w-sm whitespace-pre-wrap backdrop-blur-3xl bg-gray-50/90 drop-shadow-2xl border border-[#ccc] px-6 py-3 text-xs font-semibold uppercase tracking-wide dark:border-gray-800 dark:bg-gray-900/90'>
          {' '}
        </button>
      </div>
    </div>
  );
};
