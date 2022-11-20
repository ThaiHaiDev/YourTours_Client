import axiosClient from '../share/axios-client/axiosClient';

const provinceApi = {
    getProvincePopular(): Promise<any> {
        const url = `api/v1/public/homes/page?sort=VIEW&number=0&size=8`;
        return axiosClient.get(url);
    },
};

export default provinceApi;
