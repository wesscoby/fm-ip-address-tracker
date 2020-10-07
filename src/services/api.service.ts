import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { AddressData } from '../types';

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
    ): AxiosResponse<AddressData> => response.data;

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

  async get(ip?: string): Promise<AddressData> {
    const res = await this.pub('api/v1', {
      params: {
        apiKey: this.API_KEY,
        ipAddress: ip
      }
    }) as any;

    return {
      isp: res.isp,
      ip: res.ip,
      location: {
        city: res.location.city,
        country: res.location.country,
        postalCode: res.location.postalCode,
        timeZone: res.location.timezone,
        coordinates: {
          lat: res.location.lat,
          lng: res.location.lng
        }
      }
    }
  }
}

export default new ApiService();