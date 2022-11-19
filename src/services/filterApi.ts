import axiosClient from '../share/axios-client/axiosClient';

const filterApi = {
    getAllFilterNavbar(): Promise<any> {
        const url = 'api/v1/public/amenities/page/set-filter?number=0&size=20';
        return axiosClient.get(url);
    },
    getAllRoomsNew(): Promise<any> {
        const url = 'api/v1/public/homes/page?number=0&size=20';
        return axiosClient.get(url);
    },
    getAllRoomsWithFilter(filter: any): Promise<any> {
        const url = `api/v1/public/homes/page/filter?${filter}number=0&size=20`;
        return axiosClient.get(url);
    },
};

export default filterApi;
