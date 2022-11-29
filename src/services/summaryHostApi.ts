import axiosClient from "../share/axios-client/axiosClient";

const summaryHomeApi = {
    getWaiting(): Promise<any> {
        const url = 'api/v1/cms/booking/page?status=WAITING&number=0&size=20';
        return axiosClient.get(url);
    },
    getCheckIn(): Promise<any> {
        const url = 'api/v1/cms/booking/page?status=CHECK_IN&number=0&size=20';
        return axiosClient.get(url);
    },
    getCheckOut(): Promise<any> {
        const url = 'api/v1/cms/booking/page?status=CHECK_OUT&number=0&size=20';
        return axiosClient.get(url);
    },
};

export default summaryHomeApi;