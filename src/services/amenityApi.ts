import axiosClient from '../share/axios-client/axiosClient';

const amenityApi = {
    getAllAmenity(): Promise<any> {
        const url = 'api/v1/cms/amenities/page?number=0&size=20';
        return axiosClient.get(url);
    },
};

export default amenityApi;
