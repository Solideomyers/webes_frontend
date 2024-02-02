import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { Categorias } from '../../interfaces';
import { categoriasActions } from '..';

export const useCategorias = () => {
  const categoriasQuery = useQuery<Categorias>({
    queryKey: ['categorias'],
    queryFn: categoriasActions.getCategorias,
    refetchOnWindowFocus: false,
    placeholderData: {
      messageType: 'success',
      message: 'Resultados solicitados.',
      totalcategorias: 20,
      data: {
        current_page: 1,
        data: [
          {
            id: 1,
            name: 'Colchones',
          },
          {
            id: 9,
            name: 'Cabeceros',
          },
          {
            id: 281,
            name: 'Cabeceros Combinados',
          },
          {
            id: 50,
            name: 'Canapés Abatibles',
          },
        ],
      },
    },
  });

  const categoriasInfiniteQuery = useInfiniteQuery({
    queryKey: ['categorias', 'infinite'],
    queryFn: categoriasActions.getCategoriasInfinite,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage?.data?.data?.length
        ? allPages.length + 1
        : undefined;

      if ((nextPage || []) > ((lastPage && lastPage?.data?.last_page) || [])) {
        return undefined;
      }
      return nextPage;
    },
    // staleTime: 100 * 60 * 60,
  });
  return {
    categoriasQuery,
    categoriasInfiniteQuery,
  };
};
