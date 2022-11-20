import axiosClient from '../share/axios-client/axiosClient';
import { CreateHomeDetailResquest } from '../share/models/homeDetail';

const homeDetailApi = {
    createHomeDetailByHost(data: CreateHomeDetailResquest): Promise<any> {
        const url = 'api/v1/cms/homes/create';
        return axiosClient.post(url, data);
    },
    getListHomeOfHost(): Promise<any> {
        const url = `api/v1/cms/homes/page`;
        return axiosClient.get(url);
    },
    getDetailHome(idHome : string | undefined): Promise<any> {
        const url =`api/v1/public/homes/${idHome}/detail`;
        return axiosClient.get(url);
    },
};

export default homeDetailApi;
