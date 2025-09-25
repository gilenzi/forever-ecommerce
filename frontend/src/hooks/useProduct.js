import {useQuery} from '@tanstack/react-query';
import {fetchProducts} from '../services/product-service';

export function useProducts() {
  const productQuery = useQuery({
    queryKey: ['product'],
    queryFn: fetchProducts,
  });

  return {
    data: productQuery.data || {},
    isLoading: productQuery.isLoading,
    isError: productQuery.isError,
  };
}
