import { useQueryClient } from '@tanstack/react-query';
import { productosActions } from '..';

export const usePrefetchProduct = () => {
  const queryClient = useQueryClient();

  const prefetchProduct = (idp: number, ido: number) => {
    queryClient.prefetchQuery({
      queryKey: ['producto', idp, ido],
      queryFn: () =>
        productosActions.getProducto(idp.toString(), ido.toString()),
    });
  };

  return { prefetchProduct };
};
