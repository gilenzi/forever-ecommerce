// Environment-based API configuration
const getApiConfig = () => {
  const isDevelopment = import.meta.env.VITE_MODE === 'development';
  const isProduction = import.meta.env.VITE_MODE === 'production';
  const mode = import.meta.env.VITE_MODE;
  const baseUrl = import.meta.env.VITE_API_URL + '/api';

  return {
    baseUrl,
    endpoints: {
      product: {
        get: '/product',
      },
      category: {
        get: '/category',
        update: (id) => `/category/${id}`,
        delete: (id) => `/category/${id}`,
        create: '/category',
      },
    },
    environment: {
      isDevelopment,
      isProduction,
      mode,
    },
  };
};

const apiConfig = getApiConfig();

export default apiConfig;
