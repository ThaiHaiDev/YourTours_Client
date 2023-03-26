import axiosClient from '../share/axios-client/axiosClient';
import { BaseResponseBasePagingResponseDiscountCampaignInfo } from '../share/models/discountCompaign';

const advertisementApi = {
    getDiscountsCampaign(): Promise<BaseResponseBasePagingResponseDiscountCampaignInfo> {
        const url = 'api/v1/public/discounts-campaign/page?number=0&size=20';
        return axiosClient.get(url);
    },
};

export default advertisementApi;
