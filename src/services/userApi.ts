import axiosClient from '../share/axios-client/axiosClient';
import { BaseResponseSuccessResponse } from '../share/models/cms';
import {
    BaseResponseBasePagingResponseUserInfo,
    BaseResponseUserDetail,
    BaseResponseVerifyOtpResponse,
    VerifyOtpRequest,
} from '../share/models/user';

const userApi = {
    updateInfoUser(data: any): Promise<BaseResponseUserDetail> {
        const url = 'api/v1/user/update/current-user';
        return axiosClient.put(url, data);
    },
    getAllUser(): Promise<BaseResponseBasePagingResponseUserInfo> {
        const url = `api/v1/cms/user/page?number=0&size=20`;
        return axiosClient.get(url);
    },
    sendEmailActiveAccount(): Promise<BaseResponseSuccessResponse> {
        const url = `api/v1/user/request/active`;
        return axiosClient.post(url);
    },
    activeAccount(otp: VerifyOtpRequest): Promise<BaseResponseVerifyOtpResponse> {
        const url = 'api/v1/auth/active-account';
        return axiosClient.post(url, otp);
    },
};

export default userApi;
