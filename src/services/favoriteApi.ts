import axiosClient from '../share/axios-client/axiosClient';
import { BaseResponseSuccessResponse } from '../share/models/cms';
import { BaseResponseBasePagingResponseHomeInfo, ItemFavoritesDetail } from '../share/models/favorite';

const favoriteApi = {
    likeFavoriteRoom(data: ItemFavoritesDetail): Promise<BaseResponseSuccessResponse> {
        const url = `api/v1/app/favorites/handle`;
        return axiosClient.post(url, data);
    },
    getAllFavoritesRoom(): Promise<BaseResponseBasePagingResponseHomeInfo> {
        const url = 'api/v1/app/favorites/pages?number=0&size=20';
        return axiosClient.get(url);
    },
};

export default favoriteApi;
