import axiosClient from '../share/axios-client/axiosClient';
import { BaseResponseAmenityDetail, BaseResponseAmenityDetailAdd, RequestAmenity } from '../share/models/amenities';
import { BaseResponseFactoryDeleteResponse, BaseResponseSuccessResponse } from '../share/models/cms';

const amenityApi = {
    getAllAmenity(searchText: string | undefined): Promise<BaseResponseAmenityDetail> {
        const url = `api/v1/cms/amenities/page?${searchText !== '' ? `keyword=${searchText}&` : ''}number=0&size=100`;
        return axiosClient.get(url);
    },
    addAmenity(data: RequestAmenity): Promise<BaseResponseAmenityDetailAdd> {
        const url = 'api/v1/cms/amenities/create';
        return axiosClient.post(url, data);
    },
    deleteAmenity(idData: string | undefined): Promise<BaseResponseFactoryDeleteResponse> {
        const url = `api/v1/cms/amenities/${idData}/delete`;
        return axiosClient.delete(url);
    },
    updateAmenity(data: RequestAmenity): Promise<BaseResponseSuccessResponse> {
        const url = 'api/v1/cms/amenities/update';
        return axiosClient.put(url, data);
    },
};

export default amenityApi;
