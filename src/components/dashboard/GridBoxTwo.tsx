import { Button } from '@nextui-org/react';
import React from 'react';

interface Props {
  title: string;
  name1?: string;
  name2?: string;
  price?: number;
  titleButton: string;
}

export const GridBoxTwo: React.FC<Props> = ({
  title,
  name1,
  name2,
  price,
  titleButton,
}) => {
  return (
    <div className='bg-[url("src/assets/img-temporary/cabecero_4.jpg")] bg-center bg-no-repeat bg-cover border border-[#cccc] shadow-sm flex flex-col gap-2 justify-end md:bg-black p-2 w-full rounded-xl col-start-2 lg:row-start-2 lg:col-span-2'>
      <div className='flex flex-col items-start sm:items-end bg-gradient-to-r sm:bg-gradient-to-l from-[#fff] border border-[#fff] w-2/2 rounded-xl shadow-inner shadow-[#000000] p-4'>
        <h1 className='uppercase text-[#121212ca] drop-shadow-2xl font-bold text-4xl '>
          {title}
        </h1>
        <span className=' text-primary italic text-xl drop-shadow-3xl font-extrabold uppercase'>
          {name1 ? name1 : ''}
        </span>
        <span className='font-bold text-xl text-primary drop-shadow-2xl'>
          {name2 ? name2 : ''}
        </span>
        <span className='font-bold text-xl text-[#fff] subpixel-antialiased italic'>
          {price ? price : ''}
          <sup className='text-sm'>{price ? '€' : ''}</sup>
        </span>
      </div>
      <Button
        variant='solid'
        color='primary'
        size='md'
        className='w-2/3 sm:w-1/2 uppercase font-bold shadow-xl hover:scale-95 '
      >
        {titleButton}
      </Button>
    </div>
  );
};
