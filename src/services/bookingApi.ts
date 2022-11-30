import axiosClient from '../share/axios-client/axiosClient';

const bookingApi = {
    bookingRoom(data : any): Promise<any> {
        const url = 'api/v1/app/booking/create';
        return axiosClient.post(url, data);
    },
    getHistoryOfUser(): Promise<any> {
        const url = 'api/v1/app/booking/page';
        return axiosClient.get(url);
    },
    cancelBooking(data: any): Promise<any> {
        const url = 'api/v1/app/booking/cancel';
        return axiosClient.put(url, data);
    },
};

export default bookingApi;
