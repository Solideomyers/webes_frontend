import React, { createContext, useContext, ReactNode } from 'react';
import { ProductsByCat } from '../interfaces';
import { useLocalStorage } from '../hooks';

interface ProductContextProps {
  products: ProductsByCat[];
  setProducts: React.Dispatch<React.SetStateAction<ProductsByCat[]>>;
}

const ProductContext = createContext<ProductContextProps | undefined>(
  undefined
);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useLocalStorage('product', []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
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
