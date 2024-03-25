import { useState } from 'react';
import cab3 from '../../assets/img-temporary/cabecero_3.jpg';
import cab5 from '../../assets/img-temporary/cabecero_5.jpg';
import cab6 from '../../assets/img-temporary/cabecero_6.jpg';
import { PrincipalPhoto } from './PrincipalPhoto';
import { GridBoxPhoto } from './GridBoxPhoto';
import { SecondaryPhoto } from './SecondaryPhoto';
import { TextGallery } from './TextGallery';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const GalleryHome: React.FC = () => {
  const [hover, setHover] = useState(false);

  return (
    <section className='col-span-2 p-4'>
      <h1 className='font-bold text-4xl text-[#141414c8] my-2'>
        Ideas del descanso
      </h1>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 '>
        {/* principal photo */}
        <PrincipalPhoto />

        {/* subgrid 1 */}
        <GridBoxPhoto />

        {/* subgrid 2 */}
        <div className='grid grid-cols-subgrid grid-rows-2 gap-4 col-span-2 sm:col-span-2'>
          <TextGallery />
          <LazyLoadImage
            src={`${hover ? cab5 : cab6}`}
            onMouseEnter={() => setHover(!hover)}
            onMouseLeave={() => setHover(!hover)}
            alt='cabecero_2'
            className='img-lazy rounded-xl shadow col-start-2 '
          />
          <LazyLoadImage
            src={cab3}
            alt='cabecero_3'
            className='img-lazy rounded-xl shadow row-start-2'
          />
          <div className='grid col-start-2 place-content-center bg-white border-2 border-[#ccc]  rounded-xl shadow'>
            <h1 className='text-2xl lg:text-4xl font-extrabold text-[#525252] text-center  uppercase'>
              inspirate
            </h1>
          </div>
        </div>

        {/* secondaryphoto */}
        <SecondaryPhoto />
      </div>
    </section>
  );
};
