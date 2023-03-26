import axiosClient from '../share/axios-client/axiosClient';
import {
    BaseResponseBasePagingResponseHomeInfo,
    BaseResponseHomeDetail,
    CreateHomeDetailResquest,
} from '../share/models/homeDetail';

const homeDetailApi = {
    createHomeDetailByHost(data: CreateHomeDetailResquest): Promise<BaseResponseHomeDetail> {
        const url = 'api/v1/cms/homes/create';
        return axiosClient.post(url, data);
    },
    getListHomeOfHost(): Promise<BaseResponseBasePagingResponseHomeInfo> {
        const url = `api/v1/cms/homes/page`;
        return axiosClient.get(url);
    },
    getDetailHome(idHome: string | undefined): Promise<any> {
        const url = `api/v1/public/homes/${idHome}/detail`;
        return axiosClient.get(url);
    },
};

export default homeDetailApi;
