import { useState } from 'react';
import cab1 from '../../assets/img-temporary/cabecero_1.jpg';
import cab2 from '../../assets/img-temporary/cabecero_2.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const PrincipalPhoto: React.FC = () => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <LazyLoadImage
        src={`${hover ? cab2 : cab1}`}
        alt='cabecero_1'
        onMouseEnter={() => setHover(!hover)}
        onMouseLeave={() => setHover(!hover)}
        className='img-lazy rounded-xl shadow hidden sm:grid sm:col-span-2 ease-in-out delay-150 duration-150'
      />
    </>
  );
};
