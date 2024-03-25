import { categoriasApi } from '../../hooks';
import { type ProductID } from '../../interfaces';

export const getProducto = async (
  idp: string,
  ido: string
): Promise<ProductID> => {
  const { data } = await categoriasApi.get(
    `/productos/${idp ? idp : 554}?ida=${ido ? ido : 97005}`
  );
  return data;
};
