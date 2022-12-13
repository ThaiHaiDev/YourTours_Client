import axiosClient from '../share/axios-client/axiosClient';

const amenityApi = {
    getAllAmenity(): Promise<any> {
        const url = 'api/v1/cms/amenities/page?number=0&size=100';
        return axiosClient.get(url);
    },
    addAmenity(data : any): Promise<any> {
        const url = 'api/v1/cms/amenities/create';
        return axiosClient.post(url,data);
    },
    deleteAmenity(idData : string | undefined): Promise<any> {
        const url = `api/v1/cms/amenities/${idData}/delete`;
        return axiosClient.delete(url);
    },
    updateAmenity(data : any): Promise<any> {
        const url = 'api/v1/cms/amenities/update';
        return axiosClient.put(url, data);
    },
};

export default amenityApi;
