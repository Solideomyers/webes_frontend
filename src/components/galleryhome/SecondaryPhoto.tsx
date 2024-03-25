import { useState } from 'react';
import cab6 from '../../assets/img-temporary/cabecero_6.jpg';
import cab4 from '../../assets/img-temporary/cabecero_4.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const SecondaryPhoto: React.FC = () => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <LazyLoadImage
        src={`${hover ? cab6 : cab4}`}
        onMouseEnter={() => setHover(!hover)}
        onMouseLeave={() => setHover(!hover)}
        alt='cabecero_6'
        className='img-lazy rounded-xl shadow col-span-2'
      />
    </>
  );
};
