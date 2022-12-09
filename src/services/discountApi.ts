import axiosClient from '../share/axios-client/axiosClient';

const discountApi = {
    getAllDiscount(): Promise<any> {
        const url = `api/v1/cms/discount-home-categories/page?number=0&size=20`;
        return axiosClient.get(url);
    },
};

export default discountApi;
