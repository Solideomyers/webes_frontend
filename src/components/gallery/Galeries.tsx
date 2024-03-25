import { Image } from '@nextui-org/react';
import { ProductID } from '../../interfaces';
import React from 'react';
import { useProductContext } from '../../context/ProductContext';

interface Props {
  products: ProductID[];
}

export const Galeries: React.FC<Props> = ({ products }) => {
  const { productoQuery } = useProductContext();
  console.log(productoQuery.data?.data.img);
  return (
    <div className='grid grid-cols-4 gap-2 w-full mx-auto mt-4'>
      {productoQuery.data?.data.img.map((item) => (
        <img
          key={item.id}
          src={item.img_path}
          alt='gallery'
          className='break-inside-avoid rounded-lg shadow border border-[#ccc]'
        />
      ))}
    </div>
  );
};
