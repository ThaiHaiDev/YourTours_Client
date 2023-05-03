import axiosClient from '../share/axios-client/axiosClient';

const evaluateApi = {
    getAllEvalueteByHomeId(idHome : string | undefined): Promise<any> {
        const url = `api/v1/public/homes/page/evaluates?homeId=${idHome}&number=0&size=20`;
        return axiosClient.get(url);
    },
    addEvaluate(data: any): Promise<any> {
        const url = 'api/v1/app/booking/comment';
        return axiosClient.post(url, data);
    },
}

export default evaluateApi;