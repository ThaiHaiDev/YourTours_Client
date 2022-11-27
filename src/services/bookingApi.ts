import axiosClient from '../share/axios-client/axiosClient';

const bookingApi = {
    bookingRoom(data : any): Promise<any> {
        const url = 'api/v1/public/booking/create';
        return axiosClient.post(url, data);
    }
};

export default bookingApi;
