import axiosClient from '../share/axios-client/axiosClient';
import { BaseResponseSuccessResponse } from '../share/models/cms';
import { BaseResponseBasePagingResponseBookHomeInfo, UpdateStatusBookingRequest } from '../share/models/summary';

const summaryHomeApi = {
    getWaiting(): Promise<BaseResponseBasePagingResponseBookHomeInfo> {
        const url = 'api/v1/cms/booking/page?status=WAITING&number=0&size=20';
        return axiosClient.get(url);
    },
    getCheckIn(): Promise<BaseResponseBasePagingResponseBookHomeInfo> {
        const url = 'api/v1/cms/booking/page?status=CHECK_IN&number=0&size=20';
        return axiosClient.get(url);
    },
    getCheckOut(): Promise<BaseResponseBasePagingResponseBookHomeInfo> {
        const url = 'api/v1/cms/booking/page?status=CHECK_OUT&number=0&size=20';
        return axiosClient.get(url);
    },
    setCheckIn(data: UpdateStatusBookingRequest): Promise<BaseResponseSuccessResponse> {
        const url = 'api/v1/cms/booking/check-in';
        return axiosClient.put(url, data);
    },
    setCheckOut(data: UpdateStatusBookingRequest): Promise<BaseResponseSuccessResponse> {
        const url = 'api/v1/cms/booking/check-out';
        return axiosClient.put(url, data);
    },
};

export default summaryHomeApi;
