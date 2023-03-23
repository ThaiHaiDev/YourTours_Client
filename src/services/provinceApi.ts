import axiosClient from '../share/axios-client/axiosClient';
import { ResponseHomeInfoSearch } from '../share/models/homeSearch';
import { BaseResponseBasePagingResponseProvincePopular, BaseResponseListProvinceModel } from '../share/models/province';

const provinceApi = {
    getProvincePopular(): Promise<BaseResponseBasePagingResponseProvincePopular> {
        const url = `api/v1/public/app/provinces/page?number=0&size=8`;
        return axiosClient.get(url);
    },
    searchByProvince(dataSearch: string | undefined): Promise<ResponseHomeInfoSearch> {
        const url = `api/v1/public/homes/page/search?keyword=${dataSearch}&number=0&size=20`;
        return axiosClient.get(url);
    },
    getListProvices(): Promise<BaseResponseListProvinceModel> {
        const url = `api/v1/public/app/provinces/list`;
        return axiosClient.get(url);
    },
};

export default provinceApi;
