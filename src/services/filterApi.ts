import axiosClient from '../share/axios-client/axiosClient';

const filterApi = {
    getAllFilterNavbar(): Promise<any> {
        const url = 'api/v1/public/amenities/page/set-filter?number=0&size=20';
        return axiosClient.get(url);
    },
    getAllRoomsNew(): Promise<any> {
        const url = 'api/v1/public/homes/page/filter?amenities=?number=0&size=20';
        return axiosClient.get(url);
    },
    // api/v1/public/homes/page/filter?amenities=3fa85f64-5717-4562-b3fc-2c963f66afa6&amenities=3fa85f64-5717-4562-b3fc-2c963f66afa6&number=0&size=20
};

export default filterApi;
