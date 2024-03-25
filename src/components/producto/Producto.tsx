'use client';

import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';

import { useNavigate } from 'react-router-dom';
// import img from '../../assets/herosection.jpg';
import { type ProductsByCat } from '../../interfaces';
import { useProductContext } from '../../context/ProductContext';
import { FaCartPlus } from 'react-icons/fa6';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdLocalOffer } from 'react-icons/md';
import { memo } from 'react';
interface Props extends ProductsByCat {
  offer: boolean;
  prefetchProduct?: (idp: number, ido: number) => void;
}

const CardMemo = memo(Card);

export const Producto: React.FC<Props> = ({
  attribute_price,
  proname,
  idp,
  id_o,
  id_category,
  offer = false,
  description,
  cat_name,
  prefetchProduct,
}) => {
  const indexDescription = description.indexOf('.');
  const textDescription = description.slice(0, indexDescription + 1);
  const { products, setProducts } = useProductContext();

  const handleAddProduct = () => {
    const updateProduct: ProductsByCat = {
      id_category,
      proname,
      attribute_price,
      idp,
      id_o,
      description,
      cat_name,
    };
    setProducts([...products, updateProduct]);
  };

  const navigate = useNavigate();

  const handleRoute = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/categoria/${id_category}/producto/${idp}/${id_o}`);
    e.preventDefault();
  };

  return (
    <CardMemo
      className=' bg-primary/5 w-full aspect-auto border border-[#ccc]'
      shadow='sm'
      isPressable
      onPress={() => console.log('item pressed')}
    >
      <CardBody className='overflow-visible p-0'>
        <Image
          shadow='sm'
          isZoomed
          radius='lg'
          width='100%'
          alt={'image'}
          className='w-full object-cover'
          src='https://dummyimage.com/300/bababa/fff.png'
        />
      </CardBody>
      <CardFooter className='flex flex-col gap-1 justify-center text-small items-start'>
        <div className='flex flex-col items-start w-full'>
          <b className='text-text-color text-left text-ellipsis w-full mb-1'>
            {proname}
          </b>
          <div
            className={`flex ${
              offer ? 'justify-between' : 'justify-end'
            } gap-2 w-full`}
          >
            {/* offer */}
            {offer ? (
              <div className='flex gap-1 shadow bg-[#ffc6c6] text-[#a31111] rounded-xl py-1 px-2'>
                <span className='font-medium'>10%</span>

                <MdLocalOffer className='text-[#a31111]' size={20} />
              </div>
            ) : (
              ''
            )}
            {/* price */}
            <p className=' font-semibold text-primary text-right'>
              Desde {attribute_price}$
            </p>
          </div>
          <div className='flex justify-between items-center w-full'>
            <p className='flex items-center gap-1 bg-[#cccccc12] rounded-xl p-2 font-semibold text-[#000000c4]'>
              <FaStar className='text-[rgb(238,207,50)]' />
              <FaStar className='text-[rgb(238,207,50)]' />
              <FaStar className='text-[rgb(238,207,50)]' />
              <FaStar className='text-[rgb(238,207,50)]' />
              <FaStarHalfAlt className='text-[rgb(238,207,50)]' /> 4.2
            </p>

            <span className='flex gap-1 items-center border p-2 rounded-xl shadow text-xs font-semibold text-[#000000be]'>
              <TbTruckDelivery />
              Entrega 24H
            </span>
          </div>

          {/* <div className='flex justify-end py-2 border w-full'>
          </div> */}
        </div>
        <div className='flex flex-row-reverse justify-between items-center w-full'>
          <div>
            <button
              onClick={handleAddProduct}
              className='flex justify-center items-center hover:scale-105 transition-all ease-out delay-150 p-2 bg-primary text-white rounded-xl w-full'
              type='submit'
            >
              <FaCartPlus />
            </button>
            {/* <FaCartPlus /> */}
          </div>
          <div>
            {/* <h1>Ver producto</h1> */}
            <button
              onClick={handleRoute}
              onMouseEnter={() => prefetchProduct && prefetchProduct(idp, id_o)}
              className='flex justify-center items-center text-primary border-2 border-primary p-2 shadow-inner shadow-[#ccccccf6] scale-110 hover:scale-105 transition-transform hover:shadow-md hover:border-white hover:text-white hover:bg-primary ease-in-out duration-150 transform-gpu rounded-xl'
              type='submit'
            >
              Ver producto
            </button>
          </div>
        </div>
      </CardFooter>
    </CardMemo>
  );
};
