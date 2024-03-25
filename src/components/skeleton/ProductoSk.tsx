'use client';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { FaCartPlus } from 'react-icons/fa6';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdLocalOffer } from 'react-icons/md';

export const ProductoSk: React.FC = () => {
  return (
    <Card
      className='animate-fadeIn bg-[rgba(123,122,120,0.22)]/5 w-full aspect-auto border border-[#ccc]'
      shadow='sm'
      isPressable
    >
      <CardBody className='overflow-visible p-0'>
        <Image
          shadow='sm'
          isZoomed
          radius='lg'
          width='100%'
          alt={'image'}
          className='w-full object-cover animate-pulse'
          src='https://dummyimage.com/300/bababa/fff.png'
        />
      </CardBody>
      <CardFooter className='flex flex-col gap-1 justify-center text-small items-start'>
        <div className='flex flex-col items-start w-full'>
          <b className='text-transparent text-left text-ellipsis w-full mb-1'>
            colchon
          </b>
          <div className={`flex justify-between gap-2 w-full`}>
            {/* offer */}
            <div className='flex gap-1 shadow bg-[rgba(123,122,120,0.22)] text-[rgba(123,122,120,0.22)] rounded-xl py-1 px-2'>
              <span className='font-medium'>10%</span>

              <MdLocalOffer
                className='text-[rgba(123,122,120,0.22)]'
                size={20}
              />
            </div>

            {/* price */}
            <p className=' font-semibold text-transparent text-right'>
              Desde 300.00$
            </p>
          </div>
          <div className='flex justify-between items-center w-full'>
            <p className='flex items-center gap-1 bg-[#cccccc12] rounded-xl p-2 font-semibold text-[#000000c4]'>
              <FaStar className='text-[rgba(123,122,120,0.22)]' />
              <FaStar className='text-[rgba(123,122,120,0.22)]' />
              <FaStar className='text-[rgba(123,122,120,0.22)]' />
              <FaStar className='text-[rgba(123,122,120,0.22)]' />
              <FaStarHalfAlt className='text-[rgba(123,122,120,0.22)]' /> 4.2
            </p>

            <span className='flex gap-1 items-center border p-2 rounded-xl shadow text-xs font-semibold text-[rgba(123,122,120,0.22)]'>
              <TbTruckDelivery />
              Entrega 24H
            </span>
          </div>
        </div>
        <div className='flex flex-row-reverse justify-between items-center w-full'>
          <div>
            <button className='flex justify-center items-center hover:scale-105 transition-all ease-out delay-150 p-2 bg-[rgba(123,122,120,0.22)] text-white rounded-xl w-full'>
              <FaCartPlus />
            </button>
            {/* <FaCartPlus /> */}
          </div>
          <div>
            {/* <h1>Ver producto</h1> */}
            <button className='flex justify-center items-center animate-pulse text-transparent border-2 border-[rgba(123,122,120,0.22)] p-2 shadow-inner shadow-[#ccccccf6] scale-110 bg-[rgba(123,122,120,0.22)] rounded-xl'>
              Ver producto
            </button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
