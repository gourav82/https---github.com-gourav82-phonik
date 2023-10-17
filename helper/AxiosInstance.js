import axios from "axios";
import { executelogoutUser, isEmpty, tokenExists } from "./Utils";

const axiosClient = (apiType='', token) => {
  // axios instance for making requests
  let axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_APP_BASE_URL_DEV,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
  });
  if(apiType =='user')
  axiosInstance = axios.create({
    // your other properties for axios instance
    baseURL: process.env.NEXT_PUBLIC_APP_BASE_URL_DEV,
    headers: {
      'Authorization': `Bearer ${!isEmpty(token) ? token : tokenExists()}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
  axiosInstance.interceptors.response.use(
    res => res,
    err => {
      if (err.response.status === 401) {
        if (typeof window !== 'undefined') {
          //executelogoutUser()
        }
      }
      throw err;
    }
  );
  // your response interceptor
  return axiosInstance;
};
export default axiosClient;