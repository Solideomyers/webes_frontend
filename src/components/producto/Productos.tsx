import { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useParams } from 'react-router-dom';
import {
  formatDescription,
  useCategoriaId,
  usePrefetchProduct,
} from '../../hooks';
import { Filter, LoadingIcon, Producto, ProductoSk } from '..';
import { ProductsByCat } from '../../interfaces';

export const Productos: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { categoriaIdQuery } = useCategoriaId(Number(id) || 1);
  const initialData = 6;
  const [perView, setPerView] = useState(initialData);
  const { ref, inView } = useInView({ threshold: 0, delay: 2000 });
  const { prefetchProduct } = usePrefetchProduct();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (inView && perView < (categoriaIdQuery.data?.totalProducts || 0)) {
      setPerView(perView + initialData);
    }
  }, [inView]);

  if (!categoriaIdQuery.data) {
    return (
      <section className='flex flex-col items-center mx-4 bg-background-color-component/5'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {[...Array(initialData)].map((_, i) => (
            <div key={i} className='w-full'>
              <ProductoSk />
            </div>
          ))}
        </div>
      </section>
    );
  }

  // handlemordata
  const handleMoreLoad = useCallback(() => {
    setPerView(perView + initialData);
  }, [perView]);

  const products = categoriaIdQuery?.data?.data?.products_by_cat
    .sort(
      (a: any, b: any) => Number(a.attribute_price) - Number(b.attribute_price)
    )
    .slice(0, perView);

  return (
    <section className='flex flex-col items-center mx-4 bg-background-color-component/5'>
      <Filter />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {products?.map((cat: ProductsByCat, i: number) => (
          <div key={i} className='grid gap-4'>
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
        ))}
      </div>
      <div
        className={`w-full mt-4 ${
          categoriaIdQuery.data?.totalProducts === perView ? 'hidden' : ''
        }`}
      >
        <button ref={ref} onClick={handleMoreLoad}>
          {(categoriaIdQuery?.data?.totalProducts || 0) > perView && (
            <LoadingIcon />
          )}
        </button>
      </div>
    </section>
  );
};
