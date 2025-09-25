import axios from 'axios';
import apiConfig from './api';
apiConfig;

const apiClient = axios.create({
  baseURL: apiConfig.baseUrl,
  //   withCredentials: true,
});

export default apiClient;
