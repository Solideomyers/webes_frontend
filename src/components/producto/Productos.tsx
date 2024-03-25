import { useCallback, useEffect, useState } from 'react';
import { formatDescription, usePrefetchProduct } from '../../hooks';
import { type Datum, type ProductsByCat } from '../../interfaces';
import { TabsCat } from '../categoria/TabsCat';
import { useProductContext } from '../../context/ProductContext';
import { useParams } from 'react-router-dom';
import { ProductoSk } from '../skeleton/ProductoSk';
import { Button } from '@nextui-org/react';
import { useFetchNextPage } from '../../hooks/categorias/useFetchNextPage';
import { useLoadAllCategories } from '../../hooks/categorias/useLoadAllCategories';
import { Producto } from './Producto';

export const Productos: React.FC = () => {
  const { categoriaIdQuery, categoriasInfiniteQuery } = useProductContext();
  const { id } = useParams();
  const initialData = 6;
  const [perView, setPerView] = useState(initialData);
  const { prefetchProduct } = usePrefetchProduct();

  const categorias = categoriasInfiniteQuery.data;

  const fetchNextPage = useFetchNextPage({
    categorias,
    categoriasInfiniteQuery,
  });

  const categoriasAllData = useLoadAllCategories({ fetchNextPage, categorias });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // handlemordata
  const handleMoreLoad = useCallback(() => {
    setPerView(perView + initialData);
  }, [perView]);

  const handleRemove = useCallback(() => {
    if (perView > initialData) {
      setPerView(perView - initialData);
    }
  }, [perView]);

  const products = categoriaIdQuery?.data?.data?.products_by_cat
    .sort(
      (a: any, b: any) => Number(a.attribute_price) - Number(b.attribute_price)
    )
    .slice(0, perView);

  return (
    <section className='flex flex-col items-center mx-4 bg-background-color-component/5'>
      <TabsCat
        defaultKey={id || ''}
        data={(categoriasAllData as Datum[]) || []}
      />

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center py-2'>
        {categoriaIdQuery.isLoading ||
        categoriaIdQuery.data?.data.products_by_cat.length == 0 ? (
          <>
            {[...Array(initialData)].map((_, i) => (
              <div key={i} className='w-full'>
                <ProductoSk />
              </div>
            ))}
          </>
        ) : (
          products?.map((cat: ProductsByCat, i: number) => (
            <div key={i} className=''>
              <Producto
                id_category={id || ''}
                idp={cat.idp}
                id_o={cat.id_o}
                cat_name={cat.cat_name}
                attribute_price={cat.attribute_price}
                proname={cat.proname}
                offer={false}
                description={formatDescription(cat.description)}
                prefetchProduct={prefetchProduct}
              />
            </div>
          ))
        )}
      </div>
      <div className='flex gap-4'>
        <Button
          // ref={ref}
          variant='solid'
          color='primary'
          radius='lg'
          role='button'
          onClick={handleMoreLoad}
          className={`${
            (categoriaIdQuery.data?.totalProducts || 0) <= perView
              ? 'hidden'
              : ''
          } my-2`}
        >
          Cargar mas
        </Button>
        <Button
          // ref={ref}
          variant='bordered'
          color='primary'
          radius='lg'
          role='button'
          onClick={handleRemove}
          className={`${perView <= initialData ? 'hidden' : ''} my-2`}
        >
          Cargar menos
        </Button>
      </div>
    </section>
  );
};
