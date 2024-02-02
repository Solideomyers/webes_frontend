import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Atributo, Img } from '../../interfaces';
import { SeccionDetailR } from '..';

interface Selected {
  selected?: Atributo;
  setSelected?: React.Dispatch<React.SetStateAction<Atributo>>;
  cat_name: string;
  proname: string;
  attribute_price: string;
  description: string;
  atributos: Atributo[];
  img: Img[] | React.JSX.Element[];
}

export const ProductoDetail: React.FC<Selected> = ({
  cat_name,
  proname,
  attribute_price,
  description,
  img,
  atributos,
}) => {
  const productosSort =
    atributos &&
    atributos?.sort(
      (a, b) => Number(a.attribute_price) - Number(b.attribute_price)
    );
  const [selected, setSelected] = useState(atributos[0] || {});

  return (
    <section className='rounded-3xl text-gray-600 body-font w-full max-w-sm sm:max-w-lg bg-transparent lg:max-w-7xl py-2 lg:px-4'>
      <div className='lg:grid lg:grid-cols-2 lg:place-content-center py-2 gap-x-4'>
        {/* seccion izquierda de la card */}
        <div className='lg:w-full w-full lg:h-1/2 object-cover object-center rounded-3xl'>
          <AliceCarousel
            items={img}
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
                items: 1,
                itemsFit: 'contain',
              },
              1024: {
                items: 1,
                itemsFit: 'fill',
              },
            }}
          />
        </div>

        {/* seccion derecha de la card */}
        <SeccionDetailR
          atributos={productosSort as Atributo[] | []}
          proname={proname}
          attribute_price={selected?.attribute_price}
          cat_name={cat_name}
          description={description}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </section>
  );
};
