import axiosClient from "../share/axios-client/axiosClient";

const roomOfHomeApi = {
    getAllRoomOfHome(): Promise<any> {
        const url = 'api/v1/cms/room-of-home/page?number=0&size=20';
        return axiosClient.get(url);
    },
};

export default roomOfHomeApi;