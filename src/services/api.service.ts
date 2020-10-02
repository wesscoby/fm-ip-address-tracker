import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';


class ApiService {
  private readonly API_URL: string = 'https://geo.ipify.org';
  private readonly API_KEY = process.env.REACT_APP_IPIFY_API_KEY!;
  private readonly pub: AxiosInstance; // Axios instance for public fetch

  constructor() {
    const config: AxiosRequestConfig = {
      baseURL: `${this.API_URL}`
    };

    const interceptorResponseFn = (
      response: AxiosResponse<any>
    ): AxiosResponse<any> => response.data;

    const interceptorErrorFn = (error: any) => {
      return Promise.reject({
        status: error.response.status,
        message: error.response.statusText
      });
    };

    this.pub = axios.create(config);
    this.pub.interceptors.response.use(
      interceptorResponseFn, interceptorErrorFn
    );
  }

  async get(ip?: string) {
    return await this.pub('api/v1', {
      params: {
        apiKey: this.API_KEY,
        ipAddress: ip
      }
    })
  }
}

export default new ApiService();