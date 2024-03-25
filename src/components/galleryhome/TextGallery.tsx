import { Button } from '@nextui-org/react';
import { useState } from 'react';

export const TextGallery: React.FC = () => {
  const [hover, setHover] = useState(false);

  return (
    <>
      {hover ? (
        <div
          onMouseLeave={() => setHover(!hover)}
          className='grid col-start-1 animate-fadeIn place-content-center bg-white border-2 border-[#ccc]  rounded-xl shadow overflow-hidden'
        >
          <h1 className='text-2xl lg:text-4xl font-extrabold text-[#525252] text-center  uppercase'>
            inspirate
          </h1>
        </div>
      ) : (
        <div
          onMouseLeave={() => setHover(!hover)}
          className='grid col-start-1 animate-scaleIn place-content-stretch place-items-center bg-white rounded-xl shadow overflow-hidden px-2'
        >
          <Button variant='solid' color='primary' fullWidth>
            Comprar
          </Button>
        </div>
      )}
    </>
  );
};
