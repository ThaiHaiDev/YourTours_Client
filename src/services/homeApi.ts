import { AxiosResponse } from 'axios';
import axiosClient from '../share/axios-client/axiosClient';
import {
    ActiveHomeRequest,
    BaseResponseHostHomeDetailModel,
    FactoryUpdateRequestUUIDUpdateAddressHomeModel,
    FactoryUpdateRequestUUIDUpdateBasePriceHomeModel,
    FactoryUpdateRequestUUIDUpdateBaseProfileHomeModel,
} from '../share/models/home';
import { BaseResponseFactoryDeleteResponse } from '../share/models/cms';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const homeApi = {
    getRoomCategory(idHome: string | undefined): Promise<AxiosResponse> {
        const url = `${API_BASE_URL}api/v1/cms/homes/${idHome}/detail`;
        return axiosClient.get(url);
    },
    updateTitleHome(
        data: FactoryUpdateRequestUUIDUpdateBaseProfileHomeModel,
    ): Promise<BaseResponseHostHomeDetailModel> {
        const url = `api/v1/cms/homes/update/homes-profile`;
        return axiosClient.put(url, data);
    },
    updateAddressHome(data: FactoryUpdateRequestUUIDUpdateAddressHomeModel): Promise<BaseResponseHostHomeDetailModel> {
        const url = `api/v1/cms/homes/update/homes-address`;
        return axiosClient.put(url, data);
    },
    updatePriceHome(data: FactoryUpdateRequestUUIDUpdateBasePriceHomeModel): Promise<BaseResponseHostHomeDetailModel> {
        const url = `api/v1/cms/homes/update/homes-price`;
        return axiosClient.put(url, data);
    },
    getRoomFavorite(): Promise<BaseResponseHostHomeDetailModel> {
        const url = `api/v1/public/homes/page?sort=VIEW&number=0&size=8`;
        return axiosClient.get(url);
    },
    getAllHome(searchText: string | undefined): Promise<BaseResponseHostHomeDetailModel> {
        const url = `api/v1/cms/homes/admin/pages?${searchText !== '' ? `keyword=${searchText}&` : ''}number=0&size=20`;
        return axiosClient.get(url);
    },
    activeHome(data: ActiveHomeRequest): Promise<BaseResponseFactoryDeleteResponse> {
        const url = `api/v1/cms/homes/update/status`;
        return axiosClient.put(url, data);
    },
};

export default homeApi;
