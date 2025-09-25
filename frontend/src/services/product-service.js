import apiConfig from '../config/api';
import apiClient from '../config/api-client';

export const fetchProducts = async () => {
  try {
    const {data} = await apiClient.get(apiConfig.endpoints.product.get);
    console.log(data);
    return {products: data.data.products, status: data.status};
  } catch (error) {
    console.log('Error fetching products', error);
  }
};
