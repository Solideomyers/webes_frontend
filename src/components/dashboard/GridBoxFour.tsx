import { Button } from '@nextui-org/react';

interface Props {
  title: string;
  name1?: string;
  name2?: string;
  price?: number;
  titleButton: string;
}

export const GridBoxFour: React.FC<Props> = ({
  title,
  name1,
  name2,
  price,
  titleButton,
}) => {
  return (
    <div
      className={`bg-[url('src/assets/img-temporary/cabecero_2.jpg')] border border-[#cccc] shadow-sm bg-center bg-no-repeat bg-cover flex flex-col gap-2 w-full rounded-xl p-4`}
    >
      <div className='flex flex-col p-4'>
        <h1 className='uppercase text-[#121212ca] text-right font-bold text-4xl'>
          {title}
        </h1>
        <span>{price ? price : ''}</span>
      </div>
      <Button
        variant='solid'
        color='primary'
        size='md'
        className='mb-2 w-2/2 uppercase font-semibold'
      >
        {titleButton}
      </Button>
    </div>
  );
};
