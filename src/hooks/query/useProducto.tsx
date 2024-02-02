import { useQuery } from '@tanstack/react-query';
import { ProductID } from '../../interfaces';
import { productosActions } from '..';

export const useProducto = (idp: string, ido: string) => {
  const productoQuery = useQuery<ProductID>({
    queryKey: ['producto', idp, ido],
    queryFn: () => productosActions.getProducto(idp, ido),
    refetchOnWindowFocus: false,
  });

  return {
    productoQuery,
  };
};
