'use client';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge, Card } from 'keep-react';
import { Heart, ShoppingCart, MagnifyingGlass } from 'phosphor-react';
import img from '../../assets/herosection.jpg';
import { Button } from '..';
import { type ProductsByCat } from '../../interfaces';
import { useProductContext } from '../../context/ProductContext';

interface Props extends ProductsByCat {
  offer: boolean;
  prefetchProduct?: (idp: number, ido: number) => void;
}

export const Producto: React.FC<Props> = ({
  attribute_price,
  proname,
  idp,
  id_o,
  id_category,
  offer,
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
    <Card
      className='relative size-30 border border-[#ccc] hover:scale-y-105 hover:shadow-lg transition-transform ease-in-out duration-300 animate-fadeIn'
      imgSrc={img}
      imgSize='md'
    >
      <Card.Container className='border hover:animate-pulse absolute top-4 right-4 flex items-center justify-center  h-10 w-10 cursor-pointer rounded-full bg-metal-50/50'>
        <Heart size={20} weight='bold' color='white' />
      </Card.Container>
      <Card.Container className='mt-1 px-2 py-2 pb-2 place-items-center grid grid-rows-3 grid-col-2'>
        <Card.Container className='flex items-center justify-between w-full row-start-1 row-span-1 col-span-2'>
          <Badge
            size='xs'
            colorType='light'
            color={`${offer ? 'error' : 'gray'}`}
          >
            {offer ? 'Oferta' : 'Actualizado'}
          </Badge>
          <Card.Title>Desde {attribute_price}$</Card.Title>
        </Card.Container>
        <Card.Container className='row-start-2 row-span-2 col-span-2'>
          <Card.Title className='truncate'>{proname}</Card.Title>
          <Card.Description>
            <span
              dangerouslySetInnerHTML={{ __html: textDescription }}
              className='grid grid-cols-1 grid-rows-1 font-light text-sm whitespace-pre-wrap truncate overflow-hidden h-10 '
            />
          </Card.Description>
        </Card.Container>
        <Card.Container className='grid grid-cols-2 py-2 gap-x-2 row-start-4 row-span-1 col-span-2'>
          <Button onClick={handleAddProduct} variant={'primary'}>
            <span className='pr-2'>
              <ShoppingCart size={24} />
            </span>
            Añadir
          </Button>
          <Button
            onMouseEnter={() => prefetchProduct && prefetchProduct(idp, id_o)}
            onClick={handleRoute}
            variant={'secondary'}
          >
            <span className='pr-2'>
              <MagnifyingGlass size={24} />
            </span>
            Detalle
          </Button>
        </Card.Container>
      </Card.Container>
    </Card>
  );
};
