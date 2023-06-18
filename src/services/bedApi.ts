import axiosClient from '../share/axios-client/axiosClient';
import {
    BaseResponseBasePagingResponseBedCategoryInfo,
    BaseResponseBedCategoryDetail,
    FactoryCreateRequestUUIDBedCategoryDetail,
} from '../share/models/bed';
import { BaseResponseFactoryDeleteResponse } from '../share/models/cms';

const bedApi = {
    getAllTypeBed(): Promise<BaseResponseBasePagingResponseBedCategoryInfo> {
        const url = 'api/v1/cms/bed-categories/page?number=0&size=20';
        return axiosClient.get(url);
    },
    addTypeBed(data: FactoryCreateRequestUUIDBedCategoryDetail): Promise<BaseResponseBedCategoryDetail> {
        const url = 'api/v1/cms/bed-categories/create';
        return axiosClient.post(url, data);
    },
    deleteTypeBed(idData: string | undefined): Promise<BaseResponseFactoryDeleteResponse> {
        const url = `api/v1/cms/bed-categories/${idData}/delete`;
        return axiosClient.delete(url);
    },
    updateTypeBed(data: FactoryCreateRequestUUIDBedCategoryDetail): Promise<BaseResponseBedCategoryDetail> {
        const url = 'api/v1/cms/bed-categories/update';
        return axiosClient.put(url, data);
    },
};

export default bedApi;
