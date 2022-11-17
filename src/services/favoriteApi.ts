import axiosClient from '../share/axios-client/axiosClient';

const favoriteApi = {
    likeFavoriteRoom(data: any): Promise<any> {
        const url = `api/v1/app/favorites/handle`;
        return axiosClient.post(url, data);
    },
    getAllFavoritesRoom(): Promise<any> {
        const url = 'api/v1/app/favorites/pages?number=0&size=20';
        return axiosClient.get(url);
    },
};

export default favoriteApi;
