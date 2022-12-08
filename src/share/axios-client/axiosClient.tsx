import axios from 'axios';
import process from 'process';
// import jwt_decode from 'jwt-decode';
// import { getCookie } from 'cookies-next';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const getAccessTokenFromLocalStorage = (): any => {
    return localStorage.getItem('access_token') || '{}';
};

const axiosClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Accept: 'application/json',
        Authorization: `${getAccessTokenFromLocalStorage() !== '{}' && `Bearer`} ${getAccessTokenFromLocalStorage() !== '{}' ? getAccessTokenFromLocalStorage() : ''}`,
    },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default axiosClient;
