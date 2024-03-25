import { InfiniteData } from '@tanstack/react-query';
import { useMemo } from 'react';
import { Categorias } from '../../interfaces';

interface Props {
  fetchNextPage: () => void;
  categorias: InfiniteData<Categorias, unknown> | undefined;
}

export const useLoadAllCategories = ({ fetchNextPage, categorias }: Props) => {
  const categoriasAllData = useMemo(() => {
    fetchNextPage();
    return categorias?.pages.flatMap((page) => page.data?.data) || [];
  }, [categorias]);
  return categoriasAllData;
};
