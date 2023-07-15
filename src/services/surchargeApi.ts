import axiosClient from '../share/axios-client/axiosClient';
import { BaseResponseFactoryDeleteResponse } from '../share/models/cms';
import {
    BaseResponseBasePagingResponseSurchargeHomeCategoryInfo,
    BaseResponseSurchargeHomeCategoryDetail,
    FactoryCreateRequestUUIDSurchargeHomeCategoryDetail,
    FactoryUpdateRequestUUIDSurchargeHomeCategoryDetail,
} from '../share/models/surcharge';

const surchargeApi = {
    getAllSurcharge(searchText: string | undefined): Promise<BaseResponseBasePagingResponseSurchargeHomeCategoryInfo> {
        const url = `api/v1/cms/surcharge-home-categories/page?${searchText !== '' ? `keyword=${searchText}&` : ''}number=0&size=20`;
        return axiosClient.get(url);
    },
    addSurcharge(
        data: FactoryCreateRequestUUIDSurchargeHomeCategoryDetail,
    ): Promise<BaseResponseSurchargeHomeCategoryDetail> {
        const url = 'api/v1/cms/surcharge-home-categories/create';
        return axiosClient.post(url, data);
    },
    deleteSurcharge(idData: string | undefined): Promise<BaseResponseFactoryDeleteResponse> {
        const url = `api/v1/cms/surcharge-home-categories/${idData}/delete`;
        return axiosClient.delete(url);
    },
    updateSurcharge(
        data: FactoryUpdateRequestUUIDSurchargeHomeCategoryDetail,
    ): Promise<BaseResponseSurchargeHomeCategoryDetail> {
        const url = 'api/v1/cms/surcharge-home-categories/update';
        return axiosClient.put(url, data);
    },
};

export default surchargeApi;
