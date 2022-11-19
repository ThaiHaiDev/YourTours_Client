import axiosClient from "../share/axios-client/axiosClient";

const roomOfHomeApi = {
    getAllRoomOfHome(idRoom: string | undefined): Promise<any> {
        const url = `api/v1/cms/room-of-home/page?homeId=${idRoom}number=0&size=20`;
        return axiosClient.get(url);
    },
    getAllBedOfRoom(idRoom: string | undefined): Promise<any> {
        const url = `api/v1/cms/bed-categories/page/room-id?roomHomeId=${idRoom}&number=0&size=20`;
        return axiosClient.get(url);
    }, 
    saveCountBedOfHome(data : any): Promise<any> {
        const url = 'api/v1/cms/bed-of-home/create/list';
        return axiosClient.post(url, data);
    }, 
    deleteRoomOfHome(idRoom : string | undefined): Promise<any> {
        const url = `api/v1/cms/room-of-home/${idRoom}/delete`;
        return axiosClient.delete(url);
    }
};

export default roomOfHomeApi;