import axiosClient from '../share/axios-client/axiosClient';

const surchargeApi = {
    getAllSurcharge(): Promise<any> {
        const url = 'api/v1/cms/surcharge-home-categories/page?number=0&size=20';
        return axiosClient.get(url);
    },
    addSurcharge(data : any): Promise<any> {
        const url = 'api/v1/cms/surcharge-home-categories/create';
        return axiosClient.post(url,data);
    },
    deleteSurcharge(idData : string | undefined): Promise<any> {
        const url = `api/v1/cms/surcharge-home-categories/${idData}/delete`;
        return axiosClient.delete(url);
    },
    updateSurcharge(data : any): Promise<any> {
        const url = 'api/v1/cms/surcharge-home-categories/update';
        return axiosClient.put(url, data);
    },
};

export default surchargeApi;
