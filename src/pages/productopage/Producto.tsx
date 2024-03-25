import React, { useCallback, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa6';
import { formatDescription, useFloatBtn, useProducto } from '../../hooks';
import { type Related } from '../../interfaces';
import {
  Accordeon,
  ProductoDetail,
  ProductoSk,
  ProductosRelated,
} from '../../components';
import { useQueryClient } from '@tanstack/react-query';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const ProductoView = React.memo(() => {
  const { idp, ido } = useParams<{
    idp: string;
    ido: string;
  }>();

  const queryClient = useQueryClient();
  const data = queryClient.getQueriesData({ queryKey: ['producto', idp, ido] });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Producto
  const { productoQuery } = useProducto(idp || '', ido || '');

  // boton de whatsapp
  const goWsp = useFloatBtn({
    icon: <FaWhatsapp size={25} />,
    variant: 'wsp',
    contenedor: true,
    pathWsp: '',
  });

  const formattedDescription = useMemo(
    () => formatDescription(productoQuery?.data?.data?.description || ''),
    [productoQuery?.data?.data.description]
  );
  const imgs = useMemo(() => {
    return productoQuery?.data?.data.img?.slice(0, 4)?.map((item, i) => (
      <div
        key={i}
        className='h-50 border border-gray-200 p-2 w-full max-w-content z-10 flex justify-center items-center rounded-3xl'
      >
        <LazyLoadImage
          className='img-lazy w-full hover:shadow-xl object-cover object-center rounded-3xl hover:scale-100 transition-transform duration-100 delay-100 ease-in-out'
          alt='carousel de productos'
          src={item?.img_path}
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            e.currentTarget.src = `https://dummyimage.com/300/bababa/fff.png`;
          }}
        />
      </div>
    ));
  }, [productoQuery]);

  const relateProductos = useMemo(() => {
    return productoQuery.data?.data.related.map((item: Related, i: number) => (
      <div
        key={i}
        className='ml-2 mr-2 flex flex-col justify-center items-center'
      >
        <div className='h-50 border border-[#ccc] p-2 hover:animate-scaleIn transition-transform delay-100 duration-100 w-full max-w-content z-10 flex justify-center items-center rounded-3xl'>
          <img
            role='img'
            className='w-full hover:shadow-xl object-cover object-center rounded-3xl hover:scale-100 transition-transform duration-100 delay-100 ease-in-out'
            alt='carousel de productos'
            src={`https://dummyimage.com/300/bababa/fff.png`}
          />
        </div>
        <p className='mt-2 whitespace-pre-wrap text-text-color text-sm font-thin'>
          {item.name}
        </p>
      </div>
    ));
  }, [productoQuery]);

  const renderContent = useCallback(() => {
    if (productoQuery.isLoading) {
      return (
        <div>
          <ProductoSk />
        </div>
      );
    }

    if (productoQuery.error) {
      return <div>Error: {productoQuery.error.message}</div>;
    }

    return (
      <section className='grid grid-cols-1 place-items-center bg-background-color-component/10'>
        <ProductoDetail
          atributos={productoQuery?.data?.data.atributos || []}
          proname={productoQuery?.data?.data.proname || ''}
          cat_name={productoQuery?.data?.data.cat_name || ''}
          imgs={imgs || []}
          attribute_price={productoQuery?.data?.data.attribute_price || ''}
          description={formattedDescription}
        />
        <Accordeon title='Descripcion' description={formattedDescription} />
        <ProductosRelated items={relateProductos || []} />
        {goWsp}
      </section>
    );
  }, [
    productoQuery.isLoading,
    productoQuery.error,
    productoQuery,
    formattedDescription,
  ]);

  return renderContent();
});
