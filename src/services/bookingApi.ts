import axiosClient from '../share/axios-client/axiosClient';
import {
    BaseResponseBasePagingResponseBookHistory,
    BaseResponseBasePagingResponseBookHistoryOfHost,
    BaseResponseBookHomeDetail,
    FactoryCreateRequestUUIDBookHomeDetail,
    RequestCheckBooking,
    UpdateStatusBookingRequest,
} from '../share/models/booking';
import { BaseResponseFactoryDeleteResponse, BaseResponseSuccessResponse } from '../share/models/cms';

const bookingApi = {
    bookingRoom(data: FactoryCreateRequestUUIDBookHomeDetail): Promise<BaseResponseBookHomeDetail> {
        const url = 'api/v1/app/booking/create';
        return axiosClient.post(url, data);
    },
    getHistoryOfUser(): Promise<BaseResponseBasePagingResponseBookHistory> {
        const url = 'api/v1/app/booking/page';
        return axiosClient.get(url);
    },
    cancelBooking(data: UpdateStatusBookingRequest): Promise<BaseResponseFactoryDeleteResponse> {
        const url = 'api/v1/app/booking/cancel';
        return axiosClient.put(url, data);
    },
    getHistoryOfHost(): Promise<BaseResponseBasePagingResponseBookHistoryOfHost> {
        const url = 'api/v1/cms/booking/page?number=0&size=20';
        return axiosClient.get(url);
    },
    checkBooking(data: RequestCheckBooking): Promise<BaseResponseSuccessResponse> {
        const url = 'api/v1/app/booking/check';
        return axiosClient.post(url, data);
    },
};

export default bookingApi;
