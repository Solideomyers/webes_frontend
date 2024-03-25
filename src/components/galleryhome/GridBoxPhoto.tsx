import { useState } from 'react';
import cab2 from '../../assets/img-temporary/cabecero_2.jpg';
import cab3 from '../../assets/img-temporary/cabecero_3.jpg';
import cab4 from '../../assets/img-temporary/cabecero_4.jpg';
import cab5 from '../../assets/img-temporary/cabecero_5.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';

export const GridBoxPhoto: React.FC = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className='grid grid-cols-subgrid gap-4 col-span-2 sm:col-span-2'>
      <LazyLoadImage
        src={cab2}
        alt='cabecero_2'
        className='img-lazy rounded-xl shadow'
      />
      <LazyLoadImage
        src={cab3}
        alt='cabecero_3'
        className='img-lazy rounded-xl shadow'
      />
      <LazyLoadImage
        src={`${hover ? cab4 : cab5}`}
        onMouseEnter={() => setHover(!hover)}
        onMouseLeave={() => setHover(!hover)}
        alt='cabecero_4'
        className='img-lazy rounded-xl shadow'
      />
      <LazyLoadImage
        src={cab5}
        alt='cabecero_5'
        className='img-lazy rounded-xl shadow'
        effect='blur'
      />
    </div>
  );
};
