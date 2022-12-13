import axiosClient from '../share/axios-client/axiosClient';

const discountApi = {
    getAllDiscount(): Promise<any> {
        const url = `api/v1/cms/discount-home-categories/page?number=0&size=20`;
        return axiosClient.get(url);
    },
    addDiscount(data : any): Promise<any> {
        const url = 'api/v1/cms/discount-home-categories/create';
        return axiosClient.post(url,data);
    },
    deleteDiscount(idData : string | undefined): Promise<any> {
        const url = `api/v1/cms/discount-home-categories/${idData}/delete`;
        return axiosClient.delete(url);
    },
    updateDiscount(data : any): Promise<any> {
        const url = 'api/v1/cms/discount-home-categories/update';
        return axiosClient.put(url, data);
    },
};

export default discountApi;
