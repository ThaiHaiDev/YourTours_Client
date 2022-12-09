import axiosClient from '../share/axios-client/axiosClient';

const surchargeApi = {
    getAllSurcharge(): Promise<any> {
        const url = 'api/v1/cms/surcharge-home-categories/page?number=0&size=20';
        return axiosClient.get(url);
    },
};

export default surchargeApi;
