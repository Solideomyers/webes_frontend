import { categoriasApi } from '../../hooks';
import { type Categorias, type Product } from '../../interfaces';

interface Props {
  (id: number): Promise<Product>;
}

export const getCategorias = async () => {
  const { data } = await categoriasApi.get<Categorias>(`/categorias?page=1`);
  return data;
};

export const getCategoriasInfinite = async ({
  pageParam,
}: {
  pageParam: number;
}) => {
  const { data } = await categoriasApi.get<Categorias>(
    `/categorias?page=${pageParam}`
  );
  return data;
};

export const getCategoriaById: Props = async (id: number) => {
  const { data } = await categoriasApi.get(`/categorias/${id}`);
  return data;
};
