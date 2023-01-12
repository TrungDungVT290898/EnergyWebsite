import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
const axiosClient = axios.create({
  baseURL: 'http://ip172-18-0-56-cevu35n91rrg00fcbgbg-5001.direct.labs.play-with-docker.com/api/energy',
  headers: {
    'Content-Type': 'application/json',
  },
});
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);
export default axiosClient;
