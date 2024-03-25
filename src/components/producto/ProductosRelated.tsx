import React from 'react';
import AliceCarousel from 'react-alice-carousel';
interface Productos {
  items: JSX.Element[];
}
export const ProductosRelated: React.FC<Productos> = ({ items }) => {
  return (
    <div className='w-full max-w-4xl flex items-center mt-4'>
      <AliceCarousel
        paddingLeft={7}
        paddingRight={7}
        items={items}
        autoPlay
        disableDotsControls={false}
        autoPlayInterval={4000}
        infinite
        animationType='fadeout'
        // autoWidth
        swipeExtraPadding={200}
        disableButtonsControls
        mouseTracking
        responsive={{
          0: {
            items: 1,
          },
          375: {
            items: 2,
            itemsFit: 'fill',
          },
          1024: {
            items: 4,
            itemsFit: 'contain',
          },
        }}
      />
    </div>
  );
};
