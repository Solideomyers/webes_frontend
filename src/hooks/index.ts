// API axios
export { categoriasApi } from '../api/categoriasApi';

// hooks query
export { useCategorias } from './query/useCategorias';
export { useCategoriaId } from './query/useCategoriaId';
export { useProducto } from './query/useProducto';
export { usePrefetchCatByPro } from './query/usePrefetchCatByPro';
export { usePrefetchProduct } from './query/usePrefetchProduct';
export { useCustomNavigate } from './useCustomNavigate';

// hooks shared
export { useFloatBtn } from './useFloatBtn';
export { useLocalStorage } from './useLocalStorage';
export { formatDescription } from '../utils/formatDescription';

export * as categoriasActions from '../services/actions-categorias/actions';
export * as productosActions from '../services/actions-productos/actions';
