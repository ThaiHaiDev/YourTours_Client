import axiosClient from '../share/axios-client/axiosClient';

const bedApi = {
    getAllTypeBed(): Promise<any> {
        const url = 'api/v1/cms/bed-categories/page?number=0&size=20';
        return axiosClient.get(url);
    },
};

export default bedApi;
