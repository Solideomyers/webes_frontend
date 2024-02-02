import { useQueryClient } from '@tanstack/react-query';
import { categoriasActions } from '..';

export const usePrefetchCatByPro = () => {
  const queryClient = useQueryClient();

  const prefetchProductsByCat = (id: number) => {
    queryClient.prefetchQuery({
      queryKey: ['categorias', id],
      queryFn: () => categoriasActions.getCategoriaById(id),
    });
  };

  return { prefetchProductsByCat };
};
