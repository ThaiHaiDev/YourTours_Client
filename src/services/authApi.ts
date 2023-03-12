import axios, { AxiosResponse } from "axios";
// import process from 'process';
import { ForgotPasswordRequest, LoginRequest, OTPForgotPasswordRequest, RegisterRequest, ReSendOTPRequest } from "../share/models/auth";

const API_BASE_URL = 'https://yourtour.herokuapp.com/';

const authApi = {
    signUp(data: RegisterRequest): Promise<AxiosResponse> {
        const url = `${API_BASE_URL}api/v1/auth/register`;
        return axios.post(url, data);
    },
    signIn(data: LoginRequest): Promise<AxiosResponse> {
        const url = `${API_BASE_URL}api/v1/auth/login`;
        return axios.post(url, data);
    },
    otpConfirm(data: {}): Promise<AxiosResponse> {
        const url = `${API_BASE_URL}api/v1/auth/active-account`;
        return axios.post(url, data);
    },
    reSendOtp(data: ReSendOTPRequest): Promise<AxiosResponse> {
        const url = `${API_BASE_URL}api/v1/auth/resend-otp`;
        return axios.post(url, data);
    },
    forgotPassword(data: ForgotPasswordRequest): Promise<AxiosResponse> {
        const url = `${API_BASE_URL}api/v1/auth/forgot-password`;
        return axios.post(url, data);
    },
    otpForgotPassword(data: OTPForgotPasswordRequest): Promise<AxiosResponse> {
        const url = `${API_BASE_URL}api/v1/auth/otp/reset-password`;
        return axios.post(url, data);
    },

};

export default authApi;