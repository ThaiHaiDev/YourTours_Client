import axiosClient from '../share/axios-client/axiosClient';
import { BasePagingResponseHomeInfo, BaseResponseBasePagingResponseAmenityInfo } from '../share/models/filter.model';

const filterApi = {
    getAllFilterNavbar(): Promise<BaseResponseBasePagingResponseAmenityInfo> {
        const url = 'api/v1/public/amenities/page/set-filter?number=0&size=20';
        return axiosClient.get(url);
    },
    getAllRoomsNew(): Promise<BasePagingResponseHomeInfo> {
        const url = 'api/v1/public/homes/page?number=0&size=20';
        return axiosClient.get(url);
    },
    getAllRoomsWithFilter(filter: any): Promise<any> {
        const url = `api/v1/public/homes/page/filter?${filter.queryParams}number=0&size=${filter.pagi}`;
        return axiosClient.get(url);
    },
};

export default filterApi;
