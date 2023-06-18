import axiosClient from '../share/axios-client/axiosClient';
import { BaseResponseAmenityDetail } from '../share/models/amenities';
import {
    AmenityCategoriesModel,
    BaseResponseAmenityCategoryHomeDetail,
    BaseResponseAmenityOfHomeDetail,
    BaseResponseBasePagingResponseAmenityCategoryHomeDetail,
    FactoryCreateRequestUUIDAmenityOfHomeDetail,
    FactoryUpdateRequestUUIDAmenityCategoryDetail,
} from '../share/models/amenityCategories';
import { BaseResponseFactoryDeleteResponse } from '../share/models/cms';

const amenityCategoryApi = {
    getAmenityCategories(): Promise<BaseResponseAmenityCategoryHomeDetail> {
        const url = 'api/v1/cms/amenity-categories/page?isDefault=true';
        return axiosClient.get(url);
    },

    getAmenityCategoriesAll(): Promise<BaseResponseAmenityCategoryHomeDetail> {
        const url = 'api/v1/cms/amenity-categories/page?number=0&size=20';
        return axiosClient.get(url);
    },
    addAmenityCategories(data: AmenityCategoriesModel): Promise<BaseResponseAmenityCategoryHomeDetail> {
        const url = 'api/v1/cms/amenity-categories/create';
        return axiosClient.post(url, data);
    },
    deleteAmenityCategories(idData: string | undefined): Promise<BaseResponseFactoryDeleteResponse> {
        const url = `api/v1/cms/amenity-categories/${idData}/delete`;
        return axiosClient.delete(url);
    },
    updateAmenityCategories(
        data: FactoryUpdateRequestUUIDAmenityCategoryDetail,
    ): Promise<BaseResponseAmenityCategoryHomeDetail> {
        const url = 'api/v1/cms/amenity-categories/update';
        return axiosClient.put(url, data);
    },

    getAmenityCategoriesAllDetail(
        idHome: string | undefined,
    ): Promise<BaseResponseBasePagingResponseAmenityCategoryHomeDetail> {
        const url = `api/v1/cms/amenity-categories/page/child?homeId=${idHome}`;
        return axiosClient.get(url);
    },
    updateActiveConvenientItem(
        data: FactoryCreateRequestUUIDAmenityOfHomeDetail,
    ): Promise<BaseResponseAmenityOfHomeDetail> {
        const url = `api/v1/cms/amenities-of-homes/create`;
        return axiosClient.post(url, data);
    },
    getAllAmenityInCategories(
        idCata: string,
        idHome: string | undefined,
    ): Promise<BaseResponseAmenityCategoryHomeDetail> {
        const url = `api/v1/cms/amenity-categories/home/${idCata}/detail?homeId=${idHome}`;
        return axiosClient.get(url);
    },
    getAmenityInCategories(idCata: string): Promise<BaseResponseAmenityDetail> {
        const url = `api/v1/cms/amenities/page?categoryId=${idCata}`;
        return axiosClient.get(url);
    },
};

export default amenityCategoryApi;
