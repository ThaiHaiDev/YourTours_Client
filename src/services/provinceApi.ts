import axiosClient from '../share/axios-client/axiosClient';

const provinceApi = {
    getProvincePopular(): Promise<any> {
        const url = `api/v1/public/app/provinces/page?number=0&size=8`;
        return axiosClient.get(url);
    },
    searchByProvince(dataSearch: string | undefined): Promise<any> {
        const url = `api/v1/public/homes/page/search?keyword=${dataSearch}&number=0&size=20`;
        return axiosClient.get(url);
    },
    getListProvices(): Promise<any> {
        const url = `api/v1/public/app/provinces/list`;
        return axiosClient.get(url);
    },
};

export default provinceApi;
