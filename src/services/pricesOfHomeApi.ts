import axiosClient from '../share/axios-client/axiosClient';
import { BaseResponseSuccessResponse } from '../share/models/cms';
import {
    BaseResponsePriceOfHomeResponse,
    BaseResponsePriceOfHomeWithMonthResponse,
    PriceOfHomeCreateRequest,
} from '../share/models/price';

const pricesOfHomeApi = {
    getPriceByMonthOfRoom(
        month: string,
        idHome: string | undefined,
    ): Promise<BaseResponsePriceOfHomeWithMonthResponse> {
        const url = `api/v1/cms/prices/months?month=${parseInt(month)}&year=2022&homeId=${idHome}`;
        return axiosClient.get(url);
    },
    customePriceDay(data: PriceOfHomeCreateRequest): Promise<BaseResponseSuccessResponse> {
        const url = `api/v1/cms/prices/create`;
        return axiosClient.post(url, data);
    },
    setDiscountOfHome(data: any): Promise<any> {
        const url = `api/v1/cms/discount-of-home/create/list`;
        return axiosClient.post(url, data);
    },
    setSurchargeOfHome(data: any): Promise<BaseResponseSuccessResponse> {
        const url = 'api/v1/cms/surcharge-of-home/create/list';
        return axiosClient.post(url, data);
    },
    showPriceByRangeDay(
        idHoom: string | undefined,
        dateFrom: string | undefined,
        dateTo: string | undefined,
    ): Promise<BaseResponsePriceOfHomeResponse> {
        const url = `api/v1/public/prices?homeId=${idHoom}&dateFrom=${dateFrom}&dateTo=${dateTo}`;
        return axiosClient.get(url);
    },
};

export default pricesOfHomeApi;
