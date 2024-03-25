import { categoriasApi } from '../../hooks';
import { type Categorias, type Product } from '../../interfaces';

interface Props {
  (id: string): Promise<Product>;
}

export const getCategorias = async () => {
  const { data } = await categoriasApi.get<Categorias>(`/categorias?page=1`);
  return data;
};

export const getCategoriasInfinite = async ({
  pageParam,
}: {
  pageParam: string | number;
}) => {
  const { data } = await categoriasApi.get<Categorias>(
    `/categorias?page=${Number(pageParam)}`
  );
  return data;
};

export const getCategoriaById: Props = async (id: string) => {
  const { data } = await categoriasApi.get(
    `/categorias/${Number(id) ? Number(id) : 1}`
  );
  return data;
};
