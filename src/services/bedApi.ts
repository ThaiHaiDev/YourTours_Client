import axiosClient from '../share/axios-client/axiosClient';

const bedApi = {
    getAllTypeBed(): Promise<any> {
        const url = 'api/v1/cms/bed-categories/page?number=0&size=20';
        return axiosClient.get(url);
    },
    addTypeBed(data : any): Promise<any> {
        const url = 'api/v1/cms/bed-categories/create';
        return axiosClient.post(url,data);
    },
    deleteTypeBed(idData : string | undefined): Promise<any> {
        const url = `api/v1/cms/bed-categories/${idData}/delete`;
        return axiosClient.delete(url);
    },
    updateTypeBed(data : any): Promise<any> {
        const url = 'api/v1/cms/bed-categories/update';
        return axiosClient.put(url, data);
    },
};

export default bedApi;
