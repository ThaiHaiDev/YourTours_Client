import axiosClient from '../share/axios-client/axiosClient';
import { BaseResponseFactoryDeleteResponse } from '../share/models/cms';
import {
    BaseResponseBasePagingResponseDiscountHomeCategoryInfo,
    BaseResponseDiscountHomeCategoryDetail,
    FactoryCreateRequestUUIDDiscountHomeCategoryDetail,
    FactoryUpdateRequestUUIDDiscountHomeCategoryDetail,
} from '../share/models/discount';

const discountApi = {
    getAllDiscount(): Promise<BaseResponseBasePagingResponseDiscountHomeCategoryInfo> {
        const url = `api/v1/cms/discount-home-categories/page?number=0&size=20`;
        return axiosClient.get(url);
    },
    addDiscount(
        data: FactoryCreateRequestUUIDDiscountHomeCategoryDetail,
    ): Promise<BaseResponseDiscountHomeCategoryDetail> {
        const url = 'api/v1/cms/discount-home-categories/create';
        return axiosClient.post(url, data);
    },
    deleteDiscount(idData: string | undefined): Promise<BaseResponseFactoryDeleteResponse> {
        const url = `api/v1/cms/discount-home-categories/${idData}/delete`;
        return axiosClient.delete(url);
    },
    updateDiscount(
        data: FactoryUpdateRequestUUIDDiscountHomeCategoryDetail,
    ): Promise<BaseResponseDiscountHomeCategoryDetail> {
        const url = 'api/v1/cms/discount-home-categories/update';
        return axiosClient.put(url, data);
    },
};

export default discountApi;
