import React, { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { HomeBreadcrumb } from './HomeBreadcrumbs';
import { CategoriaBreadcrumb } from './CategoriaBreadcrumbs';
import { DetalleBreadcrumb } from './DetailBreadcrumbs';
import { useProductContext } from '../../context/ProductContext';

export const Breadcrumbs: React.FC = () => {
  const { id, idp, ido } = useParams();
  const navigate = useNavigate();
  const { categoriaIdQuery, productoQuery, catId } = useProductContext();
  // console.log(categoriaIdQuery.data?.data.)
  const catName = useMemo(
    () => categoriaIdQuery.data?.data.name,
    [categoriaIdQuery.data, id, catId]
  );
  // const catSelectedName = useMemo(
  //   () => productoQuery.data?.data.cat_name,
  //   [productoQuery.data?.data]
  // );

  const productName = useMemo(
    () => productoQuery.data?.data.proname,
    [productoQuery.data, idp]
  );

  const categoryId = useMemo(
    () => productoQuery.data?.data.id_category,
    [productoQuery.data, catId]
  );

  const handleBack = (e: React.MouseEvent) => {
    navigate(e.currentTarget.id);
  };

  return (
    <nav className='flex mx-10 my-4' aria-label='Breadcrumb'>
      <ol className='inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse'>
        <HomeBreadcrumb handleBack={handleBack} />
        {id ? (
          <CategoriaBreadcrumb
            handleBack={handleBack}
            categoryName={catName || ''}
            id={categoryId || ''}
          />
        ) : (
          ''
        )}

        {idp ? (
          ido ? (
            <DetalleBreadcrumb productName={productName || ''} />
          ) : null
        ) : null}
      </ol>
    </nav>
  );
};
