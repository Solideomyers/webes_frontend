import { Button } from '@nextui-org/react';
import { useState } from 'react';

interface Props {
  title: string;
  name1: string;
  name2: string;
  price: number;
  titleButton: string;
  isolated?: boolean;
}

export const GridBoxOne: React.FC<Props> = ({
  title,
  name1,
  name2,
  price,
  titleButton,
  isolated = false,
}) => {
  const [hover, setHover] = useState(false);

  const style1 = `bg-[url("src/assets/img-temporary/cabecero_${
    hover ? '2' : '4'
  }.jpg")] bg-gray-200 bg-blend-multiply bg-center bg-no-repeat bg-cover border border-[#cccc] shadow-sm grid place-items-end sm:place-items-start w-full rounded-xl col-start-1 lg:col-span-2 lg:row-start-1 p-2 gap-2`;
  const style2 = `bg-[url("src/assets/img-temporary/cabecero_${
    hover ? '2' : '4'
  }.jpg")] bg-gray-200 bg-blend-multiply bg-center bg-no-repeat bg-cover border border-[#cccc] shadow-sm grid col-span-3 lg:col-span-2 row-start-1 w-full rounded-xl col-start-1  p-2 gap-2`;

  return (
    <div
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
      className={isolated ? style2 : style1}
    >
      <div
        className={`flex flex-col ${
          isolated ? 'sm:w-1/3 lg:w-2/4 lg:items-end p-2' : 'p-4'
        } items-end sm:items-start bg-[#6e6d6d3a] sm:bg-gradient-to-r sm:from-[#3a3838] sm:to-[#ffffff67] sm:border sm:border-[#fff]  sm:bg-[rgba(253,254,255,0.11)] sm:backdrop-filter sm:backdrop-blur-sm  rounded-xl sm:shadow-xl sm:shadow-[#0000006b]`}
      >
        <h1 className='uppercase text-white text-right lg:text-[#fff] drop-shadow-2xl font-bold lg:text-heading-3 text-4xl w-full'>
          {title}
        </h1>
        <span className='text-primary drop-shadow-md shadow-black lg:text-white italic text-xl font-extrabold uppercase'>
          {name1}
        </span>

        <span className='font-bold text-lg text-[#fff] text-right'>
          {name2}
        </span>
        <span className='font-bold text-xl text-[#fff] subpixel-antialiased italic'>
          {price}
          <sup className='text-sm'>€</sup>
        </span>
      </div>
      <Button
        variant='solid'
        color='primary'
        size='md'
        className={`w-2/2 ${
          isolated ? 'sm:w-1/3' : ''
        } lg:w-1/3 border border-white hover:border-transparent lg:border-none uppercase font-bold shadow-xl hover:scale-95 `}
      >
        {titleButton}
      </Button>
    </div>
  );
};
