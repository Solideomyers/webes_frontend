import {
  DefinedInfiniteQueryObserverResult,
  InfiniteData,
  UseInfiniteQueryResult,
} from '@tanstack/react-query';
import { Categorias } from '../../interfaces';
import { useCallback } from 'react';

interface Props {
  categorias: InfiniteData<Categorias, unknown> | undefined;
  categoriasInfiniteQuery: UseInfiniteQueryResult<
    InfiniteData<Categorias, unknown>,
    Error
  >;
}

export const useFetchNextPage = ({
  categorias,
  categoriasInfiniteQuery,
}: Props) => {
  const fetchNextPage = useCallback(() => {
    if (categorias?.pages && categorias?.pages?.length <= 4) {
      categoriasInfiniteQuery.fetchNextPage();
    }
  }, [categoriasInfiniteQuery]);
  return fetchNextPage;
};
