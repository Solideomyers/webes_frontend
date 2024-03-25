import { Button } from '@nextui-org/react';

interface Props {
  title: string;
  name1?: string;
  name2?: string;
  price?: number;
  titleButton: string;
}

export const GridBoxThird: React.FC<Props> = ({
  title,
  name1,
  name2,
  price,
  titleButton,
}) => {
  return (
    <div
      className={`bg-[url('src/assets/img-temporary/cabecero_1.jpg')]  border border-[#cccc] shadow-sm bg-center bg-no-repeat bg-cover grid place-items-center lg:flex lg:flex-col lg:justify-end lg:gap-4 w-full rounded-xl p-4`}
    >
      <div className='flex flex-col bg-gradient-to-l shadow-sm drop-shadow-xl w-full text-center rounded-xl from-[#4341412f] lg:justify-end p-4'>
        <h1 className='uppercase text-white font-bold text-4xl lg:text-4xl "drop-shadow-[-40_-70px_70px_rgba(255, 99, 71, 0.2)]'>
          {title}
        </h1>
        <span className=' text-[#121212ca] italic text-xl drop-shadow-3xl font-extrabold uppercase'>
          {name1 ? name1 : ''}
        </span>
        <span>{price ? price : ''}</span>
      </div>
      <Button
        variant='solid'
        color='primary'
        size='md'
        className='w-1/2 border hover:scale-95 font-bold uppercase'
      >
        {titleButton}
      </Button>
    </div>
  );
};
