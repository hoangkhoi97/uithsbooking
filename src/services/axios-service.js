import axios from 'axios';
import authService from './auth-service';

class AxiosService {

  axiosInstance = {};

  constructor() {
    this.initInstance();
  }

  initInstance() {

    this.axiosInstance = axios.create({
      baseURL: process.env.NODE_ENV === "production" ? process.env.REACT_APP_BACKEND_URL : 'http://localhost:3001/api/v1',
    });
    this.axiosInstance.defaults.headers.common['Content-Type'] = 'multipart/form-data';

    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = authService.getToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      });
    return this.axiosInstance;
  }
  getInstance() {
    return this.axiosInstance || this.initInstance();
  }
}

export default new AxiosService();
