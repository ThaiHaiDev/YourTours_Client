import axiosClient from '../share/axios-client/axiosClient';

const advertisementApi = {
    getDiscountsCampaign(): Promise<any> {
        const url = 'api/v1/public/discounts-campaign/page?number=0&size=20';
        return axiosClient.get(url);
    },
};

export default advertisementApi;
