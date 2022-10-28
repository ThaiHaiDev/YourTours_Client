import axios, { AxiosResponse } from "axios";
import process from 'process';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const authApi = {
    signUp(data: any): Promise<AxiosResponse> {
        const url = `${API_BASE_URL}api/v1/auth/register`;
        return axios.post(url, data);
    },
    signIn(data: any): Promise<AxiosResponse> {
        const url = `${API_BASE_URL}api/v1/auth/login`;
        return axios.post(url, data);
    },
    otpConfirm(data: any): Promise<AxiosResponse> {
        const url = `${API_BASE_URL}api/v1/auth/active-account`;
        return axios.post(url, data);
    },
    reSendOtp(data: any): Promise<AxiosResponse> {
        const url = `${API_BASE_URL}api/v1/auth/resend-otp`;
        return axios.post(url, data);
    },
};

export default authApi;