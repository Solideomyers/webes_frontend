import React, { createContext, useContext, ReactNode, useState } from 'react';
import { Categorias, Product, ProductID, ProductsByCat } from '../interfaces';
import {
  useCategoriaId,
  useCategorias,
  useLocalStorage,
  useProducto,
} from '../hooks';
import {
  InfiniteData,
  UseInfiniteQueryResult,
  UseQueryResult,
} from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

interface ProductContextProps {
  products: ProductsByCat[];
  setProducts: React.Dispatch<React.SetStateAction<ProductsByCat[]>>;
  categoriasQuery: UseQueryResult<Categorias, Error>;
  categoriasInfiniteQuery: UseInfiniteQueryResult<
    InfiniteData<Categorias, unknown>,
    Error
  >;
  categoriaIdQuery: UseQueryResult<Product, Error>;
  productoQuery: UseQueryResult<ProductID, Error>;
  id: string | undefined;
  idp: string | undefined;
  ido: string | undefined;
  setCatId: React.Dispatch<React.SetStateAction<string | undefined>>;
  catId: string | undefined;
  handleSelectionChange?: (key: React.Key) => void;
}

const ProductContext = createContext<ProductContextProps | undefined>(
  undefined
);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { id, idp, ido } = useParams<{
    id: string;
    idp: string;
    ido: string;
  }>();
  const [catId, setCatId] = useState(id);
  const [products, setProducts] = useLocalStorage('product', []);
  const { categoriasQuery, categoriasInfiniteQuery } = useCategorias();
  const { categoriaIdQuery } = useCategoriaId(catId || '');
  const { productoQuery } = useProducto(idp || '', ido || '');

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        categoriasQuery,
        categoriasInfiniteQuery,
        categoriaIdQuery,
        productoQuery,
        id,
        idp,
        ido,
        catId,
        setCatId,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }

  return context;
};
