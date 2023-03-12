import axios from 'axios';
// import process from 'process';

const API_BASE_URL = 'https://yourtour.herokuapp.com/';

const getAccessTokenFromLocalStorage = (): any => {
    return localStorage.getItem('access_token') || '{}';
};

const axiosClientFile = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Accept': 'application/json, text/plain, multipart/form-data, */*',
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${getAccessTokenFromLocalStorage()}`,
    },
});

// Add a request interceptor
axiosClientFile.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// Add a response interceptor
axiosClientFile.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default axiosClientFile;
